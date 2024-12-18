import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Feedback } from '../models/feedback.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService extends BaseService {

  constructor(
    private http: HttpClient
  ) {
    super();
  }

  newFeedback(feedback: Feedback): Observable<Feedback> {
    return this.http.post<Feedback>(`${this.Basepath()}/feedback/new`, feedback, { headers: this.Headers() });
  }

  getFeedbacksById(id: string) {
    return this.http.get(`${this.Basepath()}/feedback/get/${id}`, { headers: this.Headers() });
  }

  deleteFeedback(feedback: Feedback) {
    return this.http.delete(`${this.Basepath()}/feedback/delete/${feedback.id}`, { headers: this.Headers() });
  }


}
