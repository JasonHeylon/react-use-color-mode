import { useColorMode } from './';
import { renderHook, act } from '@testing-library/react-hooks';

describe('useMyHook', () => {
  let event: null | Function = null;
  beforeAll(() => {
    let isDarkMode = true;

    Object.defineProperty(window, 'matchMedia', {
      value: jest.fn(() => {
        return {
          matches: isDarkMode,
          addEventListener(_: string, handler: () => void): void {
            isDarkMode = !isDarkMode;
            event = handler;
          },
          removeEventListener(): void {
            event = null;
          },
        };
      }),
    });
  });

  it('should get correct colorMode when fire change event', () => {
    const { result } = renderHook(() => useColorMode());

    expect(result.current).toEqual('dark');

    act(() => {
      event && event();
    });

    expect(result.current).toEqual('light');
  });
});
