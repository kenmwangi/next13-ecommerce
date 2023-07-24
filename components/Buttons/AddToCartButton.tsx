"use client";
import React, { useState, useTransition } from "react";
import { BsCartPlus } from "react-icons/bs";

interface AddToCartButtonProps {
  productId: string;
  incrementProductQuantity: (productId: string) => Promise<void>;
}
export default function AddToCartButton({
  productId,
  incrementProductQuantity,
}: AddToCartButtonProps) {
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState(false);

  return (
    <div className="flex items-center gap-2">
      <button
        className="btn flex gap-2 bg-blue-600 hover:bg-blue-500 transition duration-200 text-white"
        onClick={() => {
          setSuccess(false);
          startTransition(async () => {
            await incrementProductQuantity(productId);
            setSuccess(true);
          });
        }}
      >
        Add to Cart
        <span>
          <BsCartPlus />
        </span>
      </button>
      {isPending && <span>Loading ...</span>}
      {!isPending && success && (
        <span className="text-green-600 bg-green-100 p-3 block">
          Added to cart.
        </span>
      )}
    </div>
  );
}
