import React, { useEffect } from "react";
import { useTodoStore } from "../store/useTodoStore";
import TodoItem from "./TodoItem";

const TodoList: React.FC<{ currentUser: string }> = ({ currentUser }) => {
    const todos = useTodoStore((state) => state.filteredTodos);
    const loadTodos = useTodoStore((state) => state.loadTodos);

    useEffect(() => {
        loadTodos(currentUser); // Загружаем задачи конкретного пользователя
    }, [currentUser, loadTodos]);

    if (!todos.length) {
        return <p className="todo-list-empty">No tasks found</p>;
    }

    return (
        <div className="todo-list">
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} currentUser={currentUser} />
            ))}
        </div>
    );
};

export default TodoList;
