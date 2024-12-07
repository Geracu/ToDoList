import React from "react";

function TaskDetails({ task }) {
  if (!task) return <p>Selecciona una tarea para ver los detalles</p>;

  return (
    <div>
      <h2>Detalles de la Tarea</h2>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Tipo: {task.type}</p>
      <p>Estado: {task.completed ? "Completada" : "Pendiente"}</p>
    </div>
  );
}

export default TaskDetails;
