/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { BackendClient } from "@/lib/backend-client";
import { useRouter } from "next/navigation";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";

interface HelperContextType {
  backendClient: BackendClient;
  router: ReturnType<typeof useRouter>;
  navigate: string;
  setNavigate: (value: string) => void;
}

const HelperContext = createContext<() => HelperContextType>(() => {
  return {
    backendClient: new BackendClient(),
    router: useRouter(),
    navigate: "home",
    setNavigate: () => {},
  };
});

export function HelperProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [navigate, setNavigate] = useState<string>("");

  const useHelper = useCallback(
    () => ({
      backendClient: new BackendClient(),
      router,
      setNavigate,
      navigate,
    }),
    [navigate],
  );
  
  return (
    <HelperContext.Provider value={useHelper}>
      {children}
    </HelperContext.Provider>
  );
}

export const useHelperContext = () => useContext(HelperContext);
