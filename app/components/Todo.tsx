import React from 'react';

export function Todo(todo: {
  id: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  completed: boolean;
}): JSX.Element {
  return <div key={todo.id}>{todo.content}</div>;
}
