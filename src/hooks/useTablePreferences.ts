import { useState } from "react";

export const useTablePreferences = (tableId: string) => {
  const [preferences, setPreferences] = useState(() => {
    try {
      const saved = localStorage.getItem(`table-preferences-${tableId}`);
      return saved ? JSON.parse(saved) : null;
    } catch (error) {
      console.warn(`Failed to parse preferences for table ${tableId}:`, error);
      return null;
    }
  });

  const savePreferences = (newPreferences: Record<string, unknown>) => {
    setPreferences(newPreferences);
    localStorage.setItem(
      `table-preferences-${tableId}`,
      JSON.stringify(newPreferences)
    );
  };

  return { preferences, savePreferences };
};
