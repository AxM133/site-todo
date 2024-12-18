import { useTodoStore, Filter } from "../store/useTodoStore";
import "./../styles/FilterBar.css";

interface FilterBarProps {
    currentUser: string;
}

const FilterBar: React.FC<FilterBarProps> = ({ currentUser }) => {
    const filter = useTodoStore((state) => state.filter); // Текущий фильтр
    const setFilter = useTodoStore((state) => state.setFilter); // Установка фильтра

    const filters: { label: string; value: Filter }[] = [
        { label: "All", value: "all" },
        { label: "Active", value: "active" },
        { label: "Completed", value: "completed" },
    ];

    return (
        <div className="filter-bar">
            {filters.map((f) => (
                <button
                    key={f.value}
                    className={`filter-button ${filter === f.value ? "active" : ""}`}
                    onClick={() => setFilter(currentUser, f.value)} // Передаем currentUser и фильтр
                >
                    {f.label}
                </button>
            ))}
        </div>
    );
};

export default FilterBar;
