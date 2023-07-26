import { ShoppingCart } from "@/lib/cart";
import Link from "next/link";
import React from "react";
import { FiShoppingCart } from "react-icons/fi";

interface ShoppingCartButtonProps {
  cart: ShoppingCart | null;
}

export default function SearchCartButton({ cart }: ShoppingCartButtonProps) {
  return (
    <div>
      <label htmlFor="">
        <div className="text-gray-500 flex relative">
          <Link href="/cart">
            <FiShoppingCart size={24} />
            <span className="absolute -top-2 -right-3 text-rose-500">
              {cart?.size || 0}
            </span>
          </Link>
        </div>
      </label>
    </div>
  );
}
