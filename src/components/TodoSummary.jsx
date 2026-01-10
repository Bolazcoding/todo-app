function TodoSummary({ todos, filter, setFilter, handleClearList }) {
  const numItems = todos.length;
  const numChecked = todos.filter((todo) => todo.checked).length;
  console.log(numItems);

  return (
    <div className="flex items-center justify-between bg-bg-card px-4 py-2 rounded">
      <p className="text-text-secondary text-[0.75rem]">
        {numItems - numChecked} items left
      </p>
      <div className="text-text-secondary text-[0.75rem] font-bold flex gap-3">
        <button className="cursor-pointer" onClick={() => setFilter("all")}>
          All
        </button>
        <button className="cursor-pointer" onClick={() => setFilter("active")}>
          Active
        </button>
        <button
          className="cursor-pointer"
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
      </div>
      <button
        className="text-text-secondary text-[0.75rem] cursor-pointer"
        onClick={handleClearList}
      >
        Clear Completed
      </button>
    </div>
  );
}

export default TodoSummary;
