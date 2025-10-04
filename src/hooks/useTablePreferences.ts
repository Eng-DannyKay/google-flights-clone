import { useState } from 'react';

export const useTablePreferences = (tableId: string) => {
  const [preferences, setPreferences] = useState(() => {
    const saved = localStorage.getItem(`table-preferences-${tableId}`);
    return saved ? JSON.parse(saved) : null;
  });

  const savePreferences = (newPreferences: Record<string, unknown>) => {
    setPreferences(newPreferences);
    localStorage.setItem(`table-preferences-${tableId}`, JSON.stringify(newPreferences));
  };

  return { preferences, savePreferences };
};


