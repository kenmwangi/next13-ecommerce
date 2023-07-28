import Container from "@/components/Container";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import React from "react";

export default async function Home() {
  const products = await prisma.product.findMany({
    orderBy: { id: "desc" },
  });

  return (
    // <div className="pt-32 pb-12 md:pt-40 md:pb-20">
    //   </div>
    <>
      <Hero />

      <Container>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {products.slice(0, 4).map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      </Container>
    </>
  );
}
