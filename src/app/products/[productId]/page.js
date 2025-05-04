import BackButton from "../_components/BackButton";
import Redirect from "../_components/Redirect";

async function ProductByID({ params }) {
  const productId = await params.productId;
  // Fetch product data using the productId
  const products = [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    { id: 3, name: "Product 3" },
    { id: 4, name: "Product 4" },
    { id: 5, name: "Product 5" },
  ];
  const product = products.find((product) => product.id == productId);
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <div className="flex flex-col items-start  justify-center my-5">
        <h1 className="text-3xl font-bold text-blue-500">Product Details</h1>
        <div className="mt-4 p-4 border rounded-md shadow-md ">
          <h2 className="text-xl font-semibold">{product.name}</h2>
          <p className="mt-2 text-gray-600">Product ID: {product.id}</p>
        </div>
      </div>

      <Redirect />
      <BackButton />
    </>
  );
}

export default ProductByID;
