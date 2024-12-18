import { useState } from "react";
import { useTodoStore } from "../store/useTodoStore";
import "./../styles/TodoInput.css";

const TodoInput: React.FC<{ currentUser: string }> = ({ currentUser }) => {
    const [todo, setTodo] = useState<string>("");
    const addTodo = useTodoStore((state) => state.addTodo);

    const handleAddTodo = () => {
        if (todo.trim()) {
            addTodo(currentUser, todo);
            setTodo("");
        }
    };

    return (
        <div className="todo-input-container">
            <input
                type="text"
                className="todo-input"
                placeholder="Create a new todo..."
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button className="todo-button" onClick={handleAddTodo}>
                Add
            </button>
        </div>
    );
};

export default TodoInput;
