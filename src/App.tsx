import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";
import FilterBar from "./components/FilterBar";
import { useState, useEffect } from "react";
import LoginForm from "./components/LoginForm";
import "./App.css"
import ThemeSwitcher from "./components/ThemeSwitcher";

export default function App() {
    const [currentUser, setCurrentUser] = useState<string | null>(null);

    useEffect(() => {
        const savedUser = localStorage.getItem("currentUser");
        if (savedUser) {
            setCurrentUser(savedUser);
        }
    }, []);

    const handleLogin = (username: string) => {
        setCurrentUser(username);
        localStorage.setItem("currentUser", username);
    };

    const handleLogout = () => {
        setCurrentUser(null);
        localStorage.removeItem("currentUser");
    };

    return (
        <div className="app-container">
            <div className="container">
                {currentUser ? (
                    <>
                        <ThemeSwitcher />
                        <Header />
                        <button
                            className="logout-button absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-600 transition duration-300"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                        <TodoInput currentUser={currentUser} />
                        <FilterBar currentUser={currentUser} />
                        <TodoList currentUser={currentUser} />
                        <TodoFooter />
                    </>
                ) : (
                    <LoginForm onLogin={handleLogin} />
                )}
            </div>
        </div>
    );
}
