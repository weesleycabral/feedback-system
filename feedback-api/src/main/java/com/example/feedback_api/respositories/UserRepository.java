package com.example.feedback_api.respositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.feedback_api.domain.user.User;

public interface UserRepository extends JpaRepository<User, String> {
  Optional<User> findByEmail(String email);
}