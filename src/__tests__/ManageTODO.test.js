import { getByRole, render } from "@testing-library/react";
import { ManageTodoModal } from "../components/ManageTodoModal";
import { AppStoreProvider } from "../providers/Store";
import { Modal } from "../components/Modal";

describe("todo modal components", () => {
  //   const mockModal = jest.fn();
  //   jest.mock("../components/Modal", () => (props) => {
  //     mockModal(props);
  //   });
  it("parent should render child", () => {
    render(
      <AppStoreProvider>
        <ManageTodoModal></ManageTodoModal>
      </AppStoreProvider>
    );
  });

  it("should be closed", () => {
    const { container } = render(
      <AppStoreProvider>
        <ManageTodoModal></ManageTodoModal>
      </AppStoreProvider>
    );
    const div = container.querySelector("div");
    expect(div).toHaveClass("m-8 my-20 max-w-[400px]");
  });
});
