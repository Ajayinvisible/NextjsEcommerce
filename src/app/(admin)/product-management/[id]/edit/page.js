import { getCategories, getProductById } from "@/api/products/productsApi";
import ProductForm from "@/components/products/ProductForm";
import Link from "next/link";

async function EditProduct({ params }) {
  const id = (await params).id;
  const response = await getProductById(id);
  const categoriesResponse = await getCategories();
  return (
    <>
      <div className="card-header flex justify-between items-center pb-5 mb-5 border-b-2 ">
        <h1 className="text-2xl font-bold">
          Edit <span className="text-blue-800 dark:text-blue-500">{response.data.name}</span>
        </h1>
        <Link
          href="/product-management"
          className="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-800 dark:hover:bg-blue-900 dark:focus:ring-blue-900"
        >
          Back to Product List
        </Link>
      </div>
      <div className="card-body">
        <div className="py-4 mx-auto">
          <ProductForm product={response.data} categories={ categoriesResponse.data } />
        </div>
      </div>
    </>
  );
}

export default EditProduct;
