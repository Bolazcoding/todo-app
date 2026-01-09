import TodoTextBox from "./TodoTextBox";
import TodoSummary from "./TodoSummary";

function TodoLists({
  onDeleteItems,
  onToggleItems,
  filteredTodos,
  todos,
  filter,
  setFilter,
  handleClearList,
}) {
  return (
    <div className="mt-4">
      <TodoTextBox
        onDeleteItems={onDeleteItems}
        onToggleItems={onToggleItems}
        filteredTodos={filteredTodos}
      />
      <TodoSummary
        todos={todos}
        filter={filter}
        setFilter={setFilter}
        handleClearList={handleClearList}
      />
    </div>
  );
}

export default TodoLists;
