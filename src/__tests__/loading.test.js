import { render } from "@testing-library/react";
import { Loading } from "../components/Loading";

describe("componente banner", () => {
  it("renders a message", () => {
    const { getByText } = render(<Loading />);
    expect(getByText(/loading/i)).toBeInTheDocument();
  });
});
