import React from "react";
import Container from "../Container";
import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";
import { getCart } from "@/lib/cart";
import SearchCartButton from "./SearchCartButton";

export const searchProducts = async (formData: FormData) => {
  "use server";

  const searchQuery = formData.get("searchQuery")?.toString();

  if (searchQuery) {
    redirect("/search?query=" + searchQuery);
  }
};

export default async function Navbar() {
  const cart = await getCart();

  return (
    <div className="h-16 border-b-[1px] border-neutral-100">
      <Container>
        <nav className="flex items-center justify-between py-2">
          <div>
            <Link href="/">
              <h2 className="h2">E.</h2>
            </Link>
          </div>
          <div className="flex items-center gap-5">
            <form action={searchProducts}>
              <input
                type="search"
                name="search"
                id="search"
                placeholder="Search ..."
                className="form-input"
              />
            </form>
            <SearchCartButton cart={cart} />
            <Image
              src="/images/placeholder.jpg"
              width={30}
              height={30}
              alt="User"
              className="rounded-full"
            />
          </div>
        </nav>
      </Container>
    </div>
  );
}
