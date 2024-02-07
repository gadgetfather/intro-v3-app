import { newTodo } from '@/utils/actions';
import React from 'react';

export function NewTodoForm() {
  return (
    <div>
      <form action={newTodo}>
        <input type="text" name="content" className="border border-black/25" />
        <button>Add todo</button>
      </form>
    </div>
  );
}
