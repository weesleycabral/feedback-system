package com.example.feedback_api.services.Impl;

import com.example.feedback_api.domain.user.Feedback;
import com.example.feedback_api.dto.FeedbackRequestDTO;
import com.example.feedback_api.dto.FeedbackResponseDTO;
import com.example.feedback_api.respositories.FeedbackRepository;
import com.example.feedback_api.respositories.UserRepository;
import com.example.feedback_api.services.FeedbackService;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
@NoArgsConstructor
public class FeedbackServiceImpl implements FeedbackService {

    @Autowired
    private FeedbackRepository feedbackRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public ResponseEntity<FeedbackResponseDTO> createFeedback(FeedbackRequestDTO body) {
        if (body.name() == null || body.to() == null || body.message() == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(null);
        }

        if (!userRepository.existsById(body.to()) || !userRepository.existsById(body.senderId())) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(null);
        }

        if (body.senderId().equals(body.to())) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }

        Feedback feedback = new Feedback();
        feedback.setName(body.name());
        feedback.setRecipient(body.to());
        feedback.setMessage(body.message());
        feedback.setSenderId(body.senderId());
        feedback.setCreatedAt(LocalDateTime.now());

        feedbackRepository.save(feedback);

        FeedbackResponseDTO responseDTO = new FeedbackResponseDTO(
                feedback.getId(),
                feedback.getName(),
                feedback.getRecipient(),
                feedback.getMessage(),
                feedback.getSenderId(),
                feedback.getCreatedAt());

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(responseDTO);
    }

    @Override
    public ResponseEntity<List<FeedbackResponseDTO>> getFeedbacksByPerson(String personId) {
        List<Feedback> feedbacks = feedbackRepository.findByRecipient(personId);

        List<FeedbackResponseDTO> responseDTOs = feedbacks.stream()
                .map(feedback -> new FeedbackResponseDTO(
                        feedback.getId(),
                        feedback.getName(),
                        feedback.getRecipient(),
                        feedback.getMessage(),
                        feedback.getSenderId(),
                        feedback.getCreatedAt()))
                .collect(Collectors.toList());

        return ResponseEntity.ok(responseDTOs);
    }

    @Override
    public void deleteFeedbackById(String id) {
        feedbackRepository.deleteById(id);
    }

    @Override
    public void deleteAllFeedbacks() {
        feedbackRepository.deleteAll();
    }
}
