function ProductsLayout({ children }) {
  return (
    <div className="container max-w-screen-xl mx-auto p-4">
      <h1 className="mb-5 text-2xl font-semibold">Products Page</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {children}  
      </div>
    </div>
  );
}

export default ProductsLayout;
