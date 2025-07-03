'use client';

import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { Sparkles, Menu, X } from 'lucide-react';
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

type Props = {
  user: {
    email?: string;
  } | null;
};

export default function Navbar({ user }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b border-white/10">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#a529bb] to-[#531e4c] flex items-center justify-center">
            <Sparkles size={16} className="text-white" />
          </div>
          <Link href="#beranda" className="flex items-center gap-2">
              <Image src="/logo.svg" alt="MelekAI Logo" className="h-10 w-auto" width={120} height={40} priority />
          </Link>
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation Links */}
        <ul className={`md:flex flex-col md:flex-row absolute md:static top-full left-0 w-full md:w-auto bg-[#111827] md:bg-transparent px-6 py-4 md:p-0 space-y-4 md:space-y-0 md:space-x-12 text-sm transition-all duration-300 ease-in-out ${menuOpen ? 'flex' : 'hidden'}`}>
          <li><Link href="/" className="text-white hover:text-[#a529bb]">Beranda</Link></li>
          <li><Link href="/pricing" className="text-white hover:text-[#a529bb]">Harga</Link></li>
          <li><Link href="/contact" className="text-white hover:text-[#a529bb]">Kontak</Link></li>
        </ul>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          {!user ? (
            <>
              <LoginLink className="text-white hover:text-white transition-colors">Masuk</LoginLink>
              <RegisterLink className="text-white px-6 py-2 rounded-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105 font-medium" style={{ backgroundColor: '#a529bb' }}>
                Mulai Sekarang
              </RegisterLink>
            </>
          ) : (
            <>
              <p className="text-sm text-[#c0c0c0]">Selamat datang, {user.email}</p>
              <Link href='/dashboard' className="text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#531e4c' }}>
                Dashboard
              </Link>
              <LogoutLink className="text-red-400 px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
                Keluar
              </LogoutLink>
            </>
          )}
        </div>
      </nav>

      {/* Mobile Auth Buttons */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-3">
          {!user ? (
            <>
              <LoginLink className="text-white">Masuk</LoginLink>
              <RegisterLink className="text-white px-6 py-2 rounded-lg text-center font-medium" style={{ backgroundColor: '#a529bb' }}>
                Mulai Sekarang
              </RegisterLink>
            </>
          ) : (
            <>
              <p className="text-sm text-[#c0c0c0]">Selamat datang, {user.email}</p>
              <Link href='/dashboard' className="text-white px-4 py-2 rounded-lg text-center" style={{ backgroundColor: '#531e4c' }}>
                Dashboard
              </Link>
              <LogoutLink className="text-red-400 px-4 py-2 rounded-lg text-center">
                Keluar
              </LogoutLink>
            </>
          )}
        </div>
      )}
    </header>
  );
}
