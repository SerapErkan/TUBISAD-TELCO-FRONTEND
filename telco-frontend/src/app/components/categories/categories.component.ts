import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoriesService } from '../../services/categories.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  // ?: null olabilir demek.
  // !: null olmayacak,bir değer verilecek

  categories!: Category[];
  categoryAddForm!: FormGroup;
  categoryIdToDelete: number = 0;

  isEdited: boolean = false;
  isAdded: boolean = true;
  isDeleted: boolean = false;

  categoryDescription: string = "";
  categoryName: string = "";
  categoryId: number = 0;


  error: string = '';
  constructor(
    private categoriesService: CategoriesService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getByCategories();
    this.AddForm();
    console.log("a:", this.isAdded,   "d:", this.isDeleted,"e:",this.isEdited);
  }

  AddForm() {

    this.categoryAddForm = this.formBuilder.group({
      id: new FormControl(null,
        [
          Validators.required,
        ]),
      name: new FormControl(null,
        [
          Validators.required,
          Validators.minLength(5),
        ]),
      description: new FormControl(null,
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(20),
        ]),

    });
  }

  getByCategories(): void {
    this.categoriesService.getCategories().subscribe((response) => {
      this.categories = response;
    });
  }

  add_edit_CategoryById(): void {

    if (this.isEdited === true) {
      const category: Category = {
        ...this.categoryAddForm.value,
      };
      this.categoriesService.updateCategory(category).subscribe({
        next: (res) => {
          console.info(`Category ${category.id} has updated`);
        
        },
        error: (err) => {
          console.log(category);
          console.error(err);
        },
        complete: () => {
          this.isEdited = false;
          this.categoryAddForm.reset();
          this.getByCategories();
        },
      });

      this.isEdited = false;
    }
    if(this.isDeleted === true){

      this.categoriesService.deleteCategory(this.categoryId).subscribe( {
        next: (res) => {
          console.info(`Category(${this.categoryId}) has deleted.`);
        },
        error: (err) => {
          console.log(err);

          this.error = err.statusText;
        },
        complete: () => {
          if (this.error) this.error = '';
          this.categoryAddForm.reset();
          this.isDeleted=false;
          this.getByCategories();
        },
    });
    
    this.isDeleted =false;

    }
    if(this.isAdded===true){
          const category: Category = {
        ...this.categoryAddForm.value}
        
      this.categoriesService.addCategory(category).subscribe({
        next: (response) => {
          console.info(`Category(${response.id}) has added.`);
        },
        error: (err) => {
          console.log(err);

          this.error = err.statusText;
        },
        complete: () => {
          if (this.error) this.error = '';
          this.categoryAddForm.reset();
          this.getByCategories();
        },
      });

      }



    }
  
    
  


 

  // deleteCategoriesById(id:number) {
  //   if(id !== null){
  //     this.isDeleted=true;
  //   this.categoriesService.deleteCategory(id).subscribe(() => {
  //     this.getByCategories();
  //   });
  // }
  //   }

  deleteCategoriesById(item:any) {
    this.categoryDescription = item.description;
    this.categoryName = item.name;
    this.categoryId = item.id; 
    this.isDeleted=true;
  }

  updateCategory(item: any) {
    this.categoryId = item.id;
    this.categoryDescription = item.description;
    this.categoryName = item.name;
    this.isEdited = true;
    this.isAdded=false;
    this.isDeleted=false


  }


  // showErrors() {
  //   const { dirty, touched, errors } = this.categoryAddForm
  //   return dirty && touched && errors;
  // }

  deleteCategories() {
    this.categoriesService.deleteCategory(this.categoryId).subscribe(() => {
      this.categoryId = 0;
      this.getByCategories();
    });
  }


}


