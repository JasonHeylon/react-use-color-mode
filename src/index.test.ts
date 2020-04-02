import { useColorMode } from "./";
import { renderHook, act } from "@testing-library/react-hooks";

describe("useMyHook", () => {
  let event: null | Function = null;
  beforeAll(() => {
    let isDarkMode = true;

    Object.defineProperty(window, "matchMedia", {
      value: jest.fn(() => {
        return {
          matches: isDarkMode,
          addEventListener(_: string, handler: () => void) {
            isDarkMode = !isDarkMode;
            event = handler;
          },
          removeEventListener(_: string) {
            event = null;
          }
        };
      })
    });
  });

  it("should get correct colorMode when fire change event", () => {
    const { result } = renderHook(() => useColorMode());

    expect(result.current[0]).toEqual("dark");

    act(() => {
      event && event();
    });

    expect(result.current[0]).toEqual("light");
  });
});
