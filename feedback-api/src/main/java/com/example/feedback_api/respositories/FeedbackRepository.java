package com.example.feedback_api.respositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.feedback_api.domain.Feedback;

import java.util.List;

public interface FeedbackRepository extends JpaRepository<Feedback, String> {
    List<Feedback> findByRecipient(String to);
}
