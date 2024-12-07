import React, { useState } from "react";

function TaskList({ tasks, onToggleTaskCompletion, onDeleteTask }) {
  const [expandedTaskId, setExpandedTaskId] = useState(null);

  const toggleExpandTask = (taskId) => {
    setExpandedTaskId(expandedTaskId === taskId ? null : taskId);
  };

  return (
    <div>
      <h2>Tareas Pendientes</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {tasks.map((task) => (
          <div
            key={task.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "10px",
              backgroundColor: "#fff",
              cursor: "pointer",
            }}
            onClick={() => toggleExpandTask(task.id)}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h2>{task.title}</h2>
              <div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleTaskCompletion(task.id);
                  }}
                >
                  {task.completed ? "Desmarcar" : "Completar"}
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onDeleteTask(task.id);
                  }}
                >
                  Eliminar
                </button>
              </div>
            </div>
            {expandedTaskId === task.id && (
              <div style={{ marginTop: "10px", color: "#555" }}>
                <p>{task.description}</p>
                {task.completed && (
                  <p className="completed-status">Estado: Completado</p>

                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskList;
