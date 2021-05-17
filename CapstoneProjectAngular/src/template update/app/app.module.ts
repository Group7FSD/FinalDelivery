import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { Restaurent1Component } from './restaurent1/restaurent1.component';
import { Restaurent2Component } from './restaurent2/restaurent2.component';
import { Restaurent3Component } from './restaurent3/restaurent3.component';
import { Restaurent4Component } from './restaurent4/restaurent4.component';
import { SignupComponent } from './signup/signup.component';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    Restaurent1Component,
    Restaurent2Component,
    Restaurent3Component,
    Restaurent4Component,
    SignupComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
