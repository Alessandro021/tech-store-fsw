"use client"

import Image from "next/image"
import Categories from "./components/categories"

export default function Home() {

  return (
   <div className="p-5">
    <Image
      className="h-auto w-full"
      sizes="100vw"
      src={"/banner-home-01.png"}
      alt="banner de desconto"
      height={0}
      width={0}
    />

    <div className="mt-8">
      <Categories />
    </div>
   </div>
  )
}
