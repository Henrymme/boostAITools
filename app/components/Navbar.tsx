"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { X, Menu } from "lucide-react"; // Import icon X và Menu

export const navigationItems = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
  { name: "Ranking", href: "/ranking" },
  { name: "Guides", href: "/guides" },
];

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="max-w-7xl mx-auto px-4 md:px-8 py-5 grid grid-cols-12 bg-gray-900 text-white relative">
      {/* Logo */}
      <div className="col-span-6 flex md:col-span-3">
        <Link href="/">
          <h1 className="text-2xl font-bold">
            Hello
            <span className="text-blue-400">World</span>
          </h1>
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex justify-center items-center col-span-6">
        <NavigationMenu>
          <NavigationMenuList className="flex gap-6">
            {navigationItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`px-4 py-2 transition-colors duration-200 ${
                      pathname === item.href ? "text-[#00ADB5]" : "hover:text-[#00ADB5]"
                    }`}
                  >
                    {item.name}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center justify-end col-span-6">
        <button
          className="text-white focus:outline-none text-2xl pr-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-11/12 bg-gray-800 text-white p-4 rounded-xl shadow-lg flex flex-col items-center gap-4 backdrop-blur-md">
          {navigationItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="py-2 text-lg hover:text-blue-400 w-full text-center transition"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
