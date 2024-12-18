package com.example.feedback_api.controllers;


import com.example.feedback_api.dto.FeedbackRequestDTO;
import com.example.feedback_api.dto.FeedbackResponseDTO;
import com.example.feedback_api.services.FeedbackService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
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
    public ResponseEntity<FeedbackResponseDTO> createFeedback(@RequestBody FeedbackRequestDTO body) {
        return feedbackService.createFeedback(body);
    }


    @GetMapping("/get/{personId}")
    public ResponseEntity<List<FeedbackResponseDTO>> getFeedbacksByPerson(@PathVariable String personId) {
         return feedbackService.getFeedbacksByPerson(personId);
}

   @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteFeedback(@PathVariable Long id) {
         return feedbackService.deleteFeedback(id);
}


}
