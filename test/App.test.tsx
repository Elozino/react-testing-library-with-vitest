import Header from '../src/components/Header/Header';
import App from '../src/App';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest'

/**
 * Four pillars
 * 1. Render the component you want to test
 * 2. Find the elements in the component you want to interact with
 * 3. Interact with these elements
 * 4. Assert that the results are as expected
 */


describe("render page", () => {
  test('render app', () => {
    const app = render(<App />);
    expect(app).toBeTruthy();
  });

  test('check if the title of the app displays', () => {
    render(<Header title="TODO" />);
    const title = screen.getByText(/TODO/i);
    const heading = screen.getByRole('heading', { name: "TODO" }) // better approach over the title approach
    expect(title).toBeInTheDocument();
    expect(heading).toBeTruthy()
  });
})


test("dogs should not be in render", () => {
  render(<Header title="My Header" />);
  const text = screen.queryByText(/dogs/i);
  expect(text).toBeNull(); // OR
  expect(text).not.toBeInTheDocument();
})

test("make sure there is only one heading", () => {
  render(<Header title="My Header" />);
  const headingElements = screen.getAllByRole('heading');
  expect(headingElements.length).toBe(1)
})