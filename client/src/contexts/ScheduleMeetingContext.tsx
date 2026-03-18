import { createContext, useContext, useState, useCallback, useMemo, ReactNode } from "react";

interface ScheduleMeetingContextType {
  isOpen: boolean;
  openDialog: () => void;
  closeDialog: () => void;
}

const ScheduleMeetingContext = createContext<ScheduleMeetingContextType | undefined>(undefined);

export function ScheduleMeetingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = useCallback(() => setIsOpen(true), []);
  const closeDialog = useCallback(() => setIsOpen(false), []);

  const value = useMemo(() => ({ isOpen, openDialog, closeDialog }), [isOpen, openDialog, closeDialog]);

  return (
    <ScheduleMeetingContext.Provider value={value}>
      {children}
    </ScheduleMeetingContext.Provider>
  );
}

export function useScheduleMeeting() {
  const context = useContext(ScheduleMeetingContext);
  if (!context) {
    throw new Error("useScheduleMeeting deve ser usado dentro de ScheduleMeetingProvider");
  }
  return context;
}
