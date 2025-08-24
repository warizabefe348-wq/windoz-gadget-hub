import { createContext, useContext, useState, ReactNode } from 'react';

interface LoadingContextType {
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
  showLoading: () => void;
  hideLoading: () => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const LoadingProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);

  const setLoading = (loading: boolean) => {
    setIsLoading(loading);
  };

  const showLoading = () => {
    setIsLoading(true);
    // Auto hide after 2 seconds for navigation
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const hideLoading = () => {
    setIsLoading(false);
  };

  return (
    <LoadingContext.Provider value={{ isLoading, setLoading, showLoading, hideLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};