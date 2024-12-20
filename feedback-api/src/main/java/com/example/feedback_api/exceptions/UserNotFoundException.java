package com.example.feedback_api.exceptions;

import org.springframework.http.HttpStatus;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = false)
public class UserNotFoundException extends RuntimeException {
  private final HttpStatus status = HttpStatus.NOT_FOUND;

  public UserNotFoundException() {
    super("User not found");
  }

}
