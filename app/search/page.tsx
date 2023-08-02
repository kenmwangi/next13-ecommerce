import Container from "@/components/Container";
import ProductCard from "@/components/ProductCard";
import { prisma } from "@/lib/prisma";
import { Metadata } from "next";
import React from "react";

interface SearchPageProps {
  searchParams: { query: string };
}

export function generateMetadata({
  searchParams: { query },
}: SearchPageProps): Metadata {
  return {
    title: `Searches: ${query}`,
  };
}

export default async function Search({
  searchParams: { query },
}: SearchPageProps) {
  const products = await prisma.product.findMany({
    where: {
      OR: [
        { name: { contains: query, mode: "insensitive" } },
        { description: { contains: query, mode: "insensitive" } },
      ],
    },
    orderBy: {
      id: "desc",
    },
  });

  if (products.length === 0) {
    return (
      <h1 className="text-center h3 mt-10">
        No product found from search query{" "}
        <span className="text-rose-400">{`"${query}"`}</span>
      </h1>
    );
  }
  return (
    <Container>
      <section className="my-10">
        <p className="text-gray-500 text-lg mb-8">
          You search has found:
          <span className="text-rose-400 font-bold mx-2">
            {products.length}
          </span>
          products from <span className="text-rose-400">{`"${query}"`}</span>{" "}
          query
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
          {products.map((product) => {
            return <ProductCard product={product} key={product.id} />;
          })}
        </div>
      </section>
    </Container>
  );
}
