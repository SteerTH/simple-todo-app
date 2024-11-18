import { ImageWithPlaceholder } from "../components/ImageWithPlaceholder";
import { render } from "@testing-library/react";

describe("placeholder componetnes", () => {
  it("should have a class", () => {
    const { container } = render(<ImageWithPlaceholder />);
    const img = container.querySelector("img");
    expect(img).toHaveClass(`transition-opacity duration-500 ease-in-out`);
  });

  it("should have an img", () => {
    const { container } = render(<ImageWithPlaceholder />);
    const img = container.querySelector("img");
    expect(img).toBeTruthy();
  });
});

// return (
//     <div className="relative w-full">
//       <div className="relative w-full">
//         {!isLoaded && placeholder}
//         <img
//           src={src}
//           alt={alt}
//           onLoad={() => setIsLoaded(true)}
//           className={`${className} transition-opacity duration-500 ease-in-out ${isLoaded ? "opacity-100" : "opacity-0"}`}
//           {...props}
//         />
//       </div>
//     </div>
//   );
// };
