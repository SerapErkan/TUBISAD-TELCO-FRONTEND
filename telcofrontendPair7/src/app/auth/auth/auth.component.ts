import { Component, OnInit } from '@angular/core';
import {
 FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { AuthService,Users} from 'src/libs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  [x: string]: any;


  isLoginMode: boolean = false;
  // loading: boolean = false;
  // error: string="";

  authForm!: FormGroup;
  userName:string="";
  password:string="";
  error: string = '';

  constructor(    private formBuilder: FormBuilder, private authService:AuthService) { }

  ngOnInit(): void {
    this.autForms();

  } 

  onToggleMode() {
    this.isLoginMode = !this.isLoginMode;
  }


autForms(){
  
  this.authForm = this.formBuilder.group({
    userName: new FormControl(null,
      [
        Validators.required,
      ]),
    password: new FormControl(null,
      [
        Validators.required,
        Validators.minLength(5),
      ])
 
  });
}

userAdd(){
  if(this.isLoginMode){

    console.log("loginn mode ....")
  }
  else{
       const auth:Users = {
 ...this.authForm.value}

this.authService.signUp(auth).subscribe({
next: (response) => {
  console.info(`başarılı ${response.userName},${response.password}`);
},
error: (err) => {
  console.log(err);

  this.error = err.statusText;
},
complete: () => {
  if (this.error) this.error = '';
  this.authForm.reset();
},
});

}




}
}