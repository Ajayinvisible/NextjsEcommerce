import logo from "@/assets/images/logo.png";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import config from "@/config";
import AppProvider from "@/redux/provider";
import { Geist, Geist_Mono } from "next/font/google";
import MainLayouts from "../layouts/MainLayouts";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: config.appName,
    template: `${config.appName} - %s`,
  },
  description: "Your one-stop shop for all your needs",
  keywords: "Your one-stop shop for all your needs",
  openGraph: {
    title: config.appName,
    description: "Your one-stop shop for all your needs",
    image: logo,
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppProvider>
          <MainLayouts>
          <Header />
          {children}
          <Footer />
          </MainLayouts>
        </AppProvider>
      </body>
    </html>
  );
}
