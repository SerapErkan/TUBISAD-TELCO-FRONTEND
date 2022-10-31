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
  categoryId:any;

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
      name: ['', Validators.required,Validators.minLength(5),Validators.maxLength(20)],
      description: ['', [Validators.required, Validators.minLength(5),Validators.maxLength(20)]],
    });
  }

  getByCategories(): void {
    this.categoriesService.getCategories().subscribe((response) => {
      this.categories = response;
    });
  }

//add
  addCategoryById(): void {

    if (this.categoryAddForm.invalid) {
      this.error = 'Form is invalid';
      return;
    }

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


//delete
  deleteCategoriesById(id?:number) {
    if(id !== null){
    this.categoryIdToDelete=id!;
    }
      this.categoriesService.deleteCategory(this.categoryIdToDelete).subscribe(() => {
      this.getByCategories()
      this.categoryIdToDelete=0;
    });

     }
   

  // editCategoryById(id:number): void {
  //   this.isEdited=true;
  //   this.categoryId=id;
  //   let index= this.categories.findIndex(f=>f.id==id)
  // this.categoryName=this.categories[index].name;
  // this.categoryDescription=this.categories[index].description;
  //  }



     editCategoryById(id:number): void {

this.categoriesService.getCategories().subscribe({
  next: (response) => {
    let index= response.findIndex(f=>f.id==id)
   this.categoryName=this.categories[index].name;
   this.categoryDescription=this.categories[index].description;
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
})


     }

   
  }
