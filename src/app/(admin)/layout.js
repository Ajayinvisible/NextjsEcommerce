"use client";
import AdminPage from "@/components/AdminPage";
import AdminSidebar from "@/components/AdminSidebar";
import { allowedAdminRoles } from "@/helpers/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function AdminLayout({ children }) {
  const { user } = useSelector((state) => state.auth);
  const router = useRouter();

  

  useEffect(() => {
    if (!user) router.push("/login");
    // Check if the user has the required roles
    const isAllowed = allowedAdminRoles(user?.roles);
    if (!isAllowed) router.push("/login");
  }, [router, user]);

  return (
    <div className="grid grid-cols-12 bg-white dark:bg-slate-600 min-h-screen">
      <AdminSidebar />
      <AdminPage>{children}</AdminPage>
    </div>
  );
}

export default AdminLayout;
