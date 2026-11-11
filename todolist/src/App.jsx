import { useState, useEffect } from "react";
import { v4 } from "uuid";
import Todoitem from "./components/todoitem/todo";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  // Load saved tasks when the app starts
  const [todolist, setTodolist] = useState(() => {
    const savedTasks = localStorage.getItem("todolist");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Save tasks whenever the list changes
  useEffect(() => {
    localStorage.setItem("todolist", JSON.stringify(todolist));
  }, [todolist]);

  const inputText = (event) => {
    setInput(event.target.value);
  };

  const deleteItem = (key) => {
    const updatedItems = todolist.filter((each) => each.id !== key);
    setTodolist(updatedItems);
  };

  const onAddtodo = () => {
    if (input.trim() === "") {
      alert("Enter task");
      return;
    }

    const data = {
      id: v4(),
      text: input.trim(),
    };

    setTodolist([...todolist, data]);
    setInput("");
  };

  return (
    <div className="main-body">
      <div className="todo-bg">
        <h1>To Do List</h1>

        <div className="input-con">
          <input
            type="text"
            onChange={inputText}
            value={input}
            className="input"
            placeholder="Enter task"
          />

          <button className="btn btn-primary" onClick={onAddtodo}>
            Add
          </button>
        </div>

        <ol className="todoitem-con mt-1">
          {todolist.map((each) => (
            <li key={each.id}>
              <Todoitem details={each} deleteItem={deleteItem} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default App;
