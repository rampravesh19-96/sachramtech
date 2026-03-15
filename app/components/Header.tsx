// app/components/Header.tsx
"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import logo from "../../public/logo-white.svg";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";

  const handleScroll = (id: string) => {
    if (isHome) {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      // navigate to homepage with hash
      router.push(`/#${id}`);
    }
  };

  return (
    <header className="bg-blue-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <Link href="/" className="flex items-center space-x-2">
          <Image src={logo} alt="Sachram Technologies" width={50} height={50} />
          <span className="hidden lg:inline font-bold text-xl">Sachram Technologies</span>
        </Link>
        <nav className="space-x-4">
          <button onClick={() => handleScroll("hero")} className="hover:underline">Home</button>
          <button onClick={() => handleScroll("services")} className="hover:underline">Services</button>
          <button onClick={() => handleScroll("contact")} className="hover:underline">Contact</button>
          <Link href="/policy" className="hover:underline">Policy</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;