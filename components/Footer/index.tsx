import React from "react";
import Container from "../Container";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="py-16 lg:py-20">
      <Container>
        <footer className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <nav>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              <li className="list-none">
                <p className="font-semibold text-slate-950">Connect</p>
                <ul className="flex flex-col gap-4 text-gray-500 hover:text-gray-700 transition-colors mt-6 text-sm">
                  <Link href="/">Twitter</Link>
                  <Link href="/">Linkedin</Link>
                  <Link href="/">Github</Link>
                </ul>
              </li>
              <li className="list-none">
                <p className="font-semibold text-slate-950">Projects</p>
                <ul className="flex flex-col gap-4 text-gray-500 hover:text-gray-700 transition-colors mt-6 text-sm">
                  <Link href="/">Job Search</Link>
                  <Link href="/">Ecommerce</Link>
                  <Link href="/">Real Estate</Link>
                </ul>
              </li>
              <li className="list-none">
                <p className="font-semibold text-slate-950">Open-source</p>
                <ul className="flex flex-col gap-4 text-gray-500 hover:text-gray-700 transition-colors mt-6 text-sm">
                  <Link href="/">Nextjs</Link>
                  <Link href="/">Reactjs</Link>
                  <Link href="/">Tailwindcss</Link>
                </ul>
              </li>
            </div>
          </nav>
          <div className="flex lg:justify-end">
            <form className="max-w-sm">
              <h2 className="text-sm font-semibold tracking-wider text-neutral-950">
                Sign up our newsletter
              </h2>
              <p className="mt-4 text-sm text-neutral-700">
                Subscribe to get the latest fullstack news and tricks
              </p>
              <div className="relative mt-6">
                <input
                  type="email"
                  placeholder="Email address"
                  autoComplete="email"
                  className="form-input"
                />
                <div className="absolute inset-y-1 right-10 flex justify-end">
                  <button className="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800">
                    &rarr;
                  </button>
                </div>
              </div>
            </form>
          </div>
        </footer>
        <div className="mb-20 mt-24 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
          <Link href="/">
            <h1 className="h2">E.</h1>
          </Link>
          <p className="text-sm text-neutral-700">
            <Link href="https://www.twitter.com/ken_cipher" target="_blank">
              &copy; Ecommerce Inc. {new Date().getFullYear()}. All rights
              reserved
            </Link>
          </p>
        </div>
      </Container>
    </div>
  );
}
