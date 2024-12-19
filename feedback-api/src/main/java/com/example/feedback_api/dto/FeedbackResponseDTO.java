package com.example.feedback_api.dto;

import java.time.LocalDateTime;

public record FeedbackResponseDTO(String id, String name, String recipient, String message, String senderId, LocalDateTime createdAt) {
}
