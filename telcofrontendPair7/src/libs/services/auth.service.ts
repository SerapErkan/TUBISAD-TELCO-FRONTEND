import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs'
import { Users } from '../models/users';
import { catchError, tap } from 'rxjs/operators';
import { UserToken } from '../models/user-token';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  connection = environment.api.Url

  constructor(private http: HttpClient) {
  }

  signUp(UserModel:Users): Observable<Users> {
  return  this.http.post<UserToken>(this.connection.users,UserModel)
  }

  login(UserModel:Users): Observable <Users>{
   return this.http.post<Users>(this.connection.auth,UserModel)
  }
  


}
