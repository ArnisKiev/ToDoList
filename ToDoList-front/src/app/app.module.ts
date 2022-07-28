import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './Components/menu/menu.component';
import { TaskComponent } from './Components/task/task.component';
import { SignInMenuComponent } from './Pages/sign.in.menu/sign.in.menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreatingTaskFormComponent } from './Components/creating.task.form/creating.task.form.component';
import { AllTasksComponent } from './all.tasks/all.tasks.component';
import { MyTasksComponent } from './Pages/my.tasks/my.tasks.component';
import { TaskStatusPipe } from './Pipes/task-status.pipe';
import { PriorityTaskPipe } from './Pipes/priotity-task.pipe';
import { RegisterMenuComponent } from './Pages/register.menu/register.menu.component';
import { ErrorValidationPipe } from './Pipes/error.validation.pipe';
import { CreateduserComponent } from './createduser/createduser.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TaskComponent,
    SignInMenuComponent,
    RegisterMenuComponent,
    CreatingTaskFormComponent,
    AllTasksComponent,
    MyTasksComponent,
    TaskStatusPipe,
    PriorityTaskPipe,
    ErrorValidationPipe,
    CreateduserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
