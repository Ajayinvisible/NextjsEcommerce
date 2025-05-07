import { getProductById } from "@/api/products/productsApi";
import ProductDetail from "../_components/ProductDetail";

async function ProductById({ params }) {
  const productId = (await params).productId;
  const response = await getProductById(productId).catch((error) => {
    throw new Error(error.response.data);
  });
  console.log(response);
  const product = response?.data;

  return (
    <>
      <ProductDetail product={product} />
      <div className="my-5">
        <div className="bg-slate-700 text-white font-bold py-3 pl-5 mt-5 rounded mb-5">
          Description
        </div>
        <p>{product.description}</p>
      </div>
    </>
  );
}

export default ProductById;
