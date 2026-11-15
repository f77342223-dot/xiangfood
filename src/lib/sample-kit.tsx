"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type SampleKitContextValue = {
  items: string[];
  addSample: (name: string) => void;
  removeSample: (name: string) => void;
  clear: () => void;
};

const SampleKitContext = createContext<SampleKitContextValue | null>(null);

export function SampleKitProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<string[]>([]);

  const addSample = useCallback((name: string) => {
    setItems((prev) => (prev.includes(name) ? prev : [...prev, name].slice(0, 5)));
  }, []);

  const removeSample = useCallback((name: string) => {
    setItems((prev) => prev.filter((item) => item !== name));
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const value = useMemo(
    () => ({ items, addSample, removeSample, clear }),
    [items, addSample, removeSample, clear],
  );

  return (
    <SampleKitContext.Provider value={value}>{children}</SampleKitContext.Provider>
  );
}

export function useSampleKit() {
  const ctx = useContext(SampleKitContext);
  if (!ctx) {
    throw new Error("useSampleKit must be used within SampleKitProvider");
  }
  return ctx;
}
