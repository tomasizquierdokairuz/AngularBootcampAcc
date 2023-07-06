import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [//declaraciones, componentes, directivas, ípes,etc
    AppComponent
  ],
  imports: [ //Solo se importan otros módulos
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
