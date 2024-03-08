import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import {SignupUserRequest} from '../../models/interfaces/User/SignupUserRequest';
import { Observable } from 'rxjs';
import { SignupUserResponse } from '../../models/interfaces/User/SignupUserResponse';
import { AuthResquest } from '../../models/interfaces/Auth/AuthRequest';
import { AuthResponse } from '../../models/interfaces/Auth/AuthResponse';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private API_URL = environment.API_URL;

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  signupUser(requestData: SignupUserRequest): Observable<SignupUserResponse>{

    return this.http.post<SignupUserResponse>(
      `${this.API_URL}/user`,
      requestData
    );}

  authUser(requestData: AuthResquest): Observable<AuthResponse>{

      return this.http.post<AuthResponse>(
        `${this.API_URL}/auth`,
        requestData
      );}

  isLoggedId(): boolean{
    const TOKEN = this.cookieService.get('USER_INFOR');
    return TOKEN ? true : false;
  }

}
