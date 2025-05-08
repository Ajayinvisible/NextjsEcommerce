import config from "@/config";
import logo from "@/assets/images/logo.png";
// This is a server component
export const metadata = {
  title: "About us",
  description: "Your one-stop shop for all your needs",
  keywords: "Your one-stop shop for all your needs",
  openGraph: {
    title: config.appName,
    description: "Your one-stop shop for all your needs",
    image: logo,
    type: "website",
  },
};
function AboutPage() {
  return <h1>Hello From About Us Page</h1>;
}

export default AboutPage;
