package com.example.feedback_api.services;

import org.springframework.http.ResponseEntity;

import com.example.feedback_api.dto.LoginRequestDTO;
import com.example.feedback_api.dto.RegisterRequestDTO;
import com.example.feedback_api.dto.ResponseDTO;

public interface AuthService {

  public ResponseEntity<ResponseDTO> register(RegisterRequestDTO body);

  public ResponseEntity<ResponseDTO> login(LoginRequestDTO body);
}
