import { render } from "@testing-library/react";
import { Banner } from "../components/Banner";

describe("componente banner", () => {
  it("renders a message", () => {
    const { getByText } = render(<Banner />);
    expect(getByText(/create your own todos/i)).toBeInTheDocument();
  });
  it("renders another msg", () => {
    const { getByText } = render(<Banner />);
    expect(
      getByText(/This is just an example of a Todo App/i)
    ).toBeInTheDocument();
  });

  it("SHOULDNT render another msg", () => {
    const { queryByText } = render(<Banner />);
    expect(queryByText(/some paragraph/i)).not.toBeInTheDocument();
  });

  it("should render a p with design", () => {
    const { container } = render(<Banner />);
    const paragraph = container.querySelector("p");
    expect(paragraph).toHaveClass("text-lg inline-block sm:block");
  });
});
