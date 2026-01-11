function FilterButtons({ filter, setFilter }) {
  return (
    <div className="flex gap-3 min-[500px]:hidden max-[500px]:bg-bg-card max-[500px]:rounded max-[500px]:py-4 max-[500px]:mt-8 max-[500px]:justify-center shadow-[0_0px_50px_-15px_rgba(0,0,0,0.3)] overflow-visible">
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
  );
}

export default FilterButtons;
