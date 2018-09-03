import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppLoginComponent } from './authentication/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { AppHeaderComponent } from './home/header.component';
import { AppWelcomeComponent } from './home/welcome.component';

import { HttpClientModule } from '@angular/common/http'
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'
import { MockTodos } from './mock-data/mock-todos';
import { AppTodoListComponent } from './todos/todo-list/todo-list.component';
import { AppTodoShellComponent } from './todos/todo-shell/todo-shell.component';
import { TodoService } from './todos/todo.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TodoModule } from './todos/todo.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
@NgModule({
  declarations: [
    AppComponent,
    AppLoginComponent,
    AppHeaderComponent,
    AppWelcomeComponent,
    AppTodoListComponent,
    AppTodoShellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodoModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(MockTodos),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      name: 'TODO List Demo App Devtools', 
      maxAge: 25 
    })
  ],
  providers: [ TodoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
