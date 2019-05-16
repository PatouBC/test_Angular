import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule, MatToolbarModule, MatSidenavModule, MatCheckboxModule, 
  MatButtonModule, MatExpansionModule, MatListModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TaskComponent } from './page/task/task.component';
import { CategoryComponent } from './page/category/category.component';


const appRoutes: Routes = [
  { path:'task', component: TaskComponent, data : { title: 'Liste des Tâches' } },
  { path:'category', component: CategoryComponent, data : { title: 'Liste des Catégories' } },
  { path:'', redirectTo:'/task', pathMatch: 'full' },  
  { path:'**', component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    MatExpansionModule,
    MatCheckboxModule,
    FlexLayoutModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
