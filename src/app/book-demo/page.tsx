import Footer from "@/components/Footer";
import BookDemoClient from "@/components/BookDemoClient";
import Link from "next/link";
import Image from "next/image";

export default function BookDemoPage() {
  return (
    <div>
      <header className="fixed w-full top-0 z-50 bg-black/20 backdrop-blur-xl border-b border-white/10 shadow-lg">
            <nav className="container mx-auto flex justify-between items-center py-5 px-6">
                <Link href="#beranda" className="flex items-center gap-2">
                    <Image src="/logo.svg" alt="MelekAI Logo" className="h-10 w-auto" width={120} height={40} priority />
                </Link>
                <ul className="hidden md:flex gap-10 text-white/90 font-medium">
                    <li><Link href="/" className="hover:text-[#a529bb] transition-all duration-300 hover:scale-105">Beranda</Link></li>
                    <li><Link href="#solusi" className="hover:text-[#a529bb] transition-all duration-300 hover:scale-105">Solusi</Link></li>
                    <li><Link href="/pricing" className="hover:text-[#a529bb] transition-all duration-300 hover:scale-105">Harga</Link></li>
                    <li><Link href="#kontak" className="hover:text-[#a529bb] transition-all duration-300 hover:scale-105">Kontak</Link></li>
                </ul>
                <Link href="/api/auth/login?post_login_redirect_url=/dashboard" className="bg-gradient-to-r from-[#a529bb] to-[#531e4c] text-white font-bold py-3 px-8 rounded-full shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 text-sm uppercase backdrop-blur-sm">
                    Mulai Sekarang
                </Link>
            </nav>
        </header>
        <BookDemoClient />
      <Footer />
    </div>
  );
}
