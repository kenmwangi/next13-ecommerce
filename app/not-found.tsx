"use client";
import Container from "@/components/Container";
import { Metadata } from "next";
import { useRouter } from "next/navigation";
import React from "react";

export const metadata: Metadata = {
  title: "404",
  description: "Something went wrong",
};
export default function NotFound() {
  const router = useRouter();

  return (
    <div className="py-16 lg:py-20">
      <Container>
        <div className="flex flex-col gap-y-8 items-center justify-center">
          <h1 className="h1 text-center">404! Page not found</h1>
          <button
            className="btn bg-blue-500 text-white hover:bg-blue-600/90 transition-colors delay-300"
            onClick={() => router.push("/")}
          >
            Go Back Home
          </button>
        </div>
      </Container>
    </div>
  );
}
