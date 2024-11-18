import { getByText, render } from "@testing-library/react";
import { Modal } from "../components/Modal";

describe("abre o cierra modal", () => {
  it("should be closed", () => {
    const closedModal = render(<Modal isOpen={false}></Modal>);
    expect(closedModal).toBeDefined();
  });
  it("should be open", () => {
    const openModal = render(<Modal isOpen={true}></Modal>);
    expect(openModal).toBeDefined();
  });

  it("should show x label", () => {
    const { container } = render(
      <Modal isOpen={true}>
        <label>meow</label>
      </Modal>
    );
    const formLabel = getByText("meow");
    expect(formLabel).toBeInTheDocument();
    expect(container.querySelector("label")).toBeInTheDocument();
  });
});
