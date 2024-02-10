import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './components/global/input/input.component';
import { ButtonComponent } from './components/global/button/button.component';
import { ClickableDirective } from './components/global/button/clickable.directive';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { ToggleHidePasswordComponent } from './components/global/toggle-hide-password/toggle-hide-password.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { NewsComponent } from './pages/news/news.component';
import { CarouselCardComponent } from './components/news-page/carousel-card/carousel-card.component';
import { UpdateCardComponent } from './components/news-page/update-card/update-card.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ButtonComponent,
    ClickableDirective,
    RegisterComponent,
    LoginComponent,
    ToggleHidePasswordComponent,
    TopMenuComponent,
    NewsComponent,
    CarouselCardComponent,
    UpdateCardComponent
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
