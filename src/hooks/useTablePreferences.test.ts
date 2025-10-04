import { renderHook, act } from "@testing-library/react";
import { useTablePreferences } from "./useTablePreferences";

describe("useTablePreferences", () => {
  const tableId = "test-table";

  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
    // Also reset the mock implementations to ensure clean state
    (localStorage.getItem as jest.Mock).mockClear();
    (localStorage.setItem as jest.Mock).mockClear();
  });

  it("should return null preferences when localStorage is empty", () => {
    const { result } = renderHook(() => useTablePreferences(tableId));

    expect(result.current.preferences).toBeNull();
  });

  it("should load preferences from localStorage", () => {
    const mockPreferences = {
      pageSize: 25,
      visibleColumns: { airline: false },
    };
    localStorage.setItem(
      `table-preferences-${tableId}`,
      JSON.stringify(mockPreferences)
    );

    const { result } = renderHook(() => useTablePreferences(tableId));

    expect(result.current.preferences).toEqual(mockPreferences);
  });

  it("should save preferences to localStorage", () => {
    const { result } = renderHook(() => useTablePreferences(tableId));
    const newPreferences = { pageSize: 50, visibleColumns: { price: false } };

    act(() => {
      result.current.savePreferences(newPreferences);
    });

    expect(result.current.preferences).toEqual(newPreferences);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      `table-preferences-${tableId}`,
      JSON.stringify(newPreferences)
    );
  });

  it("should update preferences when saved multiple times", () => {
    const { result } = renderHook(() => useTablePreferences(tableId));

    const firstPreferences = { pageSize: 25 };
    act(() => {
      result.current.savePreferences(firstPreferences);
    });

    expect(result.current.preferences).toEqual(firstPreferences);

    const secondPreferences = {
      pageSize: 50,
      visibleColumns: { airline: false },
    };
    act(() => {
      result.current.savePreferences(secondPreferences);
    });

    expect(result.current.preferences).toEqual(secondPreferences);
    expect(localStorage.setItem).toHaveBeenCalledTimes(2);
  });

  it("should handle localStorage with invalid JSON gracefully", () => {
    localStorage.setItem(`table-preferences-${tableId}`, "invalid-json");

    const { result } = renderHook(() => useTablePreferences(tableId));

    // Should return null instead of throwing when JSON is invalid
    expect(result.current.preferences).toBeNull();
  });
});
