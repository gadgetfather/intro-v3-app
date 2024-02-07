import React from 'react';
import { Todo } from './Todo';

export function TodoList({
  todos,
}: {
  todos: {
    id: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    completed: boolean;
  }[];
}) {
  console.log('com', todos);

  return (
    <div>
      {todos?.map((todo) => {
        return (
          <Todo
            completed={todo.completed}
            content={todo.content}
            key={todo.id}
            createdAt={todo.createdAt}
            id={todo.id}
            updatedAt={todo.updatedAt}
          />
        );
      })}
    </div>
  );
}
