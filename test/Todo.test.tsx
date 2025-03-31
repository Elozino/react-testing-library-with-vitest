import Todo from "../src/components/Todo/Todo";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, test } from "vitest";

const MockTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  )
}

const addTask = (tasks: string[]) => {
  const inputElement = screen.getByPlaceholderText(/Add a new task here/i)
  const buttonElement = screen.getByRole("button", { name: /Add/i })
  tasks.forEach(task => {
    fireEvent.change(inputElement, { target: { value: task } })
    fireEvent.click(buttonElement)
  })
}

describe("Todo", () => {
  test("should render same text passed into title props", () => {
    render(<MockTodo />)
    const inputElement = screen.getByPlaceholderText(/Add a new task here/i)
    const buttonElement = screen.getByRole("button", { name: /Add/i })
    fireEvent.change(inputElement, { target: { value: "Read novel" } })
    fireEvent.click(buttonElement)

    const titleContent = screen.getByText(/Read novel/i)
    expect(titleContent).toBeInTheDocument()
  })


  test("should render multiple text passed into title props for inputs", () => {
    render(<MockTodo />)
    addTask(['Read novel', 'Wash clothes'])
    const titleContents = screen.getAllByTestId('task-container')
    expect(titleContents.length).toBe(2)
  })

  test("task should not have the completed className on initial render", () => {
    render(<MockTodo />)
    addTask(['Read novel'])
    const titleContent = screen.getByTestId('task-container')
    expect(titleContent).not.toHaveClass('todo-item-active')
  })

  test("task should not have the completed className when completed/clicked", () => {
    render(<MockTodo />)
    addTask(['Read novel'])
    const titleContent = screen.getByTestId('task-container')
    fireEvent.click(titleContent)
    expect(titleContent).toHaveClass('todo-item-active')
  })
})