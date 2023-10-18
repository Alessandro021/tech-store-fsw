import Image from "next/image"
import Categories from "./components/categories"
import { prismaClient } from "@/lib/prisma"
import ProductList from "./components/product-list"

 const Home = async () => {
    const deals = await prismaClient.product.findMany({
      where: {discountPercentage: {
        gt: 0
      }}
    })
  return (
   <div>
    <Image
      className="h-auto w-full p-5"
      sizes="100vw"
      src={"/banner-home-01.png"}
      alt="banner de desconto"
      height={0}
      width={0}
    />

    <div className="mt-8 p-5">
      <Categories />
    </div>

    <div className="mt-8">
      <ProductList products={deals} />
    </div>

   </div>
  )
}

export default Home;
