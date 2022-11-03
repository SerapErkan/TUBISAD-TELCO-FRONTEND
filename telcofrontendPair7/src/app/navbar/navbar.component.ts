import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService, LocalStorageService, LoginService } from 'src/libs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isAuthenticated: boolean =false;
  constructor(private authService:AuthService,
    private local:LocalStorageService, private toastr:ToastrService) { 

  }
  token!:any
 
ngOnInit(): void {
console.log(this.token)
  }

  onToggleMode(){
  
    if(this.token!==null){
      this.isAuthenticated=true;
    }
    else{
      console.log("token yok")
    }
  }

  onLogut() {
    this.authService.logut()
    this.isAuthenticated=false;
    console.log("token silindi")
    this.toastr.success("Token Deleted")
  }

}
