"use client";
import { getProductByUser } from "@/api/products/productsApi";
import ProductTable from "@/components/products/Table";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function ProductManagement() {
  const [loading,setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductByUser()
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        toast.error(
          error?.response?.data || "Failed to fetch products"
        );
      }).finally(() => {
        setLoading(false);
      });
  });

  return (
    <>
      <div className="card-header flex justify-between items-center pb-5 mb-5 border-b-2 ">
        <h1 className="text-2xl font-bold">Product Management</h1>
        <Link
          href="/product-management/create"
          className="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add New Product
        </Link>
      </div>
      <div className="card-body">
        {loading ? <div>Loading...</div> : <ProductTable products={products} />}
      </div>
    </>
  );
}

export default ProductManagement;
