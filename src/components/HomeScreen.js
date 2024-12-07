import React from "react";

function HomeScreen({ tasks, onNavigate }) {
  const completedTasks = tasks.filter((task) => task.completed);
  const pendingTasks = tasks.filter((task) => !task.completed);

  return (
    <div>
      <h1>Inicio - Resumen de Tareas</h1>
      <button onClick={onNavigate}>Ir a Lista de Tareas</button>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      >
        <div style={{ flex: 1, marginRight: "10px" }}>
          <h2>Tareas Pendientes</h2>
          {pendingTasks.length === 0 ? (
            <p>No hay tareas pendientes</p>
          ) : (
            <ul>
              {pendingTasks.map((task) => (
                <li key={task.id}>
                  <strong>{task.title}</strong>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div style={{ flex: 1, marginLeft: "10px" }}>
          <h2>Tareas Completadas</h2>
          {completedTasks.length === 0 ? (
            <p>No hay tareas completadas</p>
          ) : (
            <ul>
              {completedTasks.map((task) => (
                <li key={task.id}>
                  <strong>{task.title}</strong>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
