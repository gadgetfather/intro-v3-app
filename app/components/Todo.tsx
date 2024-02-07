'use client';
import React from 'react';
import { useTransition } from 'react';
import { completeTodo } from '@/utils/actions';

export function Todo(todo: {
  id: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  completed: boolean;
}): JSX.Element {
  const [isPending, startTransition] = useTransition();
  return (
    <div
      onClick={() => {
        console.log('click');

        startTransition(() => completeTodo(todo.id));
      }}
      key={todo.id}
      className={`border border-b cursor-pointer ${
        todo.completed ? 'bg-red-500' : ''
      }`}
    >
      {todo.content}
    </div>
  );
}
