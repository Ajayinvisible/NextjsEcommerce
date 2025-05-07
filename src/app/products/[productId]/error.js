"use client";

import BackButton from "../_components/BackButton";

function ProductByIdError({ error }) {
  return (
    <div className="flex flex-col justify-center w-full">
      <h1 className="text-xl text-red-700">{error.message}</h1>
    </div>
  );
}

export default ProductByIdError;
