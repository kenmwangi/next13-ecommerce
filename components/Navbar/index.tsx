import React from "react";
import Container from "../Container";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getCart } from "@/lib/cart";
import SearchCartButton from "./SearchCartButton";
import UserMenuButton from "./UserMenuButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { signIn } from "next-auth/react";

export const searchProducts = async (formData: FormData) => {
  "use server";

  const searchQuery = formData.get("searchQuery")?.toString();

  if (searchQuery) {
    redirect("/search?query=" + searchQuery);
  }
};

export default async function Navbar() {
  const cart = await getCart();

  const session = await getServerSession(authOptions);

  return (
    <div className="h-16 border-b-[1px] border-neutral-100">
      <Container>
        <nav className="flex items-center justify-between py-2">
          <div>
            <Link href="/">
              <h2 className="h2">E.</h2>
            </Link>
          </div>
          <form action={searchProducts}>
            <input
              type="search"
              name="searchQuery"
              id="search"
              placeholder="Search ..."
              className="form-input"
            />
          </form>
          <div className="flex items-center gap-5">
            <SearchCartButton cart={cart} />

            <UserMenuButton session={session} />
          </div>
        </nav>
      </Container>
    </div>
  );
}
