import Image from "next/image";
import Link from "next/link";

function ProductsCard({ product }) {
  return (
    <>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm ease-in-out duration-300">
        <Link href={`/products/${product.id}`}>
          <Image
            src={product.imageUrls[0] ?? placeholder}
            alt={product.name}
            width={300}
            height={200}
            className="rounded-t-lg h-[200px] w-full object-cover border-b-2 border-slate-800"
          />
        </Link>
        <div className="p-5">
          <div className="flex items-center justify-between mb-2">
            <span className="bg-blue-100 text-blue-800 text-xs font-medium w-24 me-2 px-2.5 py-0.5 rounded-sm truncate">
              Rs : {product.price}
            </span>
            <span className="bg-blue-100 text-green-800 text-xs font-medium w-24 me-2 px-2.5 py-0.5 rounded-sm truncate">
              {product.brand}
            </span>
            <span className="bg-blue-100 text-yellow-800 text-xs font-medium w-24 me-2 px-2.5 py-0.5 rounded-sm truncate">
              {product.category}
            </span>
          </div>
          <Link href={`/products/${product.id}`}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 truncate">
              {product.name}
            </h5>
          </Link>

          <Link
            href={`/products/${product.id}`}
            className="w-[74%] inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Read more
          </Link>
          <button className="ms-2 w-[22%]  px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
            &hearts;
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductsCard;
