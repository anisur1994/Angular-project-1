import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ContentComponent } from './content/content.component';
import { BooksComponent } from './content/books/books.component';
import { NewsComponent } from './content/news/news.component';
import { ErrorComponent } from './content/error/error.component';
import { LoginComponent } from './content/login/login.component';
import { RegisterComponent } from './content/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddCartComponent } from './content/add-cart/add-cart.component';
import { HomeComponent } from './dashboard/home/home.component';
import { PostsComponent } from './dashboard/posts/posts.component';
import { EditComponent } from "./dashboard/posts/edit/edit.component";


const routes: Routes = [
  {path: '', component: IndexComponent, pathMatch: 'full'},
  {path: 'index' , component: IndexComponent},
  {
    path: 'content',
    component: ContentComponent,
    children:
    [
      {
        path: '',
        redirectTo:'books',
        pathMatch: 'full'
      },
      {
        path: 'books',
        component: BooksComponent
      },
        {
          path: 'news',
          component: NewsComponent
        },
        {
          path: 'login',
          component: LoginComponent
        },
        {
          path: 'register',
          component: RegisterComponent
        },
        {
          path: 'cart',
          component: AddCartComponent
        }
    ]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
      },
      {
        path: 'posts',
        component: PostsComponent
      }
    ]
},
  {path: '**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingModules =
  [
    IndexComponent,
    ContentComponent,
    BooksComponent,
    NewsComponent,
    LoginComponent,
    ErrorComponent,
    RegisterComponent,
    DashboardComponent,
    AddCartComponent,
    EditComponent
  ]
