import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store'
import { reducer } from './state/todo.reducer'
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from './state/todo.effects';

@NgModule({
  imports: [
    StoreModule.forFeature('todos', reducer),
    EffectsModule.forFeature([TodoEffects])
  ],
  declarations: [ ]
})
export class TodoModule {
    
 }
