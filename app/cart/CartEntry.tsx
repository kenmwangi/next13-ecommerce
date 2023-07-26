"use client";
import { CartItemWithProduct } from "@/lib/cart";

import { formatPrice } from "@/lib/formatPrice";
import Image from "next/image";
import Link from "next/link";
import React, { useTransition } from "react";

interface CartEntryProps {
  cartItem: CartItemWithProduct;
  setProductQuantity: (productId: string, quantity: number) => Promise<void>;
}

export default function CartEntry({
  cartItem: { product, quantity },
  setProductQuantity,
}: CartEntryProps) {
  const [isPending, startTransition] = useTransition();

  const quantityOptions: JSX.Element[] = [];

  for (let i = 1; i <= 99; i++) {
    quantityOptions.push(
      <option value={i} key={i}>
        {i}
      </option>
    );
  }
  return (
    <div className="mt-6">
      <div className="flex flex-wrap items-center gap-3">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={200}
          height={200}
          className="rounded-lg"
        />
        <div>
          <Link href={`/products/${product.id}`} className="font-bold">
            {product.name}
          </Link>
          <p>Price: {formatPrice(product.price)}</p>
          <div className="my-2 flex items-center gap-2">
            Quantity:
            <select
              name="options"
              id="options"
              defaultValue={quantity}
              onChange={(e) => {
                const newQuantity = parseInt(e.currentTarget.value);
                startTransition(async () => {
                  await setProductQuantity(product.id, newQuantity);
                });
              }}
              className="form-select"
            >
              <option value={0}>0 (Remove)</option>
              {quantityOptions}
            </select>
          </div>
          <p className="flex items-center gap-3">
            Total: {formatPrice(product.price * quantity)}
            {isPending && <span>Loading ...</span>}
          </p>
        </div>
        <div className="divider">Divider</div>
      </div>
    </div>
  );
}
