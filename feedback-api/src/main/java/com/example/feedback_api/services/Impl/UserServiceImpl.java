package com.example.feedback_api.services.Impl;

import com.example.feedback_api.domain.user.User;
import com.example.feedback_api.dto.UserDTO;
import com.example.feedback_api.exceptions.UserNotFoundException;
import com.example.feedback_api.respositories.UserRepository;
import com.example.feedback_api.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public List<UserDTO> getAllUsers() {
        List<User> users = userRepository.findAll();
        return users.stream()
                .map(user -> new UserDTO(user.getId(), user.getName(), user.getEmail()))
                .collect(Collectors.toList());
    }

    @Override
    public UserDTO getUserById(String id) {
        User user = userRepository.findById(id).orElseThrow(UserNotFoundException::new);
        return new UserDTO(user.getId(), user.getName(), user.getEmail());
    }
}
