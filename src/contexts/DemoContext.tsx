import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from "react";

interface DemoContextType {
  isDemoMode: boolean;
  enterDemoMode: () => void;
  exitDemoMode: () => void;
}

const DemoContext = createContext<DemoContextType | undefined>(undefined);

const DEMO_KEY = "pf_demo_mode";

export function DemoProvider({ children }: { children: ReactNode }) {
  const [isDemoMode, setIsDemoMode] = useState(() => {
    return localStorage.getItem(DEMO_KEY) === "true";
  });

  useEffect(() => {
    if (isDemoMode) {
      localStorage.setItem(DEMO_KEY, "true");
    } else {
      localStorage.removeItem(DEMO_KEY);
    }
  }, [isDemoMode]);

  const enterDemoMode = useCallback(() => setIsDemoMode(true), []);
  const exitDemoMode = useCallback(() => setIsDemoMode(false), []);

  return (
    <DemoContext.Provider value={{ isDemoMode, enterDemoMode, exitDemoMode }}>
      {children}
    </DemoContext.Provider>
  );
}

export function useDemo() {
  const context = useContext(DemoContext);
  if (context === undefined) {
    throw new Error("useDemo must be used within a DemoProvider");
  }
  return context;
}
