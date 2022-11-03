import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/libs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isAuthenticated: boolean = false;
  constructor(private authService:AuthService) { 

  }

  ngOnInit(): void {
    
  }

  onLogout() {
    this.isAuthenticated=!this.isAuthenticated;
    this.authService.logout()
  }

}
