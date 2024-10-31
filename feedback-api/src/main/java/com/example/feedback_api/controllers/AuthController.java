package com.example.feedback_api.controllers;

import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.feedback_api.domain.user.User;
import com.example.feedback_api.dto.LoginRequestDTO;
import com.example.feedback_api.dto.RegisterRequestDTO;
import com.example.feedback_api.dto.ResponseDTO;
import com.example.feedback_api.infra.security.TokenService;
import com.example.feedback_api.respositories.UserRepository;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

  private final UserRepository repository;
  private final PasswordEncoder passwordEncoder;
  private final TokenService tokenService;

  @PostMapping("/register")
  public ResponseEntity register(@RequestBody RegisterRequestDTO body) {
    Optional<User> user = this.repository.findByEmail(body.email());
    if (user.isEmpty()) {
      User newUser = new User();
      newUser.setPassword(passwordEncoder.encode(body.password()));
      newUser.setEmail(body.email());
      newUser.setName(body.name());
      this.repository.save(newUser);
      String token = this.tokenService.generateToken(newUser);
      return ResponseEntity.ok(new ResponseDTO(newUser.getEmail(), token));
    }

    return ResponseEntity.badRequest().build();
  }

  @PostMapping("/login")
  public ResponseEntity login(@RequestBody LoginRequestDTO body) {
    User user = this.repository.findByEmail(body.email())
        .orElseThrow(() -> new RuntimeException("User Not Found"));
    if (passwordEncoder.matches(body.password(), user.getPassword())) {
      String token = this.tokenService.generateToken(user);
      return ResponseEntity.ok(new ResponseDTO(user.getName(), token));
    }
    return ResponseEntity.badRequest().build();
  }

}
