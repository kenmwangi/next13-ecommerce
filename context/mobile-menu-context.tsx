"use client";
import useCurrentWidth from "@/hooks/use-current-width";
import useDebounce from "@/hooks/use-debounce";
import useToggleState from "@/hooks/use-toggle-state";
import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

type ScreenType = "main" | "country" | "search";

interface MobileMenuContext {
  state: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
  screen: [ScreenType, Dispatch<SetStateAction<ScreenType>>];
}

export const MobileMenuContext = createContext<MobileMenuContext | null>(null);

export default function MobileMenuProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { state, close, open, toggle } = useToggleState();
  const [screen, setScreen] = useState<ScreenType>("main");

  const windowWidth = useCurrentWidth();

  const debounceWidth = useDebounce(windowWidth, 200);

  const closeMenu = useCallback(() => {
    close();

    setTimeout(() => {
      setScreen("main");
    }, 500);
  }, [close]);

  useEffect(() => {
    if (state && debounceWidth >= 1024) {
      closeMenu();
    }
  }, [debounceWidth, state, closeMenu]);

  useEffect(() => {}, [debounceWidth]);

  return (
    <MobileMenuContext.Provider
      value={{
        state,
        close: closeMenu,
        open,
        toggle,
        screen: [screen, setScreen],
      }}
    >
      {children}
    </MobileMenuContext.Provider>
  );
}

export const useMobileMenu = () => {
  const context = useContext(MobileMenuContext);

  if (context === null) {
    throw new Error(
      "useCartDropdown must be used within a CartDropdownProvider"
    );
  }
  return context;
};
