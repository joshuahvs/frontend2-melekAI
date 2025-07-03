// components/Navbar.tsx
import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Sparkles } from 'lucide-react';
import Link from "next/link";

export default async function Navbar() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b border-white/10">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#a529bb] to-[#531e4c] flex items-center justify-center">
            <Sparkles size={16} className="text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white">Melek<span style={{ color: '#a529bb' }}>AI</span></h1>
        </div>
        <div>
          <ul className="hidden md:flex items-center gap-12 text-sm">
            <li><Link href="/" className="text-white hover:text-[#a529bb] transition-colors">Beranda</Link></li>
            <li><Link href="/features" className="text-white hover:text-[#a529bb] transition-colors">Fitur</Link></li>
            <li><Link href="/pricing" className="text-white hover:text-[#a529bb] transition-colors">Harga</Link></li>
            <li><Link href="/blog" className="text-white hover:text-[#a529bb] transition-colors">Blog</Link></li>
            <li><Link href="/contact" className="text-white hover:text-[#a529bb] transition-colors">Kontak</Link></li>
          </ul>
        </div>
        <div className="flex items-center gap-4">
          {!user ? (
            <>
              <LoginLink className="text-white hover:text-white transition-colors">Masuk</LoginLink>
              <RegisterLink className="text-white px-6 py-2 rounded-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105 font-medium" style={{ backgroundColor: '#a529bb' }}>
                Mulai Sekarang
              </RegisterLink>
            </>
          ) : (
            <div className="flex items-center gap-4">
              <p className="text-sm text-[#c0c0c0]">Selamat datang, {user.email}</p>
              <Link href='/dashboard' className="text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#531e4c' }}>
                Dashboard
              </Link>
              <LogoutLink className="text-red-400 px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
                Keluar
              </LogoutLink>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}