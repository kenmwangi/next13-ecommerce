import { prisma } from "@/lib/prisma";
import Container from "@/components/Container";
import { formatPrice } from "@/lib/formatPrice";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { cache } from "react";
import AddToCartButton from "@/components/Buttons/AddToCartButton";
import { incrementProductQuantity } from "./actions";

interface ProductPageProps {
  params: {
    id: string;
  };
}

const getProduct = cache(async (id: string) => {
  const product = await prisma.product.findUnique({ where: { id } });
  if (!product) notFound();
  return product;
});

export async function generateMetadata({
  params: { id },
}: ProductPageProps): Promise<Metadata> {
  const product = await getProduct(id);

  return {
    title: product.name + " - Flowmazon",
    description: product.description,
    openGraph: {
      images: [{ url: product.imageUrl }],
    },
  };
}

export default async function ProductPage({
  params: { id },
}: ProductPageProps) {
  const product = await getProduct(id);

  return (
    <div className="pt-32 pb-12 md:pt-40 md:pb-20">
      <Container>
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={500}
          height={500}
          className="rounded-lg mb-3"
          priority
        />

        <div className="mt-2">
          <h1 className="text-5xl font-bold">{product.name}</h1>
          <p className="text-gray-600">{formatPrice(product.price)}</p>
          <p className="py-6">{product.description}</p>
          <span className="text-gray-500">
            <AddToCartButton
              productId={product.id}
              incrementProductQuantity={incrementProductQuantity}
            />
          </span>
        </div>
      </Container>
    </div>
  );
}
