import Link from "next/link";

function ProductsCard({ product }) {
  return (
    <>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 ease-in-out duration-300">
        <Link href={`/products/${product.id}`}>
          {/* <Image
                  className="rounded-t-lg"
                  // src={product.imageUrls[0]}
                  alt={product.name}
                /> */}
        </Link>
        <div className="p-5">
          <div className="flex items-center justify-between mb-2">
            <span className="bg-blue-100 text-blue-800 text-xs font-medium w-24 me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300">
              Rs : {product.price}
            </span>
            <span className="bg-blue-100 text-green-800 text-xs font-medium w-24 me-2 px-2.5 py-0.5 rounded-sm dark:bg-green-900 dark:text-green-300 truncate">
              {product.brand}
            </span>
            <span className="bg-blue-100 text-yellow-800 text-xs font-medium w-24 me-2 px-2.5 py-0.5 rounded-sm dark:bg-yellow-900 dark:text-yellow-300">
              {product.category}
            </span>
          </div>
          <Link href={`/products/${product.id}`}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white truncate">
              {product.name}
            </h5>
          </Link>

          <Link
            href={`/products/${product.id}`}
            className="w-[74%] inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
          </Link>
          <button className="ms-4 w-[19%]  px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
            &hearts;
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductsCard;
