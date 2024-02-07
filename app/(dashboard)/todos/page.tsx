import { TodoList } from '@/app/components/TodoList';
import db from '@/utils/db';
const getData = async () => {
  const todos = await db.todo.findMany({});
  return todos;
};

const Todos = async () => {
  const todos = await getData();
  console.log(todos);

  return <TodoList todos={todos} />;
};

export default Todos;
