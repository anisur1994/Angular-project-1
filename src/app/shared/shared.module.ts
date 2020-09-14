import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { DHeaderComponent } from './d-header/d-header.component';
import { DSidebarComponent } from './d-sidebar/d-sidebar.component';
import { DFooterComponent } from './d-footer/d-footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    DHeaderComponent,
    DSidebarComponent,
    DFooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    DHeaderComponent,
    DSidebarComponent,
    DFooterComponent
  ]
})
export class SharedModule { }
