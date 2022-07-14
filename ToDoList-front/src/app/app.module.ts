import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { TaskComponent } from './task/task.component';
import { SignInMenuComponent } from './sign-in-menu/sign-in-menu.component';
import { RegisterMenuComponent } from './register-menu/register-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TaskComponent,
    SignInMenuComponent,
    RegisterMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
