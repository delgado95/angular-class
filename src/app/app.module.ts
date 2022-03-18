import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import {FormsModule} from "@angular/forms";
import { ContactComponent } from './contact/contact.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    ContactComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
