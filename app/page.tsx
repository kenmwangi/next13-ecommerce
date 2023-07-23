import Container from "@/components/Container";
import ProductCard from "@/components/ProductCard";
import { prisma } from "@/lib/prisma";
import React from "react";

export default async function Home() {
  const products = await prisma.product.findMany({
    orderBy: { id: "desc" },
  });

  console.log(products);

  return (
    <div className="pt-32 pb-12 md:pt-40 md:pb-20">
      <Container>
        <div className="pb-12 md:pb-20">
          <h1 className="h1">Ecommerce Shop</h1>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <div className="lg:col-span-2">
            <ProductCard product={products[0]} />
          </div>
        </div>
      </Container>
    </div>
  );
}
