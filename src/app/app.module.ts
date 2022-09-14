import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {TableModule} from "./table/table.module";
import {LibModule} from "./lib/lib.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TableModule,
    LibModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
