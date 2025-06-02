"use client";
import { createProduct, updateProduct } from "@/api/products/productsApi";
import Spinner from "@/components/Spinner";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoCloudUploadOutline } from "react-icons/io5";
import { toast } from "react-toastify";

function ProductForm({ id, product, categories }) {
  const [loading, setLoading] = useState(false);
  const [localImageUrls, setLocalImageUrls] = useState([]);
  const [productImages, setProductImages] = useState([]);

  function prepareData(data) {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("price", data.price);
    formData.append("brand", data.brand);
    formData.append("category", data.category);

    if (data.description) {
      formData.append("description", data.description);
    }

    productImages.map((image) => {
      formData.append("images", image);
    });

    return formData;
  }

  const { register, handleSubmit, reset } = useForm({
    values: {
      name: product?.name || "",
      price: product?.price || "",
      brand: product?.brand || "",
      category: product?.category || "",
      description: product?.description || "",
    },
  });

  async function submitForm(data) {
    setLoading(true);
    const formData = prepareData(data);
    try {
      if (product) {
        await updateProduct(id, formData);
        toast.success("Product updated successfully");
        return;
      }
      await createProduct(formData);
      reset();
      toast.success("Product created successfully");
    } catch (error) {
      toast.error("Error creating product:", error.response?.data);
    } finally {
      setLoading(false);
      setLocalImageUrls([]);
      setProductImages([]);
    }
  }
  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <div className="w-full">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Product Name
          </label>
          <input
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            placeholder="Product name"
            {...register("name")}
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="price"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Price
          </label>
          <input
            type="number"
            id="price"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="$ 999"
            required
            {...register("price")}
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="brand"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Brand
          </label>
          <input
            type="text"
            id="brand"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Product brand"
            required
            {...register("brand")}
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="category"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Category
          </label>
          <input
            type="text"
            id="category"
            list="categories"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            placeholder="Product category"
            {...register("category")}
          />
          <datalist id="categories">
            {categories?.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </datalist>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Description
          </label>
          <textarea
            id="description"
            rows={8}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Your description here"
            {...register("description")}
          />
        </div>
        <div className="sm:col-span-2 flex items-center justify-center w-full">
          <label
            htmlFor="images"
            className="flex flex-col items-center justify-center w-full h-30 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 "
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <IoCloudUploadOutline className="w-6 h-6 text-gray-500 dark:text-gray-400" />
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                PNG, JPG, JPEG, GIF
              </p>
            </div>
            <input
              accept=".png, .jpg, .jpeg, .gif"
              id="images"
              type="file"
              className="hidden"
              multiple
              onChange={(e) => {
                const files = [];
                const urls = [];
                Array.from(e.target.files).map((file) => {
                  files.push(file);
                  urls.push(URL.createObjectURL(file));
                });
                setLocalImageUrls(urls);
                setProductImages(files);
              }}
            />
          </label>
        </div>
        {localImageUrls.length > 0 && (
          <div className="mt-4 grid grid-cols-12 gap-4 sm:col-span-2">
            {localImageUrls.map((url, index) => (
              <Image
                key={index}
                src={url}
                width={100}
                height={100}
                alt={`Uploaded preview ${index + 1}`}
                className="w-full h-24 object-cover rounded-lg border-2 border-slate-800"
              />
            ))}
          </div>
        )}
      </div>
      <button
        type="submit"
        className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-600 dark:focus:ring-blue-600 hover:bg-blue-800 disabled:opacity-70"
        disabled={loading}
      >
        {product ? "Edit" : "Add"} product
        {loading && <Spinner />}
      </button>
    </form>
  );
}

export default ProductForm;
