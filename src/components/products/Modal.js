import { deleteProduct } from "@/api/products/productsApi";
import { setDeleteStatus } from "@/redux/product/productSlice";
import { useState } from "react";
import { RiErrorWarningLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import Spinner from "../Spinner";

function DeleteProductModal({
  showModal = false,
  setShowModal,
  product,
  setSelectedProduct,
}) {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  function confirmDelete() {
    setLoading(true);
    deleteProduct(product?.id)
      .then(() => {
        toast.success("Product deleted successfully!");
        dispatch(setDeleteStatus("success"));
      })
      .catch((error) => {
        toast.error(error.response?.data);
      })
      .finally(() => {
        setLoading(false);
        setShowModal(false);
        setSelectedProduct(null);
      });
  }
  return (
    <div className={showModal ? "blocak" : "hidden"}>
      <div className="w-full h-svh flex items-center justify-center fixed top-0 left-0 bg-[#00000033] z-50">
        <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
          <button
            onClick={() => setShowModal(false)}
            className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <RxCross2 className="w-5 h-5" />
            <span className="sr-only">Close modal</span>
          </button>
          <div className="p-10 md:p-10 text-center">
            <RiErrorWarningLine className="mx-auto mb-4 text-red-600 w-12 h-12 dark:text-red-400" />

            <h3 className="mb-3 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this product?
            </h3>
            <h3 className="mb-5 text-lg font-bold text-blue-800 dark:text-blue-400 capitalize">
              {product?.name}
            </h3>
            <button
              disabled={loading}
              onClick={confirmDelete}
              className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center disabled:opacity-70"
            >
              {`Yes, I'm sure`}
              {loading && <Spinner className="w-4 h-4 ml-2" />}
            </button>
            <button
              onClick={() => setShowModal(false)}
              className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              No, cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteProductModal;
