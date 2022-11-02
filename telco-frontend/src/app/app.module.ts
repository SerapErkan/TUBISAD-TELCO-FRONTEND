import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './components/categories/categories.component';
import{ HttpClientModule, HTTP_INTERCEPTORS}from '@angular/common/http'
import { CategoriesService } from './services/categories.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LoadingInterceptor } from './interceptors/interceptors/loading.interceptor';
import { LoadingService } from './services/loading.service';
import { CreateFakeArrayPipe } from './pipes/create-fake-array.pipe';
import { SplitePipePipe } from './pipes/splite-pipe.pipe';
@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    CreateFakeArrayPipe,
    SplitePipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
   
  ],
  providers: [CategoriesService,LoadingService,{ provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
