import TodoItem from "./TodoItem";

function TodoTextBox({ onDeleteItems, onToggleItems, filteredTodos }) {
  return (
    <ul>
      {filteredTodos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          onDeleteItems={onDeleteItems}
          onToggleItems={onToggleItems}
        />
      ))}
    </ul>
  );
}

export default TodoTextBox;
