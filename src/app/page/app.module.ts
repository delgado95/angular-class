import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PageComponent } from './test/page.component';
import {FormsModule} from "@angular/forms";
import { ContactComponent } from './contact/contact.component';
import { CardComponent } from './card/card.component';
import { FormComponent } from './form/form.component';
import { NbThemeModule } from '@nebular/theme';


@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    ContactComponent,
    CardComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NbThemeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
