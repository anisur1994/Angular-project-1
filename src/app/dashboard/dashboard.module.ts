import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { EditComponent } from './posts/edit/edit.component';



@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent, 
    PostsComponent,
    EditComponent
  ],

  entryComponents: [
    EditComponent
  ],

  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule,
    MatIconModule,
    MatDialogModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class DashboardModule { }
