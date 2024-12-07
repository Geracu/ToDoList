import React, { useState } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import HomeScreen from "./components/HomeScreen";

function App() {
  const [tasks, setTasks] = useState([]);
  const [currentView, setCurrentView] = useState("home");

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now(), completed: false }]);
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="App">
      {currentView === "home" ? (
        <HomeScreen
          tasks={tasks}
          onNavigate={() => setCurrentView("taskList")}
        />
      ) : (
        <div>
          <button onClick={() => setCurrentView("home")}>Volver a Inicio</button>
          <TaskForm onAddTask={addTask} />
          <TaskList
            tasks={tasks}
            onToggleTaskCompletion={toggleTaskCompletion}
            onDeleteTask={deleteTask}
          />
        </div>
      )}
    </div>
  );
}

export default App;
