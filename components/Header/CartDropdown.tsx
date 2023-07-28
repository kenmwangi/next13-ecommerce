import { useCartDropdown } from "@/context/cart-dropdown-context";
import { Popover, Transition } from "@headlessui/react";
import Link from "next/link";
import React, { Fragment } from "react";

export default function CartDropdown() {
  const { state, open, close } = useCartDropdown();
  return (
    <div className="h-full z-50" onMouseEnter={open} onMouseLeave={close}>
      <Popover className="relative h-full">
        <Popover.Button className="h-full">
          <Link href="/cart">{`My Bag`}</Link>
        </Popover.Button>
        <Transition
          show={state}
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel
            static
            className="hidden small:block absolute top-[calc(100%+1px)] right-0 bg-white border-x border-b border-gray-200 w-[382px] text-gray-900"
          >
            <div className="p-4 flex items-center justify-center">
              <h3 className="text-large-semi">Shopping Bag</h3>
            </div>
            {/* cart content here */}
            <div>
              <div className="flex py-16 flex-col gap-y-4 items-center justify-center">
                <div className="bg-gray-900 text-small-regular flex items-center justify-center w-6 h-6 rounded-full text-white">
                  <span>0</span>
                </div>
                <span>Your shopping bag is empty.</span>
                <div>
                  <Link href="/store">
                    <>
                      <span className="sr-only">Go to all products page</span>
                      <button onClick={close}>Explore products</button>
                    </>
                  </Link>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
}
