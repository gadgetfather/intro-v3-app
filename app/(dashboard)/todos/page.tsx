import { TodoList } from '@/app/components/TodoList';
import db from '@/utils/db';
const getData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const todos = await db.todo.findMany({});
  return todos;
};

const Todos = async () => {
  const todos = await getData();
  console.log(todos);

  return <TodoList todos={todos} />;
};

export default Todos;
