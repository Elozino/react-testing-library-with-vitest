import AddInput from "../src/components/AddInput/AddInput";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vitest } from "vitest";

const mockSetTodo = vitest.fn()

describe("AddInput", () => {
  test("should render input element", () => {
    render(
      <AddInput setTodos={mockSetTodo} todos={[]} />
    )
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
    expect(inputElement).toBeInTheDocument()
  })

  test("should be able to type into input", () => {
    render(
      <AddInput setTodos={mockSetTodo} todos={[]} />
    )
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i) as HTMLInputElement
    fireEvent.change(inputElement, { target: { value: "Read novel" } });
    expect(inputElement.value).toBe("Read novel")
  })

  test("should clear input when add button is clicked", () => {
    render(
      <AddInput setTodos={mockSetTodo} todos={[]} />
    )
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i).querySelector('input') as HTMLInputElement;
    const addTodoBtnElement = screen.getByRole('button', { name: /Add/i })
    fireEvent.click(addTodoBtnElement);
    expect(inputElement).toBeNull()
  })
})