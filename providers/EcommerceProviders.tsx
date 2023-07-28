import { CartDropdownProvider } from "@/context/cart-dropdown-context";
import MobileMenuProvider from "@/context/mobile-menu-context";
import React from "react";

export default function EcommerceProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CartDropdownProvider>
      <MobileMenuProvider>{children}</MobileMenuProvider>
    </CartDropdownProvider>
  );
}
