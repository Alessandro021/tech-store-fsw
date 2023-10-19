import { ShoppingCartIcon } from "lucide-react";
import { Badge } from "./badge";
import { useContext } from "react";
import { CartContext } from "@/provider/cart";

const Cart = () => {
    const {products} = useContext(CartContext)
    return ( 
        <div>
            <Badge variant="outline" className="w-fit gap-2 text-base uppercase border-primary px-3 py-[0.375rem] border-2">
                <ShoppingCartIcon /> Carrinho
            </Badge>

            {products.map(product => (
                <h1 key={product.id}>{product.name}</h1>
            ))}
        </div>
     );
}
 
export default Cart;