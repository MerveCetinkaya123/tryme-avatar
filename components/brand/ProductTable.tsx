import type { ClothingItem } from "@/types/clothing";

type ProductTableProps = {
  products: ClothingItem[];
};

export function ProductTable({ products }: ProductTableProps) {
  return (
    <div className="overflow-hidden rounded-2xl border bg-white">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-100 text-slate-600">
            <tr>
              <th className="px-5 py-4 font-medium">Product</th>
              <th className="px-5 py-4 font-medium">Category</th>
              <th className="px-5 py-4 font-medium">Sizes</th>
              <th className="px-5 py-4 font-medium">Color</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-t">
                <td className="px-5 py-4">
                  <p className="font-medium text-slate-950">{product.name}</p>
                  <p className="mt-1 text-xs text-slate-500">
                    {product.description}
                  </p>
                </td>

                <td className="px-5 py-4 capitalize text-slate-700">
                  {product.category}
                </td>

                <td className="px-5 py-4 text-slate-700">
                  {product.availableSizes.join(", ")}
                </td>

                <td className="px-5 py-4">
                  <div className="flex items-center gap-2">
                    <div
                      className="h-6 w-6 rounded-full border"
                      style={{ backgroundColor: product.colorHex }}
                    />
                    <span className="text-slate-600">{product.colorHex}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}