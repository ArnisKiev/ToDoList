import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTasksComponent } from './all.tasks/all.tasks.component';
import { MyTasksComponent } from './Pages/my.tasks/my.tasks.component';
import { RegisterMenuComponent } from './Pages/register.menu/register.menu.component';
import { SignInMenuComponent } from './Pages/sign.in.menu/sign.in.menu.component';

const routes: Routes = [
  { path: 'signin', component: SignInMenuComponent },
  { path: 'signin/register', component: RegisterMenuComponent },
  { path: 'my-tasks', component: MyTasksComponent },
  { path: 'all-tasks', component: AllTasksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
