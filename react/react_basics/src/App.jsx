import { useState, useEffect } from 'react'
import Cards from "./components/Cards"
import Tasks from "./components/Tasks"

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("todo-tasks-react");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    localStorage.setItem("todo-tasks-react", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (inputValue.trim() === "") {
      alert("You must write something!");
      return;
    }
    const newTask = {
      id: "task-" + Date.now(),
      text: inputValue.trim(),
      completed: false
    };
    setTasks([...tasks, newTask]);
    setInputValue("");
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const editTask = (id) => {
    const taskToEdit = tasks.find(task => task.id === id);
    const newText = prompt("Edit your task:", taskToEdit.text);
    if (newText !== null && newText.trim() !== "") {
      setTasks(tasks.map(task =>
        task.id === id ? { ...task, text: newText.trim() } : task
      ));
    }
  };

  const activeCount = tasks.filter(t => !t.completed).length;
  const completedCount = tasks.filter(t => t.completed).length;
  const totalCount = tasks.length;

  return (
    <div className="container">
      <div className="header">
        <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="m9 12 2 2 4-4"></path>
        </svg>
        <h1>To-Do List</h1>
      </div>
      <div className="description">
        <p>Stay organized and productive</p>
      </div>

      <div className="input-section">
        <input
          className="input1"
          type="text"
          placeholder="Add a new task..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTask()}
        />
        <button className="button1" onClick={addTask}>+ Add</button>
      </div>

      <Cards
        active={activeCount}
        completed={completedCount}
        total={totalCount}
      />

      <Tasks
        tasks={tasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    </div>
  )
}

export default App
