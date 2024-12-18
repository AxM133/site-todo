import React, { useState } from "react";
import { useTodoStore } from "../store/useTodoStore";
import "../styles/TodoItem.css";

interface TodoItemProps {
    todo: {
        id: number;
        text: string;
        completed: boolean;
    };
    currentUser: string; // Добавляем пользователя
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, currentUser }) => {
    const toggleTodo = useTodoStore((state) => state.toggleTodo);
    const deleteTodo = useTodoStore((state) => state.deleteTodo);
    const [isAnimated, setIsAnimated] = useState(false);

    const handleCheckboxChange = () => {
        if (!todo.completed) {
            setIsAnimated(true);
            setTimeout(() => setIsAnimated(false), 1000); // Сбрасываем анимацию после её завершения
        }
        toggleTodo(currentUser, todo.id); // Передаем currentUser
    };

    return (
        <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
            <div
                className={`checkbox-container ${isAnimated ? "animated" : ""} ${
                    todo.completed ? "checked" : ""
                }`}
                onClick={handleCheckboxChange}
            >
                {todo.completed && (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="checkbox-icon"
                    >
                        <path
                            d="M5 12l5 5L20 6"
                            stroke="white"
                            strokeWidth="3"
                            fill="none"
                            className="animated-check"
                        />
                    </svg>
                )}
            </div>
            <span className="flex-1">{todo.text}</span>
            <button
                className="text-red-500 hover:text-red-700"
                onClick={() => deleteTodo(currentUser, todo.id)} // Указываем currentUser
            >
                ✕
            </button>
        </div>
    );
};

export default TodoItem;
