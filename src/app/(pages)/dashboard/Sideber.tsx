"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileSignature, ShoppingBag, List,Package } from "lucide-react";



const sidebarItems = [
  { name: "Products", href: "dashboard/product", icon: ShoppingBag },
  { name: "Add Product", href: "dashboard/add-product", icon: FileSignature },
  { name: "Categories", href: "/categories", icon: List },
  { name: "Orders", href: "/orders", icon: Package },
];

export default function Sidebar() {
  const pathname = usePathname(); 

 
  
// Dynamically fetch the current path

  // Helper function to check if a route is active (supports sub-routes)
  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(href);
  };

  return (
    <aside
      id="logo-sidebar"
      className="h-screen w-64 pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
        <h2 className="mb-5 text-2xl font-semibold text-gray-900 dark:text-white ml-2">
          Loxe-Bloom
        </h2>
        <ul className="space-y-2 font-medium">
          {sidebarItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`flex items-center p-2 rounded-lg group ${
                  isActive(item.href)
                    ? "bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white"
                    : "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                <item.icon
                  className={`w-5 h-5 transition duration-75 ${
                    isActive(item.href)
                      ? "text-gray-900 dark:text-white"
                      : "text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  }`}
                />
                <span className="ml-3">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
