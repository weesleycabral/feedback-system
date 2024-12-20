package com.example.feedback_api.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.example.feedback_api.exceptions.ErrorMessage;
import com.example.feedback_api.exceptions.UserNotFoundException;

@ControllerAdvice
public class CustomExceptionHandler extends ResponseEntityExceptionHandler {

  @ExceptionHandler({ UserNotFoundException.class })
  public ResponseEntity<ErrorMessage> handleUserNotFound(UserNotFoundException exception) {
    return ResponseEntity.status(exception.getStatus())
        .body(new ErrorMessage(exception.getMessage(), exception.getStatus()));
  }

  // @ExceptionHandler({ InvalidCredentialsException.class })
  // public ResponseEntity<ErrorMessage>
  // handleInvalidCredentialsException(InvalidCredentialsException exception) {
  // return ResponseEntity.status(exception.getStatus())
  // .body(new ErrorMessage(exception.getMessage(), exception.getStatus()));
  // }

}
