import Container from "@/components/Container";
import { getCart } from "@/lib/cart";
import React from "react";
import CartEntry from "./CartEntry";
import { setProductQuantity } from "./actions";
import { formatPrice } from "@/lib/formatPrice";

export default async function Cart() {
  const cart = await getCart();
  return (
    <div className="py-16 lg:py-20">
      <Container>
        <h1 className="h1 mb-16 lg:mb-20">Shopping Cart</h1>

        {cart?.items.map((cartItem) => {
          return (
            <CartEntry
              key={cartItem.id}
              cartItem={cartItem}
              setProductQuantity={setProductQuantity}
            />
          );
        })}

        {!cart?.items.length && (
          <p className="my-5 text-gray-600">You cart is empty</p>
        )}
        <div className="flex flex-col items-end sm:items-center">
          <p className="font-bold mb-3">
            Total: {formatPrice(cart?.subtotal || 0)}
          </p>
          <button className="btn-sm mt-3 sm:w-[200px] bg-blue-500 text-white hover:bg-blue-600 transition">
            Checkout
          </button>
        </div>
      </Container>
    </div>
  );
}
