package com.example.feedback_api.services;

import com.example.feedback_api.dto.UserDTO;

import java.util.List;

public interface UserService {
    public List<UserDTO> getAllUsers();
    public UserDTO getUserById(String id);
}
