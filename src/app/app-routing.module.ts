import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loginComponent } from './account/business-components/login/login.component';
import { SignInComponent } from './account/business-components/SignIn/signIn.component';
import { LibraryCatalogueComponent } from './lib/business-components/library/library-catalogue.component';
import { BookDetailComponent } from './lib/business-components/book-detail/book-detail.component';
import { TableComponent } from './table/business-components/table/table.component';

const routes: Routes = [
  { path: '', component: LibraryCatalogueComponent },
  { path: 'books/:id', component: BookDetailComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'login', component: loginComponent }





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
