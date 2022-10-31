import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import {Observable  } from 'rxjs'
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
connections=environment.apiUrl.categories;
  constructor(private http:HttpClient) {

   }

   getCategories(): Observable<Category[]> {
    //get metodu Get Http istediğini hazırlıyor.
    return this.http.get<Category[]>(this.connections);
  }

  add(category: Category): Observable<Category> {
    return this.http.post<Category>(this.connections, category);
  }

  update(category: Category): Observable<Category> {
    return this.http.put<Category>(
      `${this.connections}/${category.id}`,
      category
    );
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.connections}/${id}`);
  }
}
