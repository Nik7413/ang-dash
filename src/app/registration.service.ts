import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  baseUrl = "http://localhost:8095/registeruser"
  baseUrl2 = "http://localhost:8095/login"
  constructor(private HttpClient: HttpClient) { }

  studentregister(student: Student): Observable<object> {
    return this.HttpClient.post(`${this.baseUrl}`, student)
  }
  studentlogin(student: Student): Observable<object> {
    return this.HttpClient.post(`${this.baseUrl2}`, student)
  }
}
