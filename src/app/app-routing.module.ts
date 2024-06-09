import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Custom imports:- like components
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CactivateGuard } from './cactivate.guard';

// Array of objects as routes defining here okay for redirects etc:-
const routes: Routes = [
  {
    path:"", component:LoginComponent
  },
  
  {
    path:"home", component:HomeComponent, canActivate:[CactivateGuard]
  },
  
  {
    path:"login", component:LoginComponent
  }

  // Implement pending fetaure:-
  // {
  //   path:'**',component:NotFoundComponent
  // }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
