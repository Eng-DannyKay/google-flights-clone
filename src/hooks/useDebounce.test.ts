import { renderHook, act } from "@testing-library/react";
import { useDebounce } from "./useDebounce";

describe("useDebounce", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it("should return initial value immediately", () => {
    const { result } = renderHook(() => useDebounce("initial", 500));

    expect(result.current).toBe("initial");
  });

  it("should debounce value changes", () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      {
        initialProps: { value: "initial", delay: 500 },
      }
    );

    expect(result.current).toBe("initial");

    // Update the value
    rerender({ value: "updated", delay: 500 });

    // Value should not change immediately
    expect(result.current).toBe("initial");

    // Fast-forward time by 250ms (less than delay)
    act(() => {
      jest.advanceTimersByTime(250);
    });

    // Value should still be the initial value
    expect(result.current).toBe("initial");

    // Fast-forward time by another 250ms (total 500ms)
    act(() => {
      jest.advanceTimersByTime(250);
    });

    // Now the value should be updated
    expect(result.current).toBe("updated");
  });

  it("should reset debounce timer on rapid changes", () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      {
        initialProps: { value: "initial", delay: 500 },
      }
    );

    // First update
    rerender({ value: "first", delay: 500 });

    // Wait 300ms
    act(() => {
      jest.advanceTimersByTime(300);
    });

    // Second update before first debounce completes
    rerender({ value: "second", delay: 500 });

    // Wait another 300ms (total 600ms, but second timer only 300ms)
    act(() => {
      jest.advanceTimersByTime(300);
    });

    // Should still be initial value
    expect(result.current).toBe("initial");

    // Wait another 200ms to complete the second debounce
    act(() => {
      jest.advanceTimersByTime(200);
    });

    // Now should be the second value
    expect(result.current).toBe("second");
  });

  it("should handle different delay values", () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      {
        initialProps: { value: "initial", delay: 1000 },
      }
    );

    rerender({ value: "updated", delay: 1000 });

    // Wait 500ms
    act(() => {
      jest.advanceTimersByTime(500);
    });

    expect(result.current).toBe("initial");

    // Wait full 1000ms
    act(() => {
      jest.advanceTimersByTime(500);
    });

    expect(result.current).toBe("updated");
  });
});
