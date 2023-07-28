import { useMobileMenu } from "@/context/mobile-menu-context";
import React from "react";

export default function MobileMenu() {
  const {
    screen: [currentScreen],
  } = useMobileMenu();

  return (
    <div className="flex flex-col flex-1">
      {(() => {
        switch (currentScreen) {
          case "country":
            return "";
          case "search":
            return "";
          default:
            return "";
        }
      })()}
    </div>
  );
}
