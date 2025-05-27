"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiFillProduct } from "react-icons/ai";
import { FaUsersGear } from "react-icons/fa6";
import { RiDashboardFill } from "react-icons/ri";

const sidebarMenu = [
  {
    label: "Dashboard",
    route: "/dashboard",
    icon: <RiDashboardFill className="w-5 h-5" />,
  },
  {
    label: "User Management",
    route: "/user-management",
    icon: <FaUsersGear className="w-5 h-5" />,
  },
  {
    label: "Product Management",
    route: "/product-management",
    icon: <AiFillProduct className="w-5 h-5" />,
  },
];
function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside
      id="default-sidebar"
      className="sticky col-span-2 top-20 left-0 z-20 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 shadow-lg"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-900">
        <ul className="space-y-2 font-medium">
          {sidebarMenu.map((menu, index) => {
            const isActive = pathname == menu.route;
            return (
              <li key={index}>
                <Link
                  href={menu.route}
                  className={`${isActive ? "bg-slate-300 dark:bg-slate-600" : ""} flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-slate-300 dark:hover:bg-slate-600 group `}
                >
                  {menu.icon}
                  <span className="ms-3">{menu.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}

export default AdminSidebar;
