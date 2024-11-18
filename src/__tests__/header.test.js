import { render } from "@testing-library/react";
import { Header } from "../components/Header";
import { AppStoreProvider } from "../providers/Store";

describe("componente banner", () => {
  it("should render text", () => {
    const { getByText } = render(
      <AppStoreProvider>
        <Header />
      </AppStoreProvider>
    );
    expect(getByText(/Simple Todo App/i)).toBeInTheDocument();
  });

  it("should render a button", () => {
    const { getByRole } = render(
      <AppStoreProvider>
        <Header />
      </AppStoreProvider>
    );

    const button = getByRole("button", { name: "+ Add a new Todo" });
    expect(button).toBeTruthy();
  });
});

// it("should be able to render modal onclick", () => {
//   const modal = jest.fn();
//   const { getByRole } = render(
//     <AppStoreProvider>
//       <Header />
//     </AppStoreProvider>
//   );
//   expect(getByRole("heading")).toBeTruthy();
//   fireEvent.click(screen.getByText(/ + add new todo/i));
//   expect(modal).toHaveBeenCalledTimes(1);

// it("should render text", () => {
//   render(<Header />);
//   const headText = screen.getByText(getByText(/simple todo app/i));
//   expect(headText).toBeInTheDocument();
// });
