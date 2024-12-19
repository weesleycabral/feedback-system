package com.example.feedback_api.controllers;

import com.example.feedback_api.dto.FeedbackRequestDTO;
import com.example.feedback_api.dto.FeedbackResponseDTO;
import com.example.feedback_api.services.FeedbackService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/feedback")
@RequiredArgsConstructor
public class FeedbackController {

    @Autowired
    private final FeedbackService feedbackService;

    @PostMapping("/new")
    @ResponseStatus(value = HttpStatus.CREATED)
    public ResponseEntity<FeedbackResponseDTO> createFeedback(@RequestBody FeedbackRequestDTO feedbackRequest) {
        return feedbackService.createFeedback(feedbackRequest);
    }

    @GetMapping("/get/{personId}")
    @ResponseStatus(value = HttpStatus.OK)
    public ResponseEntity<List<FeedbackResponseDTO>> getFeedbacksByPerson(@PathVariable String personId) {
        return feedbackService.getFeedbacksByPerson(personId);
    }

    @DeleteMapping("/delete/{id}")
    @ResponseStatus(value = HttpStatus.NO_CONTENT)
    public void deleteFeedback(@PathVariable("id") String id) {
        feedbackService.deleteFeedbackById(id);
    }

}
