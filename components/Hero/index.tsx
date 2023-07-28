import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <div className="h-[60vh] w-full relative">
      <div className="text-white absolute inset-0 z-10 flex flex-col justify-center items-center text-center">
        <h1 className="text-2xl mb-4 drop-shadow-md shadow-black">
          Ecommerce Summer Styles
        </h1>
        <p className="text-base max-w-lg mb-6 drop-shadow-md shadow-black">
          This year, our new summer collection will shelter you from the harsh
          elements of a world that doesn&apos;t care if you live or die.
        </p>
        <Link href="/store">Explore products</Link>
      </div>

      <Image
        src="/images/ecommerce.jpg"
        className="absolute inset-0"
        draggable="false"
        sizes="100vw"
        loading="eager"
        priority={true}
        quality={90}
        fill
        alt="Ecommerce"
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}
