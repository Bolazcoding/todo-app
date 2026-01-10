import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import TodoForm from "./components/TodoForm";
import TodoLists from "./components/TodoLists";
import TodoSummary from "./components/TodoSummary";

function App() {
  const [todos, setTodo] = useState([]);
  const [filter, setFilter] = useState("all");

  function handleAddItems(todo) {
    setTodo((todos) => [...todos, todo]);
  }

  function handleDeleteItems(id) {
    setTodo((todos) => todos.filter((todo) => todo.id !== id));
  }

  function handleToggleItems(id) {
    setTodo((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  }

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") {
      return !todo.checked;
    }

    if (filter === "completed") {
      return todo.checked;
    }

    return true;
  });

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all the todo lists?"
    );

    if (confirmed) setTodo([]);
  }

  // console.log(todos);

  return (
    <>
      <div className="header-bg h-50">
        <Main>
          <Header />
          <TodoForm onAddItems={handleAddItems} />
          <TodoLists
            todos={todos}
            onDeleteItems={handleDeleteItems}
            onToggleItems={handleToggleItems}
            filter={filter}
            setFilter={setFilter}
            filteredTodos={filteredTodos}
            handleClearList={handleClearList}
          />
        </Main>
      </div>
    </>
  );
}

export default App;
