import { render } from "@testing-library/react";
import { AppStoreProvider } from "../providers/Store";
import { Layout } from "../components/Layout";

describe("children multiple components", () => {
  it("should render children", () => {
    const { container } = render(
      <AppStoreProvider>
        <Layout />
      </AppStoreProvider>
    );
    expect(container.children.length).toBeGreaterThan(0);
  });
});
