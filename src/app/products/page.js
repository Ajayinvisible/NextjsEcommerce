import axios from "axios";
import ProductsCard from "./_components/ProductsCard";
import { getAllProducts } from "@/api/products/productsApi";

async function ProductsPage() {
  const response = await getAllProducts().catch((error) => {
    throw new Error(error.response.data);
  });;

  const products = response?.data;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products?.map((product, index) => (
          <ProductsCard key={index} product={product} />
        ))}
      </div>
    </>
  );
}

export default ProductsPage;
