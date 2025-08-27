/* eslint-disable @next/next/no-img-element */
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
import ShareProvider from "@/components/ShareProvider";
import { useLoadingContext } from "./loading-provider";

interface ShareInfo {
  imageUrl: string;
  title: string;
  url: string;
}

interface HelperContextType {
  backendClient: BackendClient;
  router: ReturnType<typeof useRouter>;
  navigate: string;
  setNavigate: (value: string) => void;
  shareInfo?: ShareInfo | null;
  setShareInfo: (payload: ShareInfo) => void;
  setLoading: (value: boolean) => void;
  setIsNavbarSticky: (value: boolean) => void;
  isNavbarSticky: boolean;
  setIsFooterBorder: (value: boolean) => void;
  isFooterBorder: boolean;
}

const HelperContext = createContext<() => HelperContextType>(() => {
  return {
    backendClient: new BackendClient(),
    router: useRouter(),
    navigate: "home",
    setNavigate: () => {},
    shareInfo: undefined,
    setShareInfo: () => {},
    setLoading: () => {},
    setIsNavbarSticky: () => {},
    isNavbarSticky: true,
    setIsFooterBorder: () => {},
    isFooterBorder: true,
  };
});

export function HelperProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [navigate, setNavigate] = useState<string>("");
  const [shareInfo, setShareInfo] = useState<ShareInfo | null>();
  const [isNavbarSticky, setIsNavbarSticky] = useState<boolean>(true);
  const [isFooterBorder, setIsFooterBorder] = useState<boolean>(true);
  const setLoading = useLoadingContext();

  const useHelper = useCallback(
    () => ({
      backendClient: new BackendClient(),
      router,
      setNavigate,
      navigate,
      shareInfo,
      setShareInfo,
      setLoading,
      isNavbarSticky,
      setIsNavbarSticky,
      isFooterBorder,
      setIsFooterBorder,
    }),
    [navigate, isNavbarSticky, isFooterBorder],
  );

  return (
    <HelperContext.Provider value={useHelper}>
      {shareInfo?.title && (
        <ShareProvider
          imageUrl={shareInfo?.imageUrl ?? ""}
          title={shareInfo?.title ?? ""}
          url={shareInfo?.url ?? ""}
          onClose={() => setShareInfo(null)}
        />
      )}
      {children}
    </HelperContext.Provider>
  );
}

export const useHelperContext = () => useContext(HelperContext);
