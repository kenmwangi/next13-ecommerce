import React from "react";
import Container from "../Container";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="py-16 lg:py-20 border-[1px] border-neutral-100">
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
              <div className=" mt-6">
                <input
                  type="email"
                  placeholder="Email address"
                  autoComplete="email"
                  className="form-input"
                />

                <button className="btn bg-slate-900 hover:bg-slate-950 transition mt-4 text-white">
                  Subscribe &rarr;
                </button>
              </div>
            </form>
          </div>
        </footer>
        <div className="mb-2 mt-24 flex items-center justify-between gap-x-6  border-t border-neutral-100 pt-12">
          <Link href="/">
            <h1 className="h2">E.</h1>
          </Link>
          <p className="text-xs lg:text-sm text-neutral-700">
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
