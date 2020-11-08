import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageModule } from './login/login.module';
import { RegisterPageModule } from './register/register.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginPageModule,
    RegisterPageModule
  ]
})
export class AuthenticationModule { }
