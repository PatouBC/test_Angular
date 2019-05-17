import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule, MatToolbarModule, MatSidenavModule, MatCheckboxModule, 
         MatButtonModule, MatExpansionModule, MatListModule, MatMenuModule, 
         MatCardModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { TaskComponent } from './page/task/task.component';
import { CategoryComponent } from './page/category/category.component';
import { LoginComponent } from './page/login/login.component';
import { JwtInterceptor } from './class/jwtinterceptor';
import { ErrorInterceptor } from './class/error-interceptor';


const appRoutes: Routes = [
  { path:'task', component: TaskComponent, data : { title: 'Liste des Tâches' } },
  { path:'category', component: CategoryComponent, data : { title: 'Liste des Catégories' } },
  { path:'login', component: LoginComponent, data : { title: 'Connexion' } },
  { path:'', redirectTo:'/task', pathMatch: 'full' },  
  { path:'**', component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    CategoryComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatCardModule,
    NgbModule,
    FlexLayoutModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
