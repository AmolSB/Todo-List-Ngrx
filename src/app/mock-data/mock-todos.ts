import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Todo } from '../todos/todo';

export class MockTodos implements InMemoryDbService {
  createDb() {
    const todos: Todo[] = [
      {
        description: 'ABCD'
      },
      {
        description: 'EFGH'
      },
      {
        description: 'IJKL'
      },
      {
        description: 'MNOP'
      },
      {
        description: 'QRST'
      }
    ];
    return { todos }
  }
}