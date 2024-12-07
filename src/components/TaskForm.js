import React, { useState } from "react";

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description && type) {
      onAddTask({ title, description, type });
      setTitle("");
      setDescription("");
      setType("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="">Seleccionar tipo</option>
        <option value="trabajo">Trabajo</option>
        <option value="casa">Casa</option>
        <option value="negocios">Negocios</option>
      </select>
      <button type="submit">Agregar Tarea</button>
    </form>
  );
}

export default TaskForm;
