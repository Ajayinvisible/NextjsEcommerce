import axios from "axios";
import ProductsCard from "./_components/ProductsCard";

async function ProductsPage() {
  const response = await axios.get(
    "https://node-20250302.vercel.app/api/products"
  );

  const products = response.data;

  return (
    <>
      {products?.map((product, index) => (
        <ProductsCard key={index} product={product} />
      ))}
    </>
  );
}

export default ProductsPage;
