import FollowersList from "@/components/FollowersList/FollowersList";
import Header from "@/components/Header/Header";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, test } from "vitest";

const MockFollowersList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  )
}

describe("FollowersList", () => {
  test("should render followers list title", () => {
    render(<Header title="Followers" />);
    const headingElement = screen.getByText(/Followers/i)
    expect(headingElement).toBeInTheDocument()
  })

  // test("should render followers list page", async () => {
  //   render(<MockFollowersList />);
  //   const followerDivElement = await screen.findByTestId('follower-item-0')
  //   expect(followerDivElement).toBeInTheDocument()
  // }) // Failing because the API call was null when the test ran

  test("should render followers list page", async () => {
    render(<MockFollowersList />);
    const followerDivElement = await screen.findByTestId('follower-item-0', {}, { timeout: 2000 });
    expect(followerDivElement).toBeInTheDocument();
  });
})