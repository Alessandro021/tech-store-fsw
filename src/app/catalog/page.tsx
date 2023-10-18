import { Badge } from "@/components/ui/badge";
import { prismaClient } from "@/lib/prisma";
import { ShapesIcon } from "lucide-react";
import CategoryItem from "./components/category-item";

const CatalogPage = async () => {

    const category = await prismaClient.category.findMany({})
    return ( 
        <div className="p-5 flex flex-col gap-8">
            <Badge variant="outline" className="w-fit gap-2 text-base uppercase border-primary px-3 py-[0.375rem] border-2">
                <ShapesIcon /> Catálogo
            </Badge>

            <div className="grid grid-cols-2 gap-8">
                {category.map(category => <CategoryItem key={category.id} category={category} />)}
            </div>
        </div>
     );
}
 
export default CatalogPage;