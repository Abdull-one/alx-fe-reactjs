import { useState } from "react";

export default function AddTodoForm({ onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = text.trim();
    if (!value) return; // basic validation: ignore empty input
    if (typeof onAdd === "function") onAdd(value); // parent handles id/completed
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} aria-label="add-todo-form" style={{ display: "flex", gap: 8 }}>
      <label htmlFor="todo-input" style={{ position: "absolute", left: "-9999px" }}>
        Todo
      </label>
      <input
        id="todo-input"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo"
      />
      <button type="submit">Add</button>
    </form>
  );
}
