import { render } from "@testing-library/react";
import { AvatarPlaceholder } from "../components/AvatarPlaceholder";

describe("avatar components", () => {
  it("gets a div with a name", () => {
    const { container } = render(<AvatarPlaceholder />);
    const div = container.querySelector("div");
    expect(div).toHaveClass("animate-pulse z-10");
  });

  it("gets the second animated gif", () => {
    const { container } = render(<AvatarPlaceholder />);
    const div = container.querySelectorAll("div");
    const divdos = div[1];
    expect(divdos).toHaveClass(
      "bg-slate-200 absolute inline-block h-9 w-9 rounded-full border-2 border-white object-cover object-center"
    );
  });
});
