import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { ClothingItem } from "@/types/clothing";

type ProductTableProps = {
  products: ClothingItem[];
};

function formatCategory(category: ClothingItem["category"]) {
  if (category === "top") return "Top";
  if (category === "bottom") return "Bottom";
  return "Dress";
}

export function ProductTable({ products }: ProductTableProps) {
  if (products.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed p-8 text-center">
        <p className="text-sm font-medium text-slate-900">No products yet</p>
        <p className="mt-1 text-sm text-slate-500">
          Add your first product from the brand form.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-slate-50">
              <TableHead className="min-w-[220px]">Product</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Sizes</TableHead>
              <TableHead>Color</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>
                  <div>
                    <p className="font-medium text-slate-950">
                      {product.name}
                    </p>
                    <p className="mt-1 max-w-md text-xs leading-5 text-slate-500">
                      {product.description}
                    </p>
                  </div>
                </TableCell>

                <TableCell>
                  <Badge variant="secondary">
                    {formatCategory(product.category)}
                  </Badge>
                </TableCell>

                <TableCell>
                  <div className="flex flex-wrap gap-1.5">
                    {product.availableSizes.map((size) => (
                      <Badge key={`${product.id}-${size}`} variant="outline">
                        {size}
                      </Badge>
                    ))}
                  </div>
                </TableCell>

                <TableCell>
                  <div className="flex items-center gap-2">
                    <div
                      className="h-6 w-6 rounded-full border shadow-sm"
                      style={{ backgroundColor: product.colorHex }}
                    />
                    <span className="text-sm text-slate-600">
                      {product.colorHex}
                    </span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}