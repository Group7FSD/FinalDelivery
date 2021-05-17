import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { Restaurent1Component } from './restaurent1/restaurent1.component';
import { Restaurent2Component } from './restaurent2/restaurent2.component';
import { Restaurent3Component } from './restaurent3/restaurent3.component';
import { Restaurent4Component } from './restaurent4/restaurent4.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: '',component: SidebarComponent, children : [
    {path: 'rest-1',component: Restaurent1Component},
    {path: 'rest-2',component:Restaurent2Component},
    {path: 'rest-3',component:Restaurent3Component},
    {path: 'rest-4',component:Restaurent4Component},
     
  ]},
   
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
