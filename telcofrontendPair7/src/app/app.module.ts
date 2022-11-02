import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{ HttpClientModule,HTTP_INTERCEPTORS}from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { 
	IgxIconModule,
	IgxNavbarModule,
	IgxButtonModule,
  IgxBadgeModule 
 } from "igniteui-angular";
import { ErrorInterceptor } from 'src/libs/services/error.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,ReactiveFormsModule,
    HttpClientModule, 
   
      //Igx UI
    IgxIconModule,
    IgxNavbarModule,
    IgxButtonModule,  
    IgxBadgeModule 
    
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass:ErrorInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
