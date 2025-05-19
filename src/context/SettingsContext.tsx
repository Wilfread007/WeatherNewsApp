import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

// Define the shape of the context
interface SettingsContextType {
  unit: 'metric' | 'imperial';
  setUnit: Dispatch<SetStateAction<'metric' | 'imperial'>>;
}

// Provide a default fallback (usually only used outside of a provider, like testing)
const defaultContextValue: SettingsContextType = {
  unit: 'metric',
  setUnit: () => {}, // no-op function
};

// Create the context with a default value
export const SettingsContext = createContext<SettingsContextType>(defaultContextValue);

// Props type for the provider
interface SettingsProviderProps {
  children: ReactNode;
}

// Provider component
export const SettingsProvider = ({ children }: SettingsProviderProps) => {
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');

  return (
    <SettingsContext.Provider value={{ unit, setUnit }}>
      {children}
    </SettingsContext.Provider>
  );
};
