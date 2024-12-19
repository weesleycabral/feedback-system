package com.example.feedback_api.respositories;

import com.example.feedback_api.domain.user.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FeedbackRepository extends JpaRepository<Feedback, String> {
    List<Feedback> findByRecipient(String to);
}
