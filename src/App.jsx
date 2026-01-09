import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import TodoForm from "./components/TodoForm";
import TodoLists from "./components/TodoLists";

function App() {
  const [todos, setTodo] = useState([]);

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

  // console.log(todos);

  return (
    <>
      <div className="header-bg min-h-45">
        <Main>
          <Header />
          <TodoForm onAddItems={handleAddItems} />
          <TodoLists
            todos={todos}
            onDeleteItems={handleDeleteItems}
            onToggleItems={handleToggleItems}
          />
        </Main>
      </div>
    </>
  );
}

export default App;
