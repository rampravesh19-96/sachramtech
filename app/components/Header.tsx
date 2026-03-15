import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo-white.svg"; // your logo file

const Header = () => {
  return (
    <header className="bg-blue-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <div className="flex items-center space-x-2">
          <Image src={logo} alt="Sachram Technologies" width={50} height={50} />
         <span className="hidden lg:inline font-bold text-xl">
  Sachram Technologies
</span>
        </div>
        <nav className="space-x-6">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;