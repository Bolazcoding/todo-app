function TodoItem({ todo, onDeleteItems, onToggleItems }) {
  return (
    <li className="bg-bg-card flex items-center justify-between px-4 py-2.5 rounded">
      <div className="flex items-center gap-3">
        <button
          className={`check-btn ${todo.checked && "checked_btn"}`}
          onClick={() => onToggleItems(todo.id)}
        ></button>

        <span
          className={`text-text-primary text-[0.8rem] ${
            todo.checked ? "line-through" : ""
          }`}
        >
          Jog around the park 3x {todo.description}
        </span>
      </div>
      <button onClick={() => onDeleteItems(todo.id)}>
        <svg
          className="w-3.5 h-3.5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18 18"
        >
          <path
            fill="#494C6B"
            fill-rule="evenodd"
            d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
          />
        </svg>
      </button>
    </li>
  );
}

export default TodoItem;
