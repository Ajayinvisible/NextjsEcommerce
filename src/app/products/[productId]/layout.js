function ProductLayout({ children }) {
  return (
    <div>
      {children}
      <div className="bg-slate-700 text-white font-bold py-3 pl-5 mt-5 rounded">Related Products</div>
    </div>
  );
}

export default ProductLayout;
