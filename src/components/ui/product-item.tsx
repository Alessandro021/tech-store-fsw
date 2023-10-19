import { ProductWithTotalPrice } from "@/helpers/product";
import Image from "next/image";
import { Badge } from "./badge";
import { ArrowDownIcon } from "lucide-react";

interface ProductItemProps {
    product: ProductWithTotalPrice
}

const ProductItem = ({product}: ProductItemProps) => {
    return (
      <div className="flex flex-col gap-4">
        <div className="relative flex h-[170px] w-full items-center justify-center rounded-lg bg-accent ">
          <Image
            className="h-auto max-h-[75%] w-auto max-w-[75%]"
            style={{ objectFit: "contain" }}
            src={product.imageUrls[0]}
            alt={product.name}
            width={0}
            height={0}
            sizes="100vw"
          />
          {product.discountPercentage > 0 && (
            <Badge className="absolute left-3 top-3 px-2 py-[2px]">
                <ArrowDownIcon size={14}/> {product.discountPercentage}%
            </Badge>
        )}
        </div>

        <div className="flex flex-col gap-1">
          <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm">
            {product.name}
          </p>
        </div>

        <div className="flex items-center gap-2">
          {product.discountPercentage > 0 && (
            <>
              <p className="font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                R$ {product.totalPrice.toFixed(2)}
              </p>

              <p className="text-xs line-through opacity-75 overflow-hidden text-ellipsis whitespace-nowrap">
                R$ {Number(product.basePrice).toFixed(2)}
              </p>
            </>
          )}

          {product.discountPercentage === 0 && (
             <p className="text-sm font-semibold overflow-hidden text-ellipsis whitespace-nowrap">R$ {product.totalPrice.toFixed(2)}</p>
          )}
        </div>
      </div>
    );
}
 
export default ProductItem;