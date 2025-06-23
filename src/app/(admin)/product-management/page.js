"use client";
import { getAllProducts, getProductByUser } from "@/api/products/productsApi";
import ProductTable from "@/components/products/Table";
import { setDeleteStatus } from "@/redux/product/productSlice";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

function ProductManagement() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const deleteStatus = useSelector((state) => state.product);

  const dispatch = useDispatch();

  useEffect(() => {
    getProductByUser()
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        toast.error(error?.response?.data || "Failed to fetch products");
      })
      .finally(() => {
        setLoading(false);
        dispatch(setDeleteStatus(null));
      });
  }, [deleteStatus, dispatch]);

  function fetchAllProducts() {
    setLoading(true)
    getAllProducts()
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        toast.error(error?.response?.data || "Failed to fetch products");
      })
      .finally(() => {
        setLoading(false);
        dispatch(setDeleteStatus(null));
      });
  }

  return (
    <>
      <div className="card-header flex justify-between items-center pb-5 mb-5 border-b-2 ">
        <h1 className="text-2xl font-bold">Product Management</h1>
        <div className="flex gap-2">
          <button
            onClick={fetchAllProducts}
            className="px-3 py-2 text-xs font-medium text-center text-white bg-slate-700 rounded-lg hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800"
          >
            View All Products
          </button>
          <Link
            href="/product-management/create"
            className="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add New Product
          </Link>
        </div>
      </div>
      <div className="card-body">
        {loading ? <div>Loading...</div> : <ProductTable products={products} />}
      </div>
    </>
  );
}

export default ProductManagement;
