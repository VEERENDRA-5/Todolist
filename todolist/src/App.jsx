import { useState } from "react";
import { v4 } from "uuid";
import Todoitem from "./components/todoitem/todo";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [todolist, setTodolist] = useState([]);

  const inputText = (event) => {
    setInput(event.target.value);
  };

  const deleteItem = (key) => {
    let updatedItems = todolist.filter((each) => each.id != key);
    setTodolist(updatedItems);
  };

  const onAddtodo = () => {
    if (input == "") {
      alert("enter task");
    } else {
      const data = { id: v4(), text: input };
      setTodolist([...todolist, data]);
      setInput("");
    }
  };

  return (
    <div className="main-body">
      <div className="todo-bg">
        <h1>To Do List</h1>
        <div>
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
    </div>
  );
}

export default App;
