import { useRouter } from "next/navigation";
import { Popover, Transition } from "@headlessui/react";
import React, { useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import Container from "../Container";
import ProductCard from "../ProductCard";

export default function DropdownMenu() {
  const [open, setOpen] = useState(false);
  const { push } = useRouter();

  return (
    <div
      className="h-full"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="flex items-center h-full">
        <Popover className="h-full flex">
          <>
            <Link href="/cart" passHref className="relative flex h-full">
              <Popover.Button
                className={clsx(
                  "relative h-full flex items-center transition-all ease-out duration-200"
                )}
                onClick={() => push("/cart")}
              >
                Cart
              </Popover.Button>
            </Link>

            <Transition
              show={open}
              as={React.Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Popover.Panel
                static
                className="absolute top-full inset-x-0 text-sm text-gray-700 z-30 border-y border-gray-200"
              >
                <div className="relative bg-white py-8">
                  <div className="flex items-start">
                    <Container>
                      <div className="flex flex-col flex-1 max-w-[30%]">
                        <h3 className="text-base text-gray-900 mb-4">
                          Collections
                        </h3>
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-3">
                        <section className="p-3">Products 1</section>
                        <section className="p-3">Products 2</section>
                        <section className="p-3">Products 3</section>
                      </div>
                    </Container>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        </Popover>
      </div>
    </div>
  );
}
