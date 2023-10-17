import { Button } from "./button";
import { Card } from "./card";
import {MenuIcon, ShoppingCartIcon} from "lucide-react"

const Header = () => {
    return (
    <Card className="flex justify-between p-[1.875rem] items-center">
        <Button size={"icon"} variant={"outline"}>
            <MenuIcon />
        </Button>

        <h1 className="font-semibold text-lg">
            <span className="text-primary">Tech</span> Store
        </h1>

        <Button size={"icon"} variant={"outline"}>
            <ShoppingCartIcon />
        </Button>
    </Card>
    );
}
 
export default Header;