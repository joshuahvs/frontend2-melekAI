'use client';

import { Folder, Home, Settings, Briefcase, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Sidebar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <aside className="w-64 bg-white border-r h-screen fixed top-0 left-0 p-5 hidden md:block">
      <div className="text-2xl font-bold mb-10 flex items-center gap-2">
        <span className="text-black">MelekAI</span>
      </div>

      <div className="mb-8">
        <label className="text-xs font-semibold text-gray-500 mb-2 block uppercase tracking-wider">Project</label>
        <button className="flex items-center justify-between w-full px-3 py-2 border rounded-lg text-sm text-gray-800 bg-gray-50 hover:border-gray-300">
          <div className="flex items-center">
            <Folder size={16} className="mr-2 text-white" />
            My First Project
          </div>
          <ChevronDown size={18} className="text-white" />
        </button>
      </div>

      <nav className="text-sm flex flex-col gap-2">
        <Link
          href="/dashboard"
          className={`flex items-center py-2 px-3 rounded-md font-medium transition-colors ${
            isActive("/dashboard")
              ? "bg-gradient-to-r from-[#3a1152] via-purple-600 to-yellow-400 text-white font-semibold shadow-md"
              : "text-gray-600 hover:bg-gradient-to-r hover:from-[#3a1152] hover:via-purple-600 hover:to-yellow-400 hover:text-black hover:font-semibold"
          }`}
        >
          <Home size={18} className="mr-3" />
          Dashboard
        </Link>
        <Link
          href="/project/create"
          className={`flex items-center py-2 px-3 rounded-md font-medium transition-colors ${
            isActive("/project/create")
              ? "bg-gradient-to-r from-[#3a1152] via-purple-600 to-yellow-400 text-white font-semibold shadow-md"
              : "text-gray-600 hover:bg-gradient-to-r hover:from-[#3a1152] hover:via-purple-600 hover:to-yellow-400 hover:text-black hover:font-semibold"
          }`}
        >
          <Briefcase size={18} className="mr-3" />
          Create Project
        </Link>
        <Link
          href="/settings"
          className={`flex items-center py-2 px-3 rounded-md font-medium transition-colors ${
            isActive("/settings")
              ? "bg-gradient-to-r from-[#3a1152] via-purple-600 to-yellow-400 text-white font-semibold shadow-md"
              : "text-gray-600 hover:bg-gradient-to-r hover:from-[#3a1152] hover:via-purple-600 hover:to-yellow-400 hover:text-black hover:font-semibold"
          }`}
        >
          <Settings size={18} className="mr-3" />
          Settings
        </Link>
      </nav>
    </aside>
  );
}
