// components/Footer.tsx
import { Sparkles, Mail, Phone, MapPin, Globe, Github, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20" style={{ backgroundColor: '#000000' }}>
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#a529bb] to-[#531e4c] flex items-center justify-center">
                <Sparkles size={16} className="text-white" />
              </div>
              <h4 className="text-xl font-bold text-white">Melek<span style={{ color: '#a529bb' }}>AI</span></h4>
            </div>
            <p className="text-[#c0c0c0] text-sm leading-relaxed mb-6">
              Platform AI terdepan yang memberdayakan developer Indonesia untuk membangun solusi AI yang mengubah dunia.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-lg bg-[#a529bb]/20 border border-[#a529bb]/30 flex items-center justify-center hover:bg-[#a529bb]/30 transition-colors">
                <Github size={16} style={{ color: '#a529bb' }} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-lg bg-[#531e4c]/20 border border-[#531e4c]/30 flex items-center justify-center hover:bg-[#531e4c]/30 transition-colors">
                <Twitter size={16} style={{ color: '#531e4c' }} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-lg bg-[#4e4b1a]/20 border border-[#4e4b1a]/30 flex items-center justify-center hover:bg-[#4e4b1a]/30 transition-colors">
                <Linkedin size={16} style={{ color: '#4e4b1a' }} />
              </Link>
            </div>
          </div>

          {/* Product */}
          <div>
            <h5 className="font-semibold text-white mb-4">Platform</h5>
            <ul className="space-y-3">
              <li><Link href="#" className="text-[#c0c0c0] hover:text-white transition-colors text-sm">Data Labeling</Link></li>
              <li><Link href="#" className="text-[#c0c0c0] hover:text-white transition-colors text-sm">Model Training</Link></li>
              <li><Link href="#" className="text-[#c0c0c0] hover:text-white transition-colors text-sm">Deployment</Link></li>
              <li><Link href="#" className="text-[#c0c0c0] hover:text-white transition-colors text-sm">Monitoring</Link></li>
              <li><Link href="#" className="text-[#c0c0c0] hover:text-white transition-colors text-sm">API & SDK</Link></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h5 className="font-semibold text-white mb-4">Solutions</h5>
            <ul className="space-y-3">
              <li><Link href="#" className="text-[#c0c0c0] hover:text-white transition-colors text-sm">Computer Vision</Link></li>
              <li><Link href="#" className="text-[#c0c0c0] hover:text-white transition-colors text-sm">Natural Language</Link></li>
              <li><Link href="#" className="text-[#c0c0c0] hover:text-white transition-colors text-sm">Predictive Analytics</Link></li>
              <li><Link href="#" className="text-[#c0c0c0] hover:text-white transition-colors text-sm">Recommendation</Link></li>
              <li><Link href="#" className="text-[#c0c0c0] hover:text-white transition-colors text-sm">Enterprise AI</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="font-semibold text-white mb-4">Hubungi Kami</h5>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-[#c0c0c0] text-sm">
                <Mail size={14} />
                <span>hello@melekai.id</span>
              </li>
              <li className="flex items-center gap-2 text-[#c0c0c0] text-sm">
                <Phone size={14} />
                <span>+62 21 1234 5678</span>
              </li>
              <li className="flex items-center gap-2 text-[#c0c0c0] text-sm">
                <MapPin size={14} />
                <span>Jakarta, Indonesia</span>
              </li>
              <li className="flex items-center gap-2 text-[#c0c0c0] text-sm">
                <Globe size={14} />
                <span>www.melekai.id</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 pt-8 mt-12 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#c0c0c0] text-sm">
            &copy; {new Date().getFullYear()} MelekAI. Seluruh hak cipta dilindungi undang-undang.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="text-[#c0c0c0] hover:text-white transition-colors text-sm">Privacy Policy</Link>
            <Link href="#" className="text-[#c0c0c0] hover:text-white transition-colors text-sm">Terms of Service</Link>
            <Link href="#" className="text-[#c0c0c0] hover:text-white transition-colors text-sm">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}