import { Component, OnInit } from '@angular/core';
import { LoadingService } from './services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  isLoading: boolean = false;
  constructor(private loadingService: LoadingService) {}
  ngOnInit(): void {
    this.subscribeToLoading();
  }

subscribeToLoading() {
  this.loadingService.isLoadingSubject.subscribe((isLoading) => {
    this.isLoading = isLoading;
  });
}

startLoading() {
  this.loadingService.startLoading();
}
stopLoading() {
  this.loadingService.stopLoading();
}



}
