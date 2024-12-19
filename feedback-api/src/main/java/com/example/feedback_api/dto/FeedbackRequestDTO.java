package com.example.feedback_api.dto;

public record FeedbackRequestDTO(String name, String to, String message, String senderId) {
}
