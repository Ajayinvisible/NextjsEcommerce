"use client";
import Image from "next/image";
import sideImage from "@/assets/images/auth-back.jpg";
import background from "@/assets/images/bg.png";
import { ToastContainer } from "react-toastify";

function AuthLayout({ children }) {
  return (
    <section className="flex justify-center my-20">
      <div>
        <Image
          src={background}
          height={1080}
          width={1920}
          alt="background"
          className="object-cover w-full h-svh fixed top-0 left-0 -z-1 opacity-75"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 w-full md:w-1/2 shadow-xl min-h-[65vh] shadow-blue-200 rounded-xl overflow-hidden bg-white">
        {children}
        <Image
          src={sideImage}
          width={500}
          height={500}
          alt="background"
          className="w-full h-full object-cover hidden md:block"
        />
      </div>
      <ToastContainer />
    </section>
  );
}

export default AuthLayout;
