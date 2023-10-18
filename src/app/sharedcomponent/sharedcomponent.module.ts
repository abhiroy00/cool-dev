import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedcomponentRoutingModule } from './sharedcomponent-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    SharedcomponentRoutingModule
  ]
})
export class SharedcomponentModule { }
