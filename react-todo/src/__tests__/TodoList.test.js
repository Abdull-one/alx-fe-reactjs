import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

test("renders initial todos", () => {
  render(<TodoList />);
  expect(screen.getByText("Learn React")).toBeInTheDocument();
  expect(screen.getByText("Build Todo App")).toBeInTheDocument();
});

test("adds a new todo", () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText("Add a new todo");
  const button = screen.getByText("Add");

  fireEvent.change(input, { target: { value: "New Todo" } });
  fireEvent.click(button);

  expect(screen.getByText("New Todo")).toBeInTheDocument();
});

test("toggles todo completion", () => {
  render(<TodoList />);
  const todo = screen.getByText("Learn React");

  fireEvent.click(todo);
  expect(todo).toHaveStyle("text-decoration: line-through");

  fireEvent.click(todo);
  expect(todo).toHaveStyle("text-decoration: none");
});

test("deletes a todo", () => {
  render(<TodoList />);
  const todo = screen.getByText("Build Todo App");
  const deleteBtn = todo.nextSibling;

  fireEvent.click(deleteBtn);
  expect(todo).not.toBeInTheDocument();
});

