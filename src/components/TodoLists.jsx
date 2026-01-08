import Item from "./TodoItem";

function TodoLists({ todos, onDeleteItems, onToggleItems }) {
  return (
    <div className="mt-4">
      <ul>
        {todos.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItems={onDeleteItems}
            onToggleItems={onToggleItems}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoLists;
