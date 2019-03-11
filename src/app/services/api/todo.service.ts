import { Injectable } from "@angular/core";
import { Todo } from "src/app/services/model/Todo";
import { UUID } from 'angular-uuid';
import { OnlineOfflineService } from "src/app/services/common/online-offline.service";
import { Dexie } from 'dexie'

@Injectable()
export class TodoService {
    private todos: Todo[] = [];
    private db: any;
    constructor(private readonly onlineOfflineService: OnlineOfflineService) {
        this.registerToEvents(onlineOfflineService);
        this.createDatabase();
    }

    addTodo(todo: Todo) {
        todo.id = UUID.UUID();
        todo.done = false;
        this.todos.push(todo);
    }

    getAllTodos() {
        return this.todos;
    }

    private registerToEvents(onlineOfflineService: OnlineOfflineService) {
        onlineOfflineService.connectionChanged.subscribe(online => {
            if(online) {
                console.log('went online')
                console.log('Sending all stored items');
            } else {
                console.log('went offline, storing in indexdb')
            }
        })
    }

    private createDatabase() {
        this.db = new Dexie('TodosDatabase');
        this.db.version(1).stores({
            todos: 'id,value,done'
        });
    }
}