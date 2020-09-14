import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { BooksComponent } from './books/books.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { NewsComponent } from './news/news.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AddCartComponent } from './add-cart/add-cart.component';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    ContentComponent,
    BooksComponent,
    NewsComponent,
    LoginComponent,
    RegisterComponent,
    AddCartComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    MatDialogModule
  ]
})
export class ContentModule { }
