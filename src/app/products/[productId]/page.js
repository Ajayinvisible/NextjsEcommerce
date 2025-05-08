import { getProductById } from "@/api/products/productsApi";
import logo from "@/assets/images/logo.png";
import ProductDetail from "../_components/ProductDetail";

async function getById( params ) {
  const productId = (await params).productId;
  const response = await getProductById(productId).catch((error) => {
    throw new Error(error.response.data);
  });
  return response?.data;
}

export const generateMetadata = async ({ params }) => {
  const product = await getById(params);

  return {
    title: {
      absolute: product.name
    },
    description: product.name + "best product of all time",
    keywords: `${product?.name}, ${product?.brand}, ${product?.category} best product of all time`,
    openGraph: {
      title: product.name,
      description: `${product?.name}, ${product?.brand}, ${product?.category} best product of all time`,
      image: logo,
      type: "website",
    },
  };
};

async function ProductById({ params }) {
  const product = await getById(params);
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
