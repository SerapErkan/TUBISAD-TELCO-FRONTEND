import { Component, OnInit } from '@angular/core';
import { AuthService, LocalStorageService, LoginService } from 'src/libs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isAuthenticated: boolean =false;
  constructor(private authService:AuthService,
    private local:LocalStorageService) { 

  }
  token!:any

  ngOnInit(): void {
this.token=this.local.getToken();
console.log(this.token)
this.onToggleMode();
  }

  onToggleMode(){
    if(this.token!==null){
      this.isAuthenticated=true;
    }
    else{
      console.log("fonksion çalışmadı")
    }
 
  }
  onLogut() {
    this.authService.logout()
    this.isAuthenticated=false;
    console.log("merhaba")
  }

}
