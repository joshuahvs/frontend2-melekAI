"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';

// Floating Particles Component
const Particles = () => {
    React.useEffect(() => {
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

export default function PricingPage() {
    const [billingCycle, setBillingCycle] = useState('monthly');
    // const [selectedPlan, setSelectedPlan] = useState('');

    const pricingPlans = [
        {
            name: 'Starter',
            description: 'Untuk UMKM & startup yang baru memulai',
            monthlyPrice: 1499000,
            yearlyPrice: 14990000,
            features: [
                'Hingga 5,000 data points/bulan',
                'Basic data labeling & processing',
                'Standard AI model templates',
                'Email support',
                'Basic analytics dashboard',
                'API access (rate limited)',
                'Data export (CSV/JSON)',
                'Community forum access'
            ],
            limitations: [
                'Maksimal 2 AI models aktif',
                'Standard processing speed',
                'Community support only'
            ],
            popular: false,
            cta: 'Mulai Gratis 14 Hari'
        },
        {
            name: 'Professional',
            description: 'Untuk perusahaan yang ingin scale AI operations',
            monthlyPrice: 2500000,
            yearlyPrice: 24900000,
            features: [
                'Hingga 10,000 data points/bulan',
                'Advanced data labeling & processing',
                'Custom AI model development',
                'Priority email & chat support',
                'Advanced analytics & insights',
                'Full API access',
                'Multiple export formats',
                'Custom integrations',
                'Team collaboration tools',
                'Data security compliance'
            ],
            limitations: [
                'Maksimal 10 AI models aktif',
                'Fast processing speed'
            ],
            popular: true,
            cta: 'Pilih Professional'
        },
        {
            name: 'Enterprise',
            description: 'Untuk large enterprises dengan kebutuhan khusus',
            monthlyPrice: 'Custom',
            yearlyPrice: 'Custom',
            features: [
                'Unlimited data points',
                'Enterprise-grade data processing',
                'Fully custom AI solutions',
                'Dedicated account manager',
                'Real-time analytics & monitoring',
                'Custom API endpoints',
                'Advanced security & compliance',
                'On-premise deployment options',
                'White-label solutions',
                'SLA guarantee (99.9% uptime)',
                'Custom training & consulting',
                'Priority feature requests'
            ],
            limitations: [],
            popular: false,
            cta: 'Hubungi Sales'
        }
    ];

    const addOnServices = [
        {
            name: 'Data Annotation Services',
            description: 'Tim ahli untuk labeling data kompleks',
            pricing: 'Mulai dari Rp 750/data point',
            features: ['Human-in-the-loop annotation', 'Quality assurance', 'Specialized domain expertise']
        },
        {
            name: 'Custom AI Consulting',
            description: 'Konsultasi mendalam untuk strategi AI',
            pricing: 'Rp 1.500.000/jam',
            features: ['AI strategy development', 'Technical architecture review', 'Implementation roadmap']
        },
        {
            name: 'Managed AI Services',
            description: 'Fully managed AI operations',
            pricing: 'Custom pricing',
            features: ['24/7 monitoring', 'Performance optimization', 'Maintenance & updates']
        }
    ];

    const usageTiers = [
        { range: '0 - 10K', starter: 'Rp 150', pro: 'Rp 120', enterprise: 'Rp 75' },
        { range: '10K - 50K', starter: 'Rp 225', pro: 'Rp 150', enterprise: 'Rp 105' },
        { range: '50K - 100K', starter: 'Rp 300', pro: 'Rp 180', enterprise: 'Rp 120' },
        { range: '100K+', starter: 'N/A', pro: 'Rp 225', enterprise: 'Rp 150' }
    ];
    
    // Helper to format currency
    const formatRupiah = (number: string | number | bigint) => {
        if (typeof number !== 'number') return number;
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(number);
    };

    return (
        <div style={{ backgroundColor: '#000000' }} className="text-white min-h-screen relative overflow-hidden font-sans">
            {/* Gradient backgrounds */}
            <div className="pointer-events-none select-none absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#a529bb]/40 via-transparent to-transparent rounded-full blur-3xl z-0" />
            <div className="pointer-events-none select-none absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tl from-[#a529bb]/40 via-transparent to-transparent rounded-full blur-3xl z-0" />
            <Particles />

            {/* Header */}
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

            <main className="relative z-10 pt-24">
                {/* Hero Section */}
                <section id="pricing" className="py-20 text-center">
                    <div className="container mx-auto px-6">
                        <div className="inline-block bg-[#a529bb]/10 border border-[#a529bb]/30 px-6 py-3 rounded-full text-white font-semibold mb-8">
                            💎 Harga Transparan, Tanpa Biaya Tersembunyi
                        </div>
                        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-white via-[#a529bb] to-white bg-clip-text text-transparent">
                            Pilih Paket yang Tepat<br />untuk Bisnis Anda
                        </h1>
                        <p className="text-xl text-[#c0c0c0] max-w-3xl mx-auto mb-12">
                            Dari startup hingga enterprise, kami punya solusi AI yang sesuai dengan kebutuhan dan budget Anda.
                        </p>

                        {/* Billing Toggle */}
                        <div className="flex items-center justify-center gap-4 mb-16">
                            <span className={`text-lg font-medium ${billingCycle === 'monthly' ? 'text-white' : 'text-[#888994]'}`}>
                                Bulanan
                            </span>
                            <button
                                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                                className={`relative w-16 h-8 rounded-full transition-all duration-300 ${billingCycle === 'yearly' ? 'bg-[#a529bb]' : 'bg-white/20'}`}
                            >
                                <div className={`absolute w-6 h-6 bg-white rounded-full top-1 transition-all duration-300 ${billingCycle === 'yearly' ? 'left-9' : 'left-1'}`} />
                            </button>
                            <span className={`text-lg font-medium ${billingCycle === 'yearly' ? 'text-white' : 'text-[#888994]'}`}>
                                Tahunan
                            </span>
                            <div className="bg-gradient-to-r from-[#a529bb] to-[#531e4c] text-white text-sm px-3 py-1 rounded-full ml-2">
                                Hemat ~17%
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pricing Cards */}
                <section className="py-20">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                            {pricingPlans.map((plan, index) => (
                                <div
                                    key={index}
                                    className={`relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 transition-all duration-300 hover:scale-105 flex flex-col ${
                                        plan.popular 
                                        ? 'border-2 border-[#a529bb] shadow-2xl shadow-[#a529bb]/20' 
                                        : 'border border-white/10 hover:border-[#a529bb]/50'
                                    }`}
                                >
                                    {plan.popular && (
                                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                            <div className="bg-gradient-to-r from-[#a529bb] to-[#531e4c] text-white px-6 py-2 rounded-full text-sm font-bold">
                                                PALING POPULER
                                            </div>
                                        </div>
                                    )}

                                    <div className="text-center mb-8">
                                        <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                                        <p className="text-[#c0c0c0] mb-6 h-10">{plan.description}</p>
                                        <div className="mb-6 h-24">
                                            {plan.name === 'Enterprise' ? (
                                                <span className="text-5xl font-extrabold text-white">Custom</span>
                                            ) : (
                                                <>
                                                    <span className="text-5xl font-extrabold text-white">
                                                        {formatRupiah(
                                                            billingCycle === 'monthly'
                                                                ? plan.monthlyPrice
                                                                : typeof plan.yearlyPrice === 'number'
                                                                    ? Math.floor(plan.yearlyPrice / 12)
                                                                    : plan.yearlyPrice
                                                        )}
                                                    </span>
                                                    <span className="text-[#c0c0c0] text-lg">/bulan</span>
                                                </>
                                            )}
                                            {billingCycle === 'yearly' && plan.name !== 'Enterprise' && (
                                                <div className="text-sm text-[#a529bb] mt-1">
                                                    {formatRupiah(plan.yearlyPrice)} ditagih per tahun
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    
                                    <div className="flex-grow">
                                        <ul className="space-y-3 mb-8">
                                            {plan.features.map((feature, i) => (
                                                <li key={i} className="flex items-start gap-3">
                                                    <div className="w-5 h-5 bg-[#a529bb]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                                        <span className="text-[#a529bb] text-sm">✓</span>
                                                    </div>
                                                    <span className="text-[#c0c0c0] text-sm">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        {plan.limitations.length > 0 && (
                                            <div className="mb-8">
                                                <h4 className="text-white font-semibold mb-3">Batasan:</h4>
                                                <ul className="space-y-2">
                                                    {plan.limitations.map((limitation, i) => (
                                                        <li key={i} className="flex items-start gap-3">
                                                            <div className="w-5 h-5 bg-orange-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                                                <span className="text-orange-400 text-sm">!</span>
                                                            </div>
                                                            <span className="text-[#c0c0c0] text-sm">{limitation}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>

                                    <button
                                        // onClick={() => setSelectedPlan(plan.name)}
                                        className={`w-full mt-auto py-4 px-6 rounded-full font-bold transition-all duration-300 ${
                                            plan.popular
                                                ? 'bg-gradient-to-r from-[#a529bb] to-[#531e4c] text-white shadow-lg hover:scale-105'
                                                : 'border-2 border-[#a529bb] text-[#a529bb] hover:bg-[#a529bb] hover:text-white'
                                        }`}
                                    >
                                        {plan.cta}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Usage-Based Pricing */}
                <section className="py-20 bg-white/5 backdrop-blur-sm">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-white to-[#a529bb] bg-clip-text text-transparent">
                                Harga Berbasis Penggunaan
                            </h2>
                            <p className="text-xl text-[#c0c0c0] max-w-2xl mx-auto">
                                Bayar sesuai pemakaian. Harga per data point yang diproses.
                            </p>
                        </div>

                        <div className="max-w-4xl mx-auto">
                            <div className="bg-white/10 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10">
                                <div className="grid grid-cols-4 gap-4 p-6 border-b border-white/10 bg-[#a529bb]/10">
                                    <div className="font-bold text-white">Data Points</div>
                                    <div className="font-bold text-white text-center">Starter</div>
                                    <div className="font-bold text-white text-center">Professional</div>
                                    <div className="font-bold text-white text-center">Enterprise</div>
                                </div>
                                {usageTiers.map((tier, index) => (
                                    <div key={index} className="grid grid-cols-4 gap-4 p-6 border-b border-white/5 last:border-b-0">
                                        <div className="text-[#c0c0c0] font-medium">{tier.range}</div>
                                        <div className="text-center text-white font-mono">{tier.starter}</div>
                                        <div className="text-center text-white font-mono">{tier.pro}</div>
                                        <div className="text-center text-white font-mono">{tier.enterprise}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Add-on Services */}
                <section className="py-20">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-white to-[#a529bb] bg-clip-text text-transparent">
                                Layanan Tambahan
                            </h2>
                            <p className="text-xl text-[#c0c0c0] max-w-2xl mx-auto">
                                Tingkatkan kapabilitas AI Anda dengan layanan profesional kami.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {addOnServices.map((service, index) => (
                                <div key={index} className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-[#a529bb]/50 transition-all duration-300 hover:scale-105">
                                    <h3 className="text-xl font-bold text-white mb-4">{service.name}</h3>
                                    <p className="text-[#c0c0c0] mb-4">{service.description}</p>
                                    <div className="text-2xl font-bold text-[#a529bb] mb-6">{service.pricing}</div>
                                    <ul className="space-y-2">
                                        {service.features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-2">
                                                <span className="text-[#a529bb] text-sm">✓</span>
                                                <span className="text-[#c0c0c0] text-sm">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-20 bg-white/5 backdrop-blur-sm">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-white to-[#a529bb] bg-clip-text text-transparent">
                                Frequently Asked Questions
                            </h2>
                        </div>

                        <div className="max-w-3xl mx-auto space-y-6">
                            {[
                                {
                                    q: "Bagaimana cara billing per data point bekerja?",
                                    a: "Setiap data point yang diproses (diberi label, dibersihkan, atau digunakan untuk training) akan dihitung. Anda hanya membayar untuk data yang benar-benar diproses."
                                },
                                {
                                    q: "Apakah ada komitmen minimum?",
                                    a: "Tidak ada komitmen minimum untuk paket Starter dan Professional. Paket Enterprise memiliki kontrak tahunan dengan syarat yang fleksibel."
                                },
                                {
                                    q: "Bagaimana dengan keamanan data?",
                                    a: "Semua data dienkripsi end-to-end dan disimpan di server yang sesuai dengan standar internasional (ISO 27001, SOC 2). Kami tidak pernah menggunakan data klien untuk melatih model lain."
                                },
                                {
                                    q: "Bisakah saya upgrade atau downgrade paket?",
                                    a: "Ya, Anda bisa upgrade atau downgrade kapan saja. Penagihan akan disesuaikan secara prorata."
                                },
                                {
                                    q: "Apakah ada free trial?",
                                    a: "Ya, semua paket memiliki free trial 14 hari. Tidak perlu kartu kredit untuk memulai."
                                }
                            ].map((faq, index) => (
                                <div key={index} className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                                    <h3 className="text-lg font-bold text-white mb-3">{faq.q}</h3>
                                    <p className="text-[#c0c0c0]">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20">
                    <div className="container mx-auto px-6 text-center">
                        <div className="bg-gradient-to-r from-[#a529bb]/20 to-[#531e4c]/20 backdrop-blur-xl rounded-3xl p-16 border border-[#a529bb]/30">
                            <h2 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-white to-[#a529bb] bg-clip-text text-transparent">
                                Siap Memulai Perjalanan AI Anda?
                            </h2>
                            <p className="text-xl text-[#c0c0c0] mb-8 max-w-2xl mx-auto">
                                Mulai dengan free trial 14 hari atau konsultasi gratis dengan pakar AI kami.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="bg-gradient-to-r from-[#a529bb] to-[#531e4c] text-white font-bold py-4 px-10 rounded-full shadow-lg hover:scale-105 transition-all duration-300 text-lg">
                                    Mulai Free Trial
                                </button>
                                <button className="border-2 border-[#a529bb] text-[#a529bb] font-bold py-4 px-10 rounded-full hover:bg-[#a529bb] hover:text-white transition-all duration-300 text-lg">
                                    Konsultasi Gratis
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}