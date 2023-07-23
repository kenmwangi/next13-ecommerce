import { Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <Image
          src={product.imageUrl}
          width={250}
          height={250}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          alt={product.name}
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h4 className="text-lg text-gray-900 font-medium">
            <Link href={`/products/${product.id}`}>
              <span className="absolute inset-0"></span>
              {product.name}
            </Link>
          </h4>
          <p className="mt-2 text-sm font-medium leading-4 text-gray-500">
            {product.description}
          </p>
        </div>
      </div>
    </div>
  );
}
