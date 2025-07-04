// components/Footer.tsx
import { Sparkles, Mail, Phone, MapPin, Globe, Github, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer id="kontak" className="relative bg-gradient-to-b from-black/30 to-black/80 backdrop-blur-xl border-t border-white/10">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#a529bb]/5 via-transparent to-[#a529bb]/5 pointer-events-none"></div>
        
        <div className="relative container mx-auto px-6">
            {/* Main Footer Content */}
            <div className="pt-20 pb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Company Info */}
                    <div className="lg:col-span-2">
                        <Link href="#beranda" className="flex items-center gap-2 mb-6">
                            <Image src="/logo.svg" alt="MelekAI Logo" className="h-10 w-auto" width={120} height={40} />
                        </Link>
                        <p className="text-[#c0c0c0] text-lg leading-relaxed mb-6 max-w-md">
                            Platform AI terdepan untuk Enterprise & UMKM Digital Indonesia. Wujudkan visi AI bisnis Anda bersama kami.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#a529bb]/20 hover:scale-110 transition-all duration-300">
                                <span className="text-xl">📧</span>
                            </a>
                            <a href="#" className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#a529bb]/20 hover:scale-110 transition-all duration-300">
                                <span className="text-xl">💬</span>
                            </a>
                            <a href="#" className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#a529bb]/20 hover:scale-110 transition-all duration-300">
                                <span className="text-xl">🔗</span>
                            </a>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white relative">
                            Layanan
                            <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-[#a529bb] to-transparent"></div>
                        </h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-[#c0c0c0] hover:text-[#a529bb] transition-colors duration-300 hover:translate-x-1 inline-block">Data Processing & Labeling</a></li>
                            <li><a href="#" className="text-[#c0c0c0] hover:text-[#a529bb] transition-colors duration-300 hover:translate-x-1 inline-block">Custom AI Development</a></li>
                            <li><a href="#" className="text-[#c0c0c0] hover:text-[#a529bb] transition-colors duration-300 hover:translate-x-1 inline-block">AI Integration Services</a></li>
                            <li><a href="#" className="text-[#c0c0c0] hover:text-[#a529bb] transition-colors duration-300 hover:translate-x-1 inline-block">Konsultasi AI</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white relative">
                            Hubungi Kami
                            <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-[#a529bb] to-transparent"></div>
                        </h3>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-[#a529bb]/20 rounded-full flex items-center justify-center">
                                    <span className="text-sm">📧</span>
                                </div>
                                <div>
                                    <p className="text-[#c0c0c0] text-sm">Email</p>
                                    <p className="text-white">hello@melekai.id</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-[#a529bb]/20 rounded-full flex items-center justify-center">
                                    <span className="text-sm">📞</span>
                                </div>
                                <div>
                                    <p className="text-[#c0c0c0] text-sm">Telepon</p>
                                    <p className="text-white">+62 21 5555 0123</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-[#a529bb]/20 rounded-full flex items-center justify-center">
                                    <span className="text-sm">📍</span>
                                </div>
                                <div>
                                    <p className="text-[#c0c0c0] text-sm">Lokasi</p>
                                    <p className="text-white">Jakarta, Indonesia</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Newsletter Section */}
            <div className="py-12 border-t border-white/10">
                <div className="max-w-2xl mx-auto text-center">
                    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-[#a529bb] bg-clip-text text-transparent">
                        Dapatkan Update Terbaru
                    </h3>
                    <p className="text-[#c0c0c0] mb-6">Berlangganan newsletter untuk mendapatkan tips AI dan update produk terbaru</p>
                    <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                        <input 
                            type="email" 
                            placeholder="Masukkan email Anda..."
                            className="flex-1 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-white/50 focus:outline-none focus:border-[#a529bb] focus:ring-2 focus:ring-[#a529bb]/30 transition-all duration-300"
                        />
                        <button className="bg-gradient-to-r from-[#a529bb] to-[#531e4c] text-white font-bold py-3 px-8 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg">
                            Berlangganan
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="py-8 border-t border-white/10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-[#888994] text-sm">
                        © 2025 MelekAI. All rights reserved.
                    </div>
                    <div className="flex gap-6 text-sm">
                        <a href="#" className="text-[#888994] hover:text-[#a529bb] transition-colors duration-300">Privacy Policy</a>
                        <a href="#" className="text-[#888994] hover:text-[#a529bb] transition-colors duration-300">Terms of Service</a>
                        <a href="#" className="text-[#888994] hover:text-[#a529bb] transition-colors duration-300">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  );
}