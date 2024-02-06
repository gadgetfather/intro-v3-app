import db from '@/utils/db';
const getData = async () => {
  const todos = await db.todo.findMany({});
  return todos;
};

const Todos = async () => {
  const todos = await getData();
  return <div>page</div>;
};

export default Todos;
