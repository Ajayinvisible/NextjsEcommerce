import Image from "next/image";
import Link from "next/link";
import { FaEdit } from "react-icons/fa";
import { FaRegImage } from "react-icons/fa6";
import { IoCog, IoTrashSharp } from "react-icons/io5";
import noImage from "../../assets/images/no-image.png"; 

function ProductTable({ products }) {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              S.N
            </th>
            <th scope="col" width="8%" className="px-6 py-3">
              <FaRegImage className="w-4 h-4" />
            </th>
            <th scope="col" width="25%" className="px-6 py-3">
              Product name
            </th>
            <th scope="col" className="px-6 py-3">
              Brand
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Created At
            </th>
            <th scope="col" className="px-6 py-3 flex justify-center">
              <IoCog className="w-5 h-5" />
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr
              scope="row"
              key={index}
              className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-500 border-gray-200"
            >
              <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {index + 1}
              </th>
              <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <Image
                  src={product?.imageUrls[0] ? product.imageUrls[0] : noImage}
                  alt={product.name}
                  width={60}
                  height={60}
                  className="rounded-lg w-[60px] h-[60px] object-cover shadow-lg border-2 border-gray-600 dark:border-gray-300"
                />
              </th>
              <th className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                {product.name}
              </th>
              <td className="px-6 py-4">{product.brand}</td>
              <td className="px-6 py-4">{product.category}</td>
              <td className="px-6 py-4">Rs : {product.price}</td>
              <td className="px-6 py-4">{product.createdAt}</td>
              <td className="px-6 py-4">
                <div className="flex gap-2">
                  <Link
                    href={`/product-management/${product.id}/edit`}
                    className="p-3 text-xs font-medium flex justify-center items-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    <FaEdit className="inline-block" />
                  </Link>
                  <button className="p-3 text-xs font-medium flex justify-center items-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-700">
                    <IoTrashSharp className="inline-block" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
