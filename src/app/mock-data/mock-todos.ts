import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Todo } from '../todos/todo';

export class MockTodos implements InMemoryDbService {
  createDb() {
    const todos: Todo[] = [
      {
        id: 1,
        description: 'ABCD'
      },
      {
        id: 2,
        description: 'EFGH'
      },
      {
        id: 3,
        description: 'IJKL'
      },
      {
        id: 4,
        description: 'MNOP'
      },
      {
        id: 5,
        description: 'QRST'
      }
    ];
    return { todos }
  }
}