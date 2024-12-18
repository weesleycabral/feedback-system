package com.example.feedback_api.services.Impl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.feedback_api.domain.user.User;
import com.example.feedback_api.dto.LoginRequestDTO;
import com.example.feedback_api.dto.RegisterRequestDTO;
import com.example.feedback_api.dto.ResponseDTO;
import com.example.feedback_api.infra.security.TokenService;
import com.example.feedback_api.respositories.UserRepository;
import com.example.feedback_api.services.AuthService;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Service
@AllArgsConstructor
@NoArgsConstructor
public class AuthServiceImpl implements AuthService {

  @Autowired
  private UserRepository repository;

  @Autowired
  private PasswordEncoder passwordEncoder;

  @Autowired
  private TokenService tokenService;

  @Override
  public ResponseEntity<ResponseDTO> register(@RequestBody RegisterRequestDTO body) {
    Optional<User> user = this.repository.findByEmail(body.email());
    if (user.isEmpty()) {
      User newUser = new User();
      newUser.setPassword(passwordEncoder.encode(body.password()));
      newUser.setEmail(body.email());
      newUser.setName(body.name());
      this.repository.save(newUser);
      String token = this.tokenService.generateToken(newUser);
      return ResponseEntity.ok(new ResponseDTO(newUser.getId(), newUser.getEmail(), newUser.getName(), token));
    }

    return ResponseEntity.badRequest().build();
  }

  @Override
  public ResponseEntity<ResponseDTO> login(@RequestBody LoginRequestDTO body) {
    User user = this.repository.findByEmail(body.email())
        .orElseThrow(() -> new RuntimeException("User Not Found"));
    if (passwordEncoder.matches(body.password(), user.getPassword())) {
      String token = this.tokenService.generateToken(user);
      return ResponseEntity.ok(new ResponseDTO(user.getId(), user.getEmail(), user.getName(), token));
    }
    return ResponseEntity.badRequest().build();
  }
}
