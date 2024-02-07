import React from 'react';
import { NewTodoForm } from '../components/NewTodoForm';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1>Layout</h1>
      <div>
        <NewTodoForm />
      </div>
      <div>{children}</div>
    </div>
  );
}
