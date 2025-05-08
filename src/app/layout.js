import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import config from "@/config";
import logo  from '@/assets/images/logo.png';

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
    type: "website"
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
