"use client";
import clsx from "clsx";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Hamburger from "./Hamburger";
import { useMobileMenu } from "@/context/mobile-menu-context";
import DropdownMenu from "./DropdownMenu";
import CartDropdown from "./CartDropdown";
import MobileMenu from "./mobile-menu";

export default function Header() {
  const pathName = usePathname();
  const [isHome, setIsHome] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  //   useEffect detecting if window is scrolled > 5px on the Y axis
  useEffect(() => {
    if (isHome) {
      const detectScrollY = () => {
        if (window.scrollY > 5) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };

      window.addEventListener("scroll", detectScrollY);

      return () => {
        window.removeEventListener("scroll", detectScrollY);
      };
    }
  }, [isHome]);

  useEffect(() => {
    pathName === "/" ? setIsHome(true) : setIsHome(false);
  }, [pathName]);

  const { toggle } = useMobileMenu();

  return (
    <div
      className={clsx("sticky top-0 inset-x-0 z-50 group", {
        "!fixed": isHome,
      })}
    >
      <header
        className={clsx(
          "relative h-16 px-8 mx-auto transition-colors bg-transparent border-b border-transparent duration-200 group-hover:bg-white group-hover:border-gray-200",
          {
            "!bg-white !border-gray-200": !isHome || isScrolled,
          }
        )}
      >
        <nav
          className={clsx(
            "text-gray-900 flex items-center justify-between w-full h-full text-small-regular transition-colors duration-200",
            {
              "text-white group-hover:text-gray-900": isHome && !isScrolled,
            }
          )}
        >
          <div className="flex-1 basis-0 h-full flex items-center">
            <div className="block lg:hidden">
              {/* <Hamburger setOpen={toggle} /> */}
              <MobileMenu />
            </div>
            <div className="hidden lg:block h-full">
              <DropdownMenu />
            </div>
          </div>

          <div className="flex items-center gap-5 h-full">
            <Link href="/" className="text-xl uppercase">
              Ecommerce.
            </Link>
          </div>

          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
            <div className="hidden sm:flex items-center gap-x-6 h-full">
              <Link href="/account">Account</Link>
            </div>
            <CartDropdown />
          </div>
        </nav>
        {/* <MobileMenu /> */}
      </header>
    </div>
  );
}
