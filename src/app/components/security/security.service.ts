import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  constructor(private http: HttpClient) {}

  getToDos(): Observable<any> {
    return this.http.get(environment.apiUrl + '/todos/1');
  }
}
