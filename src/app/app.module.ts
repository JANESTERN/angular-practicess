import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TemplateformsComponent } from './templateforms/templateforms.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Reactive2Component } from './reactive2/reactive2.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateformsComponent,
    ReactiveformsComponent,
    Reactive2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
