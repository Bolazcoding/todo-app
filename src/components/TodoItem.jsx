import cross_icon from "../assets/icon-cross.svg";

function TodoItem({ item, onDeleteItems, onToggleItems }) {
  return (
    <li className="bg-bg-card flex items-center justify-between px-4 py-2.5 rounded">
      <div className="flex items-center gap-3">
        <button
          className={`check-btn ${item.checked && "checked_btn"}`}
          onClick={() => onToggleItems(item.id)}
        ></button>

        <span
          className={`text-text-primary text-[0.8rem] ${
            item.checked ? "line-through" : ""
          }`}
        >
          Jog around the park 3x {item.description}
        </span>
      </div>
      <button onClick={() => onDeleteItems(item.id)}>
        <img src={cross_icon} alt="cross_icon" className="w-3.5" />
      </button>
    </li>
  );
}

export default TodoItem;
