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
    <div className="mt-4 shadow-[0_0px_50px_-15px_rgba(0,0,0,0.3)] rounded-3xl">
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
