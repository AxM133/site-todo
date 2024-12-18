import { useTodoStore } from "../store/useTodoStore";

const TodoFooter: React.FC = () => {
  const todos = useTodoStore((state) => state.todos);
  const remaining = todos.filter((todo) => !todo.completed).length;

  return (
    <div className="text-center">
      <p>{remaining} task{remaining !== 1 ? "s" : ""} left</p>
    </div>
  );
};

export default TodoFooter;
