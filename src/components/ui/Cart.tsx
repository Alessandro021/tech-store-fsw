import { ShoppingCartIcon } from "lucide-react";
import { Badge } from "./badge";
import { useContext } from "react";
import { CartContext } from "@/provider/cart";
import CartItem from "./cart-item";
import { computeProductTotalPrice } from "@/helpers/product";

const Cart = () => {
    const {products} = useContext(CartContext)
    return ( 
        <div className="flex flex-col gap-8">
            <Badge variant="outline" className="w-fit gap-2 text-base uppercase border-primary px-3 py-[0.375rem] border-2">
                <ShoppingCartIcon /> Carrinho
            </Badge>

            <div className="flex flex-col gap-5">
                {products.map(product => (
                    <CartItem key={product.id} product={computeProductTotalPrice(product) as any} />
                ))}
            </div>
        </div>
     );
}
 
export default Cart;