package com.example.feedback_api.services;

import com.example.feedback_api.dto.UserDTO;

import java.util.List;

public interface UserService {
    List<UserDTO> getAllUsers();
}
