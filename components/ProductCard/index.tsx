import { formatPrice } from "@/lib/formatPrice";
import { Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const isNew =
    Date.now() - new Date(product.createdAt).getTime() <
    1000 * 60 * 60 * 24 * 7;
  return (
    <div className="relative text-white rounded-md flex flex-col transition border-[1px] border-gray-100">
      <Link href={`products/${product.id}`} className="inset-0 absolute"></Link>
      <div className="overflow-hidden relative rounded-md">
        <Image
          src={product.imageUrl}
          width={400}
          height={400}
          className="object-cover w-full h-[300px]"
          alt={product.name}
        />
      </div>

      <div className="mt-4 px-6 pt-5 pb-5">
        <div className="">
          <h4 className="text-lg text-gray-900 font-medium">
            <Link href={`/products/${product.id}`} className="">
              {product.name}
              {isNew && (
                <span className="bg-rose-500 rounded text-xs p-1 ml-2 text-white">
                  New
                </span>
              )}
            </Link>
          </h4>
        </div>

        <p className="mt-2 text-sm font-medium leading-4 text-gray-500">
          {product.description}
        </p>
        <p className="mt-3 text-gray-600">{formatPrice(product.price)}</p>
      </div>
    </div>
  );
}
