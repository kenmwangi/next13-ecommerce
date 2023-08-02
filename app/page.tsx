import Container from "@/components/Container";
import Hero from "@/components/Hero";
import PaginationBar from "@/components/PaginationBar";
import ProductCard from "@/components/ProductCard";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import React from "react";

interface HomeProps {
  searchParams: { page: string };
}

export default async function Home({
  searchParams: { page = "1" },
}: HomeProps) {
  const currentPage = parseInt(page);

  const pageSize = 6;
  const heroItemCount = 1;

  const totalItemCount = await prisma.product.count();

  const totalPages = (totalItemCount - heroItemCount) / pageSize;

  const products = await prisma.product.findMany({
    orderBy: { id: "desc" },
    skip: currentPage - 1 + pageSize + (currentPage === 1 ? 0 : heroItemCount),
    take: pageSize + (currentPage === 1 ? heroItemCount : 0),
  });

  return (
    // <div className="pt-32 pb-12 md:pt-40 md:pb-20">
    //   </div>
    <>
      <Hero />

      <Container>
        <div className="my-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {products.slice(1).map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
        <div className="mb-12 flex items-center justify-center">
          {totalPages > 1 && (
            <PaginationBar
              currentPage={currentPage}
              totalPages={totalItemCount}
            />
          )}
        </div>
      </Container>
    </>
  );
}
