// import { NotFound } from "../components/NotFound";
// import { render } from "@testing-library/react";

// describe("notfound comp", () => {
//   it("should find/be able to click", () => {
//     const { Container } = render(<NotFound />);
//     const p = Container.querySelector("p");
//     expect(p).toHaveTextContent(
//       "But dont worry, you can find plenty of other things on our homepage."
//     );
//   });
// });

// import { useNavigate } from "react-router-dom";
// import { render } from "@testing-library/react";
// import { NotFound } from "../components/NotFound";
// import userEvent from "@testing-library/user-event";
// import { useNavigate } from "react-router-dom";

// jest.mock("react-router-dom", () => ({
//   useNavigate: jest.fn(),
// }));

// const useNavigateMock = jest.mocked(useNavigate);

// describe('',()=>)

import { useNavigate } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { NotFound } from "../components/NotFound";

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

const useNavigateMock = jest.mocked(useNavigate);

it("navigates back to the previous page if `to` prop is not passed", async () => {
  const navigateMock = jest.fn();

  useNavigateMock.mockReturnValue(navigateMock);

  render(<BackButton />);

  await userEvent.click(screen.getByRole("button", { text: /go back/i }));

  expect(navigateMock).toHaveBeenCalledTimes(1);
  expect(navigateMock).toHaveBeenCalledWith(-1);
});

it("navigates to the path provided as a prop", async () => {
  const navigateMock = jest.fn();

  useNavigateMock.mockReturnValue(navigateMock);

  render(<BackButton to="/about" />);

  await userEvent.click(screen.getByRole("button", { text: /go back/i }));

  expect(navigateMock).toHaveBeenCalledTimes(1);
  expect(navigateMock).toHaveBeenCalledWith("/about");
});
