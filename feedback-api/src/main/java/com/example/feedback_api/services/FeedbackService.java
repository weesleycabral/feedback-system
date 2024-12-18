package com.example.feedback_api.services;

import com.example.feedback_api.dto.FeedbackRequestDTO;
import com.example.feedback_api.dto.FeedbackResponseDTO;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface FeedbackService {

    public ResponseEntity<FeedbackResponseDTO> createFeedback(FeedbackRequestDTO body);

    public ResponseEntity<List<FeedbackResponseDTO>> getFeedbacksByPerson(String personId);

    public ResponseEntity<Void> deleteFeedback(Long id);
}
