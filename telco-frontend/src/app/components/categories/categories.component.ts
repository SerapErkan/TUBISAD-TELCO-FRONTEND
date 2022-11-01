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

  isEdited:boolean= false;
  error: string = '';

  categoryDescription:string="";
  categoryName:string="";
  categoryId:number=0;
  constructor(
    private categoriesService: CategoriesService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getByCategories();
    this.AddForm();
  }

AddForm(){

    this.categoryAddForm = this.formBuilder.group({
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

  addCategoryById(): void {

    const category: Category = {
      ...this.categoryAddForm.value,
    };
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



  deleteCategories() {
    this.categoriesService.deleteCategory(this.categoryIdToDelete).subscribe(() => {
      this.categoryIdToDelete=0;
      this.getByCategories();
    });
    }

    deleteCategoriesById(id:number) {
      if(id !== null){
      this.categoriesService.deleteCategory(id).subscribe(() => {
        this.getByCategories();
      });
    }
      }
    
   
updateCategory(item:any){
// console.log(item) //control
this.categoryDescription=item.description;
this.categoryName=item.name
this.categoryId=item.id
this.isEdited=true;
}




   updateCategoriesById(): void {
    const category: Category = {
      id:this.categoryId,
      ...this.categoryAddForm.value,
    };
    this.categoriesService.updateCategory(category).subscribe({
      next: (res) => {
        console.info(`Category ${category.id} has updated`);
        this.isEdited=false;
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
  }
    


    // showErrors() {
    //   const { dirty, touched, errors } = this.categoryAddForm
    //   return dirty && touched && errors;
    // }

   
  }


