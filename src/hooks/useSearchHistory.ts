import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'jm_search_history';
const MAX_ITEMS = 10;

export function useSearchHistory() {
  const [history, setHistory] = useState<string[]>([]);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      setHistory(saved);
    } catch { setHistory([]); }
  }, []);

  const addSearch = useCallback((term: string) => {
    const t = term.trim();
    if (!t || t.length < 2) return;
    setHistory(prev => {
      const filtered = prev.filter(s => s.toLowerCase() !== t.toLowerCase());
      const updated = [t, ...filtered].slice(0, MAX_ITEMS);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  }, []);

  const clearHistory = useCallback(() => {
    setHistory([]);
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  return { history, addSearch, clearHistory };
}
