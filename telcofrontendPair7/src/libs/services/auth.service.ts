import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TokenUserModel } from '../models/token-user-model';
import { Observable } from 'rxjs'
import { Users } from '../models/users';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  connection = environment.api.Url.users;
  constructor(private http: HttpClient) {
  }

  signUp(TokenUserModel:Users): Observable<Users> {
  return  this.http.post<Users>(this.connection,TokenUserModel);

  }




}

