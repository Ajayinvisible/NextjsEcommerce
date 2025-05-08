import BackButton from "./_components/BackButton";
import config from "@/config";
import logo from "@/assets/images/logo.png"

export const metadata = {
  title: 'Products',
  description: "Your one-stop shop for all your needs",
  keywords: "Your one-stop shop for all your needs",
  openGraph: {
    title: config.appName,
    description: "Your one-stop shop for all your needs",
    image: logo,
    type: "website",
  },
};

function ProductsLayout({ children }) {
  return (
    <div className="container max-w-screen-xl mx-auto p-4">
      <div className="flex justify-between items-center my-5">
        <h1 className="text-2xl font-semibold">Products Page</h1>
        <BackButton />
      </div>
      {children}
    </div>
  );
}

export default ProductsLayout;
