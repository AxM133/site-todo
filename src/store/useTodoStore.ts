import { create } from "zustand";

export type Todo = {
    user: string; // Связь с пользователем
    id: number;
    text: string;
    completed: boolean;
};

export type Filter = "all" | "active" | "completed";

type TodoState = {
    todos: Todo[];
    filter: Filter;
    setFilter: (user: string, filter: Filter) => void;
    loadTodos: (user: string) => void;
    addTodo: (user: string, text: string) => void;
    toggleTodo: (user: string, id: number) => void;
    deleteTodo: (user: string, id: number) => void;
    clearCompleted: (user: string) => void;
    filteredTodos: Todo[];
};

export const useTodoStore = create<TodoState>((set, get) => ({
    todos: [],
    filter: "all",
    setFilter: (user, filter) => {
        const todos = get().todos.filter((todo) => todo.user === user); // Только задачи текущего пользователя
        const filteredTodos =
            filter === "active"
                ? todos.filter((todo) => !todo.completed)
                : filter === "completed"
                ? todos.filter((todo) => todo.completed)
                : todos;

        set({ filter, filteredTodos });
    },
    loadTodos: (user) => {
        const savedTodos = localStorage.getItem(`todos_${user}`);
        const todos = savedTodos ? JSON.parse(savedTodos) : [];
        set({ todos, filteredTodos: todos });
    },
    addTodo: (user, text) => {
        const newTodo: Todo = {
            id: Date.now(),
            text,
            completed: false,
            user, // Устанавливаем связь с пользователем
        };
        set((state) => {
            const updatedTodos = [...state.todos, newTodo];
            localStorage.setItem(`todos_${user}`, JSON.stringify(updatedTodos));
            return { todos: updatedTodos, filteredTodos: updatedTodos };
        });
    },
    toggleTodo: (user, id) => {
        set((state) => {
            const updatedTodos = state.todos.map((todo) =>
                todo.user === user && todo.id === id
                    ? { ...todo, completed: !todo.completed }
                    : todo
            );
            const filteredTodos = updatedTodos.filter((todo) => todo.user === user);

            localStorage.setItem(`todos_${user}`, JSON.stringify(filteredTodos));
            return { todos: updatedTodos, filteredTodos };
        });
    },
    deleteTodo: (user, id) => {
        set((state) => {
            const updatedTodos = state.todos.filter(
                (todo) => todo.user === user && todo.id !== id
            );
            localStorage.setItem(`todos_${user}`, JSON.stringify(updatedTodos));
            return { todos: updatedTodos, filteredTodos: updatedTodos };
        });
    },
    clearCompleted: (user) => {
        set((state) => {
            const updatedTodos = state.todos.filter(
                (todo) => todo.user === user && !todo.completed
            );
            localStorage.setItem(`todos_${user}`, JSON.stringify(updatedTodos));
            return { todos: updatedTodos, filteredTodos: updatedTodos };
        });
    },
    filteredTodos: [],
}));
