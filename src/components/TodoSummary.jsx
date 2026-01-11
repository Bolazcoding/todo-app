import FilterButtons from "./FilterButtons";

function TodoSummary({ todos, filter, setFilter, handleClearList }) {
  const numItems = todos.length;
  const numChecked = todos.filter((todo) => todo.checked).length;
  // console.log(numItems);

  return (
    <>
      <div className="flex items-center justify-between bg-bg-card px-4 py-2.5 rounded max-[500px]:py-4">
        <p className="text-text-secondary text-[0.75rem]">
          {numItems - numChecked} items left
        </p>
        <div className="flex gap-3 max-[500px]:hidden">
          <button
            className={`summarybtn ${
              filter === "all" ? "text-primary-blue-500" : ""
            }`}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className={`summarybtn ${
              filter === "active" ? "text-primary-blue-500" : ""
            }`}
            onClick={() => setFilter("active")}
          >
            Active
          </button>
          <button
            className={`summarybtn ${
              filter === "completed" ? "text-primary-blue-500" : ""
            }`}
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
      <FilterButtons filter={filter} setFilter={setFilter} />
    </>
  );
}

export default TodoSummary;
