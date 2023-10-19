import Categories from "./components/categories"
import { prismaClient } from "@/lib/prisma"
import ProductList from "../../components/ui/product-list"
import SectionTitle from "../../components/ui/section-title"
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

    const mouses = await prismaClient.product.findMany({
      where: {category: {
        slug: "mouses"
      }}
    })

  return (
   <div className="flex flex-col gap-8 py-8">
    <PromoBanner
      src={"/banner-home-01.png"}
      alt="banner de desconto"
      />
    <div className=" p-5">
      <Categories />
    </div>

    <div>
      <SectionTitle>Ofertas</SectionTitle>
      <ProductList products={deals} />
    </div>

    <PromoBanner
      src={"/banner-home-02.png"}
      alt="banner de desconto de ate 55% em mouses"
    />

    <div>
      <SectionTitle >Teclados</SectionTitle>
      <ProductList products={keyboards} />
    </div>

    <PromoBanner
      src={"/banner-home-03.png"}
      alt="banner de desconto de ate 20% em fones de ouvido"
    />

    <div>
      <SectionTitle >Mouses</SectionTitle>
      <ProductList products={mouses} />
    </div>

   </div>
  )
}

export default Home;
