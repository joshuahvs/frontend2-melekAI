"use client";
import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import Navbar from '@/components/NavbarClient';


// Floating Particles Component
const Particles = () => {
    useEffect(() => {
        const particleCount = 30;
        const container = document.getElementById('particles');
        if (!container) return;
        container.innerHTML = '';
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 8 + 's';
            particle.style.animationDuration = (Math.random() * 3 + 5) + 's';
            container.appendChild(particle);
        }
    }, []);
    return (
        <div
            id="particles"
            className="fixed top-0 left-0 w-full h-full z-[1] pointer-events-none"
        >
            {/* Particles will be injected here */}
            <style>{`
                .particle {
                    position: absolute;
                    width: 2px;
                    height: 2px;
                    background: rgba(165,41,187,0.5);
                    border-radius: 50%;
                    animation: float 8s infinite ease-in-out;
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 1; }
                    50% { transform: translateY(-20px) rotate(180deg); opacity: 0.5; }
                }
            `}</style>
        </div>
    );
};

export default function HomePage() {
    return (
        <div style={{ backgroundColor: '#000000' }} className="text-white min-h-screen relative overflow-hidden">
            {/* Gradient background accents */}
            <div className="pointer-events-none select-none absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#a529bb]/60 via-transparent to-transparent rounded-full blur-3xl z-0" />
            <div className="pointer-events-none select-none absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tl from-[#a529bb]/60 via-transparent to-transparent rounded-full blur-3xl z-0" />
            <Particles />
            
            {/* Header/Navbar with Glass Effect */}
            <header className="fixed w-full top-0 z-50 bg-black/20 backdrop-blur-xl border-b border-white/10 shadow-lg">
                <nav className="container mx-auto flex justify-between items-center py-5 px-6">
                    <Link href="#beranda" className="flex items-center gap-2">
                        <Image src="/logo.svg" alt="MelekAI Logo" className="h-10 w-auto" width={120} height={40} priority />
                    </Link>
                    <ul className="hidden md:flex gap-10 text-white/90 font-medium">
                        <li><Link href="#beranda" className="hover:text-[#a529bb] transition-all duration-300 hover:scale-105">Beranda</Link></li>
                        <li><Link href="#solusi" className="hover:text-[#a529bb] transition-all duration-300 hover:scale-105">Solusi</Link></li>
                        <li><Link href="#kontak" className="hover:text-[#a529bb] transition-all duration-300 hover:scale-105">Kontak</Link></li>
                    </ul>
                    <Link href="/api/auth/login?post_login_redirect_url=/dashboard" className="bg-gradient-to-r from-[#a529bb] to-[#531e4c] text-white font-bold py-3 px-8 rounded-full shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 text-sm uppercase backdrop-blur-sm">
                        Mulai Sekarang
                    </Link>
                </nav>
            </header>

            <main className="relative z-10 pt-8">
                {/* Hero Section */}
                <section id="beranda" className="hero text-center py-32 relative">
                    <div className="container mx-auto px-6">
                        <div className="inline-block bg-[#a529bb] bg-opacity-10 border border-[#a529bb]/30 px-5 py-2 rounded-full text-white font-semibold mb-8 animate-pulse">🚀 Solusi AI Terdepan untuk Bisnis Indonesia</div>
                        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-white via-[#a529bb] to-white bg-clip-text text-transparent">Bangun AI Sendiri<br />untuk Bisnis Anda</h1>
                        <p className="text-lg text-[#c0c0c0] max-w-2xl mx-auto mb-10">Kami membantu Enterprise & UMKM Digital mengubah data mentah menjadi AI yang siap diintegrasikan dalam operasional bisnis</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 hero-cta">
                            <a href="#mulai" className="bg-gradient-to-r from-[#a529bb] to-[#531e4c] text-white font-bold py-4 px-10 rounded-full shadow-lg hover:scale-105 transition text-lg">Mulai Gratis</a>
                            <a href="#konsultasi" className="border-2 border-[#a529bb] text-[#a529bb] font-bold py-4 px-10 rounded-full hover:bg-[#a529bb] hover:text-white transition text-lg">Konsultasi Gratis</a>
                        </div>
                        {/* Trust badges removed as requested */}
                    </div>
                </section>

                {/* Features Section */}
                <section id="solusi" className="py-28 features">
                    <div className="container mx-auto px-6">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 bg-gradient-to-r from-white to-[#a529bb] bg-clip-text text-transparent section-title">Solusi Lengkap AI untuk Bisnis</h2>
                        <p className="text-[#c0c0c0] text-lg text-center mb-16 max-w-2xl mx-auto section-subtitle">Dari data mentah hingga AI yang siap digunakan - semua dalam satu platform</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 features-grid">
                            <div className="feature-card bg-white/5 border border-white/10 p-10 rounded-2xl backdrop-blur-md hover:scale-105 transition relative">
                                <div className="feature-icon w-14 h-14 flex items-center justify-center rounded-xl mb-6 text-2xl bg-gradient-to-br from-[#a529bb] to-[#531e4c]">🧠</div>
                                <h3 className="text-xl font-bold mb-3 text-white">Data Processing & Labeling</h3>
                                <p className="text-[#c0c0c0]">Otomatisasi pembersihan dan pelabelan data dengan AI. Mengubah data mentah menjadi dataset berkualitas tinggi yang siap digunakan.</p>
                            </div>
                            <div className="feature-card bg-white/5 border border-white/10 p-10 rounded-2xl backdrop-blur-md hover:scale-105 transition relative">
                                <div className="feature-icon w-14 h-14 flex items-center justify-center rounded-xl mb-6 text-2xl bg-gradient-to-br from-[#a529bb] to-[#531e4c]">⚡</div>
                                <h3 className="text-xl font-bold mb-3 text-white">Custom AI Development</h3>
                                <p className="text-[#c0c0c0]">Membangun model AI khusus sesuai kebutuhan bisnis Anda. Dari chatbot hingga sistem prediksi yang canggih.</p>
                            </div>
                            <div className="feature-card bg-white/5 border border-white/10 p-10 rounded-2xl backdrop-blur-md hover:scale-105 transition relative">
                                <div className="feature-icon w-14 h-14 flex items-center justify-center rounded-xl mb-6 text-2xl bg-gradient-to-br from-[#a529bb] to-[#531e4c]">🔗</div>
                                <h3 className="text-xl font-bold mb-3 text-white">AI Integration Services</h3>
                                <p className="text-[#c0c0c0]">Integrasi seamless AI ke dalam sistem existing Anda. API ready dan dokumentasi lengkap untuk developer.</p>
                            </div>
                            <div className="feature-card bg-white/5 border border-white/10 p-10 rounded-2xl backdrop-blur-md hover:scale-105 transition relative">
                                <div className="feature-icon w-14 h-14 flex items-center justify-center rounded-xl mb-6 text-2xl bg-gradient-to-br from-[#a529bb] to-[#531e4c]">🛡️</div>
                                <h3 className="text-xl font-bold mb-3 text-white">Security & Compliance</h3>
                                <p className="text-[#c0c0c0]">Keamanan data tingkat enterprise dengan compliance terhadap standar industri dan regulasi Indonesia.</p>
                            </div>
                            <div className="feature-card bg-white/5 border border-white/10 p-10 rounded-2xl backdrop-blur-md hover:scale-105 transition relative">
                                <div className="feature-icon w-14 h-14 flex items-center justify-center rounded-xl mb-6 text-2xl bg-gradient-to-br from-[#a529bb] to-[#531e4c]">🎯</div>
                                <h3 className="text-xl font-bold mb-3 text-white">Konsultasi Ahli</h3>
                                <p className="text-[#c0c0c0]">Tim ahli AI siap membantu merancang strategi AI yang tepat untuk mencapai tujuan bisnis Anda.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Use Cases Section */}
                <section id="use-cases" className="py-28 use-cases">
                    <div className="container mx-auto px-6">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 bg-gradient-to-r from-white to-[#a529bb] bg-clip-text text-transparent section-title">Use Cases AI Kami</h2>
                        <p className="text-[#c0c0c0] text-lg text-center mb-16 max-w-2xl mx-auto section-subtitle">Temukan bagaimana MelekAI dapat mengubah bisnis Anda dengan solusi AI yang inovatif dan patuh terhadap regulasi lokal</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 use-cases-grid">
                            <div className="use-case-card bg-white/5 border border-white/10 p-10 rounded-2xl backdrop-blur-md hover:scale-105 transition relative text-center">
                                <h3 className="text-xl font-bold mb-3 text-white">Customer Service AI Agent</h3>
                                <p className="text-[#c0c0c0] mb-4">AI agent yang menjawab ribuan pertanyaan pelanggan dari berbagai kanal (web, WhatsApp, email) secara otomatis, 24/7.</p>
                                <Image src="/book-demo-image.jpg" alt="Contoh Customer Service AI" className="use-case-image mx-auto rounded-lg border border-[#a529bb]/30" width={500} height={300} />
                            </div>
                            <div className="use-case-card bg-white/5 border border-white/10 p-10 rounded-2xl backdrop-blur-md hover:scale-105 transition relative text-center">
                                <h3 className="text-xl font-bold mb-3 text-white">Content Generator Agent</h3>
                                <p className="text-[#c0c0c0] mb-4">AI agent bantu buat caption IG, konten promosi, dan desain visual dari template + tren viral.</p>
                                <Image src="/file.svg" alt="Contoh Content Generator AI" className="use-case-image mx-auto rounded-lg border border-[#a529bb]/30" width={500} height={300} />
                            </div>
                            <div className="use-case-card bg-white/5 border border-white/10 p-10 rounded-2xl backdrop-blur-md hover:scale-105 transition relative text-center">
                                <h3 className="text-xl font-bold mb-3 text-white">Laporan Keuangan Otomatis Agent</h3>
                                <p className="text-[#c0c0c0] mb-4">Agent membaca transaksi harian (dari QRIS, GoFood, dll) → hasilkan ringkasan cashflow mingguan + rekomendasi efisiensi.</p>
                                <Image src="/globe.svg" alt="Contoh Laporan Keuangan AI" className="use-case-image mx-auto rounded-lg border border-[#a529bb]/30" width={500} height={300} />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section className="py-28 process bg-[#000000]/30">
                    <div className="container mx-auto px-6">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 bg-gradient-to-r from-white to-[#a529bb] bg-clip-text text-transparent section-title">Proses Sederhana, Hasil Maksimal</h2>
                        <p className="text-[#c0c0c0] text-lg text-center mb-16 max-w-2xl mx-auto section-subtitle">4 langkah mudah untuk memiliki AI sendiri</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 process-steps">
                            <div className="step text-center">
                                <div className="step-number w-20 h-20 bg-gradient-to-br from-[#a529bb] to-[#531e4c] rounded-full flex items-center justify-center text-3xl font-extrabold mx-auto mb-6">1</div>
                                <h3 className="text-xl font-bold mb-3 text-white">Upload Data</h3>
                                <p className="text-[#c0c0c0]">Upload data mentah Anda (teks, gambar, atau format lainnya) ke platform kami yang aman dan mudah digunakan.</p>
                            </div>
                            <div className="step text-center">
                                <div className="step-number w-20 h-20 bg-gradient-to-br from-[#a529bb] to-[#531e4c] rounded-full flex items-center justify-center text-3xl font-extrabold mx-auto mb-6">2</div>
                                <h3 className="text-xl font-bold mb-3 text-white">AI Processing</h3>
                                <p className="text-[#c0c0c0]">AI kami akan otomatis membersihkan, memproses, dan melabel data Anda dengan akurasi tinggi.</p>
                            </div>
                            <div className="step text-center">
                                <div className="step-number w-20 h-20 bg-gradient-to-br from-[#a529bb] to-[#531e4c] rounded-full flex items-center justify-center text-3xl font-extrabold mx-auto mb-6">3</div>
                                <h3 className="text-xl font-bold mb-3 text-white">Model Training</h3>
                                <p className="text-[#c0c0c0]">Data yang sudah bersih digunakan untuk melatih model AI khusus sesuai kebutuhan bisnis Anda.</p>
                            </div>
                            <div className="step text-center">
                                <div className="step-number w-20 h-20 bg-gradient-to-br from-[#a529bb] to-[#531e4c] rounded-full flex items-center justify-center text-3xl font-extrabold mx-auto mb-6">4</div>
                                <h3 className="text-xl font-bold mb-3 text-white">Deploy & Integrate</h3>
                                <p className="text-[#c0c0c0]">AI siap diintegrasikan ke sistem Anda dengan dukungan penuh dari tim ahli kami.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section id="mulai" className="py-28 cta-section">
                    <div className="container mx-auto px-6 text-center">
                        <div className="cta-content bg-[#a529bb]/10 border border-[#a529bb]/30 p-16 rounded-2xl backdrop-blur-md">
                            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-white to-[#a529bb] bg-clip-text text-transparent">Siap Memulai Perjalanan AI Anda?</h2>
                            <p className="text-[#c0c0c0] text-lg mb-8 max-w-2xl mx-auto">Bergabunglah dengan ratusan perusahaan yang sudah mempercayai MelekAI untuk membangun solusi AI mereka</p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center cta-buttons">
                                <a href="#signup" className="bg-gradient-to-r from-[#a529bb] to-[#531e4c] text-white font-bold py-4 px-10 rounded-full shadow-lg hover:scale-105 transition text-lg">Mulai Gratis Sekarang</a>
                                <a href="#konsultasi" className="bg-gradient-to-r from-[#4e4b1a] to-[#a529bb] text-white font-bold py-4 px-10 rounded-full shadow-lg hover:scale-105 transition text-lg">Konsultasi untuk AI Custom</a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Enhanced Footer */}
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
                                © 2025 MelekAI. All rights reserved. Made with ❤️ in Indonesia
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
        </div>
    );
}