import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { loginComponent } from './business-components/login/login.component';
import { SignInComponent } from './business-components/SignIn/signIn.component';



@NgModule({
  declarations: [SignInComponent, loginComponent],
  imports: [
    CommonModule
  ]
})
export class AccountModule { }
