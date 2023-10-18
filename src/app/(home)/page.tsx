import Categories from "./components/categories"
import { prismaClient } from "@/lib/prisma"
import ProductList from "./components/product-list"
import SectionTitle from "./components/section-title"
import PromoBanner from "./components/promo-banner"

 const Home = async () => {
    const deals = await prismaClient.product.findMany({
      where: {discountPercentage: {
        gt: 0
      }}
    })

    const keyboards = await prismaClient.product.findMany({
      where: {category: {
        slug: "keyboards"
      }}
    })
  return (
   <div>
    <PromoBanner
      src={"/banner-home-01.png"}
      alt="banner de desconto"
      />
    <div className="mt-8 p-5">
      <Categories />
    </div>

    <div className="mt-8">
      <SectionTitle>Ofertas</SectionTitle>
      <ProductList products={deals} />
    </div>

    <PromoBanner
      src={"/banner-home-02.png"}
      alt="banner de desconto de ate 55% em mouses"
    />

    <div className="mt-8">
      <SectionTitle >Teclados</SectionTitle>
      <ProductList products={keyboards} />
    </div>

   </div>
  )
}

export default Home;
