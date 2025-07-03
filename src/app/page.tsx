import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { ArrowRight, Bot, Database, LayoutDashboard, GanttChartSquare, PencilRuler, Files, BarChart3, UserCog, Zap, Shield, Users, Clock, Target, TrendingUp } from 'lucide-react';

// Import the new components
import Navbar from "@/components/Navbar"; 
import Footer from "@/components/Footer"; 

// Helper components (can also be moved to their own files if desired)
const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
    <div className="group relative bg-gradient-to-br from-white/5 to-white/10 p-6 rounded-xl border border-white/20 transition-all duration-500 transform hover:-translate-y-2 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/15 hover:border-[#a529bb]/50 hover:shadow-2xl hover:shadow-[#a529bb]/20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#a529bb]/0 to-[#531e4c]/0 group-hover:from-[#a529bb]/10 group-hover:to-[#531e4c]/10 rounded-xl transition-all duration-500"></div>
        <div className="relative z-10">
            <div className="text-[#939ba9] group-hover:text-[#a529bb] transition-colors duration-500 mb-4 transform group-hover:scale-110">{icon}</div>
            <h3 className="font-bold text-lg mb-2 text-white group-hover:text-[#a529bb] transition-colors duration-300">{title}</h3>
            <p className="text-[#c0c0c0] text-sm group-hover:text-[#e0e0e0] transition-colors duration-300">{description}</p>
        </div>
    </div>
);

const StatCard = ({ number, label }: { number: string, label: string }) => (
    <div className="text-center p-6 bg-gradient-to-br from-[#a529bb]/20 to-[#531e4c]/20 rounded-xl border border-[#a529bb]/30">
        <div className="text-3xl font-bold text-white mb-2">{number}</div>
        <div className="text-[#888994] text-sm">{label}</div>
    </div>
);

const UseCaseCard = ({ icon, title, description, color }: { icon: React.ReactNode, title: string, description: string, color: string }) => (
    <div className="group p-6 rounded-xl border border-white/20 bg-gradient-to-br from-white/5 to-white/10 hover:from-white/10 hover:to-white/15 transition-all duration-300 hover:-translate-y-1">
        <div className="flex items-center gap-3 mb-3">
            <div className={`p-2 rounded-lg`} style={{ backgroundColor: color + '20', border: `1px solid ${color}40` }}>
                <div style={{ color: color }}>{icon}</div>
            </div>
            <h3 className="font-semibold text-white">{title}</h3>
        </div>
        <p className="text-[#c0c0c0] text-sm">{description}</p>
    </div>
);

export default function HomePage() {
    const coreModules = [
        { icon: <UserCog size={24} />, title: "Otentikasi Terpusat", description: "Manajemen akses pengguna yang aman dan terintegrasi untuk melindungi data dan proyek Anda dengan enkripsi tingkat enterprise." },
        { icon: <GanttChartSquare size={24} />, title: "Manajemen Proyek AI", description: "Alur kerja terstruktur dari awal hingga akhir. Lacak progres, kelola tim, dan pastikan proyek selesai tepat waktu dengan milestone tracking." },
        { icon: <Database size={24} />, title: "Data Engine Cerdas", description: "Pusat data Anda. Lakukan ingest, pra-pemrosesan, dan augmentasi data skala besar dengan mudah. Dukung berbagai format dan sumber data." },
        { icon: <PencilRuler size={24} />, title: "Anotasi & Pelabelan", description: "Tools kolaboratif untuk pelabelan data yang presisi dan cepat, didukung oleh AI untuk efisiensi. Mendukung computer vision dan NLP." },
        { icon: <Bot size={24} />, title: "Layanan AI/ML", description: "Deploy, monitor, dan kelola model machine learning Anda dalam satu tempat. Dari training hingga production dengan auto-scaling." },
        { icon: <Files size={24} />, title: "Penagihan & Laporan", description: "Sistem billing otomatis berdasarkan penggunaan (usage-based) dan laporan performa yang mendalam dengan analytics real-time." },
        { icon: <LayoutDashboard size={24} />, title: "Dashboard Admin", description: "Kontrol penuh atas platform. Pantau aktivitas pengguna, penggunaan sumber daya, dan kesehatan sistem dengan monitoring 24/7." },
        { icon: <BarChart3 size={24} />, title: "Dashboard Pengguna", description: "Area kerja personal untuk setiap pengguna. Akses proyek, data, dan lihat analisis performa pribadi dengan visualisasi interaktif." },
    ];

    const useCases = [
        { icon: <Bot size={20} />, title: "Computer Vision", description: "Anotasi gambar, deteksi objek, dan klasifikasi visual untuk autonomous vehicles, medical imaging, dan retail analytics.", color: "#a529bb" },
        { icon: <PencilRuler size={20} />, title: "Natural Language Processing", description: "Sentiment analysis, chatbot training, dan text classification untuk customer service dan content moderation.", color: "#531e4c" },
        { icon: <TrendingUp size={20} />, title: "Predictive Analytics", description: "Forecasting dan trend analysis untuk finance, supply chain, dan business intelligence dengan akurasi tinggi.", color: "#4e4b1a" },
        { icon: <Target size={20} />, title: "Recommendation Systems", description: "Personalisasi konten dan product recommendation untuk e-commerce dan streaming platforms.", color: "#888994" },
    ];

    return (
        <div style={{ backgroundColor: '#000000' }} className="text-white min-h-screen">
            <Navbar />

            <main>
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 text-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#a529bb]/20 via-[#000000] to-[#531e4c]/20"></div>
                    <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#a529bb]/20 to-[#531e4c]/20 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-[#4e4b1a]/20 to-[#a529bb]/20 rounded-full blur-3xl"></div>

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#a529bb]/30 mb-6" style={{ backgroundColor: '#a529bb' + '20' }}>
                            <Zap size={16} style={{ color: '#a529bb' }} />
                            <span className="text-sm font-medium" style={{ color: '#a529bb' }}>Platform AI Terdepan untuk Developer Indonesia</span>
                        </div>

                        <h2 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-white via-[#939ba9] to-white bg-clip-text text-transparent">
                            Bangun AI yang <br />
                            <span className="bg-gradient-to-r from-[#a529bb] to-[#531e4c] bg-clip-text text-transparent">Mengubah Dunia</span>
                        </h2>

                        <p className="text-lg text-[#e0e0e0] max-w-3xl mx-auto mb-8 leading-relaxed">
                            Platform end-to-end pertama di Indonesia yang menyatukan <strong className="text-white">data labeling</strong>, <strong className="text-white">model training</strong>, dan <strong className="text-white">deployment</strong> dalam satu ekosistem.
                            Dari startup hingga enterprise, percepat inovasi AI Anda dengan tools yang telah dipercaya oleh 1000+ developer.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                            <RegisterLink className="text-white font-bold py-4 px-8 rounded-xl inline-flex items-center gap-2 transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-lg" style={{ backgroundColor: '#a529bb', boxShadow: '0 0 30px #a529bb40' }}>
                                Mulai Gratis <ArrowRight size={20} />
                            </RegisterLink>
                            <button className="text-[#e0e0e0] font-medium py-4 px-8 rounded-xl border border-[#e0e0e0]/30 hover:border-white hover:text-white transition-all duration-300 inline-flex items-center gap-2">
                                <Bot size={20} />
                                Lihat Demo
                            </button>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                            <StatCard number="1000+" label="Developer Aktif" />
                            <StatCard number="50M+" label="Data Points Diproses" />
                            <StatCard number="99.9%" label="Uptime SLA" />
                            <StatCard number="24/7" label="Support Premium" />
                        </div>
                    </div>
                </section>

                {/* All other sections remain the same... */}
                {/* Problem Statement, Core Modules, Use Cases, CTA Section */}

                {/* Problem Statement */}
                <section className="py-20 border-t border-white/10">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto text-center mb-16">
                            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">Mengapa MelekAI?</h3>
                            <p className="text-[#c0c0c0] text-lg leading-relaxed">
                                Developer AI di Indonesia menghadapi tantangan kompleks: infrastruktur yang terfragmentasi,
                                biaya labeling yang mahal, dan kompleksitas deployment. MelekAI hadir sebagai solusi terintegrasi
                                yang mengatasi semua pain points ini dalam satu platform.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center p-8 rounded-xl border border-[#531e4c]/30 bg-gradient-to-br from-[#531e4c]/10 to-[#a529bb]/10">
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#531e4c] to-[#a529bb] flex items-center justify-center">
                                    <Clock size={24} className="text-white" />
                                </div>
                                <h4 className="text-xl font-bold text-white mb-3">Hemat 80% Waktu Development</h4>
                                <p className="text-[#c0c0c0]">Dari berbulan-bulan menjadi berminggu-minggu. Fokus pada inovasi, bukan infrastruktur.</p>
                            </div>

                            <div className="text-center p-8 rounded-xl border border-[#4e4b1a]/30 bg-gradient-to-br from-[#4e4b1a]/10 to-[#a529bb]/10">
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#4e4b1a] to-[#a529bb] flex items-center justify-center">
                                    <Shield size={24} className="text-white" />
                                </div>
                                <h4 className="text-xl font-bold text-white mb-3">Enterprise-Grade Security</h4>
                                <p className="text-[#c0c0c0]">Keamanan data terjamin dengan enkripsi end-to-end dan compliance international.</p>
                            </div>

                            <div className="text-center p-8 rounded-xl border border-[#888994]/30 bg-gradient-to-br from-[#888994]/10 to-[#531e4c]/10">
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#888994] to-[#531e4c] flex items-center justify-center">
                                    <Users size={24} className="text-white" />
                                </div>
                                <h4 className="text-xl font-bold text-white mb-3">Kolaborasi Tim Seamless</h4>
                                <p className="text-[#c0c0c0]">Tools kolaborasi yang memungkinkan tim distributed bekerja efektif bersama.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Core Modules Section */}
                <section className="py-20 border-t border-white/10">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#a529bb] to-[#531e4c] bg-clip-text text-transparent">
                                8 Modul Terintegrasi untuk Skalabilitas
                            </h3>
                            <p className="text-[#c0c0c0] text-lg max-w-2xl mx-auto">
                                Semua tools yang dibutuhkan developer AI modern, dari ideation hingga production,
                                kini dalam satu solusi yang powerful dan mudah digunakan.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {coreModules.map((mod, index) => (
                                <div key={mod.title} className="transform transition-all duration-300" style={{ animationDelay: `${index * 100}ms` }}>
                                    <FeatureCard icon={mod.icon} title={mod.title} description={mod.description} />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Use Cases Section */}
                <section className="py-20 border-t border-white/10">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                                Solusi untuk Berbagai Industry
                            </h3>
                            <p className="text-[#c0c0c0] text-lg max-w-2xl mx-auto">
                                Dari healthcare hingga fintech, MelekAI telah membantu berbagai industri
                                mengimplementasikan AI dengan sukses dan menghasilkan ROI yang signifikan.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            {useCases.map((useCase, index) => (
                                <div key={useCase.title} className="transform transition-all duration-300" style={{ animationDelay: `${index * 150}ms` }}>
                                    <UseCaseCard {...useCase} />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 border-t border-white/10">
                    <div className="container mx-auto px-6 text-center">
                        <div className="max-w-4xl mx-auto p-12 rounded-2xl bg-gradient-to-br from-[#a529bb]/20 to-[#531e4c]/20 border border-[#a529bb]/30">
                            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                                Siap Memulai Perjalanan AI Anda?
                            </h3>
                            <p className="text-[#c0c0c0] text-lg mb-8 max-w-2xl mx-auto">
                                Bergabunglah dengan 1000+ developer yang sudah mempercayai MelekAI.
                                Mulai gratis hari ini dan rasakan perbedaannya dalam 5 menit pertama.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <RegisterLink className="text-white font-bold py-4 px-8 rounded-xl inline-flex items-center gap-2 transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-lg" style={{ backgroundColor: '#a529bb' }}>
                                    Mulai Gratis Sekarang <ArrowRight size={20} />
                                </RegisterLink>
                                <button className="text-[#e0e0e0] font-medium py-4 px-8 rounded-xl border border-[#e0e0e0]/30 hover:border-white hover:text-white transition-all duration-300">
                                    Jadwalkan Demo
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}