'use server';

import db from '@/utils/db';
import { revalidatePath } from 'next/cache';

export const newTodo = (formData) => {
  const data = db.todo.create({ data: { content: formData.get('content') } });
  console.log('prisma', data);
  revalidatePath('/todos');
  return data;
};
