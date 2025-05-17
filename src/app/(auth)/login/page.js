"use client";
import { loginUser } from "@/redux/auth/authAction";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  FaEye,
  FaEyeSlash,
  FaFacebook,
  FaGithub,
  FaGooglePlus,
} from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { user, error, loading } = useSelector((state) => state);

  const router = useRouter();

  const dispatch = useDispatch();

  function submitForm(data) {
    dispatch(loginUser(data));
  }

  useEffect(() => {
    if (user) return router.push("/");
    if (error) toast.error(error);
  }, [user, error]);

  return (
    <>
      <div className="flex flex-col justify-center items-center p-13">
        <h1 className="pb-2 border-b-4 border-slate-700 text-2xl font-bold px-5 mb-5">
          User Login
        </h1>
        <form onSubmit={handleSubmit(submitForm)} className="w-full">
          <div className="mb-4">
            <label htmlFor="email" className="text-blue-900 text-lg font-bold">
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: "Email is required",
              })}
              className="border w-full p-2 mt-2 rounded"
            />
            <small className="text-red-500 w-full">
              {errors.email?.message}
            </small>
          </div>
          <div className="mb-4 relative">
            <label
              htmlFor="password"
              className="text-blue-900 text-lg font-bold"
            >
              Password
            </label>
            <button
              onClick={() => {
                setShowPassword(!showPassword);
              }}
              className="absolute top-12 right-5"
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              {...register("password", { required: "Password is required" })}
              className="border w-full p-2 mt-2 rounded"
            />
            <small className="text-red-500 w-full">
              {errors.password?.message}
            </small>
          </div>
          <input
            type="submit"
            disabled={loading}
            value={loading ? "submitting..." : "Login"}
            className="bg-green-600 w-full py-3 rounded font-bold text-white cursor-pointer disabled:opacity-50"
          />
          <div className="border-2 border-slate-700 mt-4"></div>
          <ul className="mt-4 flex justify-center gap-3">
            <li className="border p-3 rounded-lg bg-slate-700 hover:bg-slate-800 text-white">
              <Link href="" className="text-2xl ">
                <FaFacebook />
              </Link>
            </li>
            <li className="border p-3 rounded-lg bg-slate-700 hover:bg-slate-800 text-white">
              <Link href="" className="text-2xl ">
                <FaGooglePlus />
              </Link>
            </li>
            <li className="border p-3 rounded-lg bg-slate-700 hover:bg-slate-800 text-white">
              <Link href="" className="text-2xl ">
                <FaGithub />
              </Link>
            </li>
          </ul>
        </form>
      </div>
    </>
  );
}

export default LoginPage;
