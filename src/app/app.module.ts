import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './components/global/input/input.component';
import { ButtonComponent } from './components/global/button/button.component';
import { ClickableDirective } from './components/global/button/clickable.directive';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ButtonComponent,
    ClickableDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
