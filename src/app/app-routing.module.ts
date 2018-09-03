import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppLoginComponent } from './authentication/login/login.component';
import { AppHeaderComponent } from './home/header.component';
import { AppWelcomeComponent } from './home/welcome.component';
import { AppTodoShellComponent } from './todos/todo-shell/todo-shell.component';

const appRoutes: Routes = [
  { path: '', component: AppWelcomeComponent },
  { path: 'login', component: AppLoginComponent},
  { path: 'todos', component: AppTodoShellComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}

