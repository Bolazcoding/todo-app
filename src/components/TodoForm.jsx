import { useState } from "react";

function TodoForm({ onAddItems }) {
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, checked: false, id: Date.now() };
    // console.log(newItem);

    onAddItems(newItem);
    // console.log(newItem);

    setDescription("");
  }

  return (
    <form
      className=" bg-bg-card px-4 py-3.5 mt-4 flex items-center gap-3 rounded max-[500px]:py-4"
      onSubmit={handleSubmit}
    >
      <button className="check-btn"></button>
      <input
        className="  text-[1rem] text-text-primary font-bold placeholder:font-normal border-0 focus:outline-none w-full"
        type="text"
        placeholder="Create a new todo..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
    </form>
  );
}

export default TodoForm;
