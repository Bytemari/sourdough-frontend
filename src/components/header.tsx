"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Calculator", path: "/calculator" },
    { name: "Recipes", path: "/recipes" },
    { name: "Starter", path: "/starter" },
    { name: "About Hydration", path: "/hydration" },
  ];

  return (
    <nav className="flex space-x-6 mt-4 mr-4 justify-end">
      {menuItems.map((item) => (
        <Link key={item.name} href={item.path}>
          <button
            className={`px-4 py-2 rounded-md font-semibold transition ${
              pathname === item.path
                ? "bg-yellow-500 text-black"
                : "text-gray-800 hover:bg-gray-300"
            }`}
          >
            {item.name}
          </button>
        </Link>
      ))}
    </nav>
  );
}
