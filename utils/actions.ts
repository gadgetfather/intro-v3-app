'use server';

import db from '@/utils/db';
import { revalidatePath } from 'next/cache';
//complete to do server action
export const completeTodo = async (id: string) => {
  console.log('completeTodo', id);

  const data = await db.todo.update({
    where: { id },
    data: { completed: true },
  });
  revalidatePath('/todos');
};

export const newTodo = async (formData) => {
  const data = await db.todo.create({
    data: { content: formData.get('content') },
  });

  revalidatePath('/todos');
};
