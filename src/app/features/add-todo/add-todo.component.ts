import { Component, OnInit } from "@angular/core";
import { Todo } from "src/app/services/model/Todo";
import { FormGroup, FormControl, Validators } from '@angular/forms'
@Component({
    selector: 'add-todo',
    templateUrl: './add-todo.component.html',
    styleUrls: ['./add-todo.component.scss']
})
export class AddTodo implements OnInit {

    title = "Todo List";
    form: FormGroup;
    todos: Todo[];

    constructor() {
        this.form = new FormGroup({
            value: new FormControl('', Validators.required)
        })
    }

    ngOnInit() {

    }

    addTodo() {
        this.form.reset();
    }

    markAsDone(todo: Todo) {
        todo.done = !todo.done;
    }


}