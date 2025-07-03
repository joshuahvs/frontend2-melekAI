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
            <Folder size={16} className="mr-2 text-gray-500" />
            My First Project
          </div>
          <ChevronDown size={18} className="text-gray-400" />
        </button>
      </div>

      <nav className="text-sm flex flex-col gap-2">
        <Link
          href="/dashboard"
          className={`flex items-center py-2 px-3 rounded-md font-medium transition-colors ${
            isActive("/dashboard")
              ? "bg-[#3a1152] text-white"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          <Home size={18} className="mr-3" />
          Dashboard
        </Link>
        <Link
          href="/projects"
          className={`flex items-center py-2 px-3 rounded-md font-medium transition-colors ${
            isActive("/projects")
              ? "bg-[#3a1152] text-white"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          <Briefcase size={18} className="mr-3" />
          Projects
        </Link>
        <Link
          href="/settings"
          className={`flex items-center py-2 px-3 rounded-md font-medium transition-colors ${
            isActive("/settings")
              ? "bg-fuchsia-600 text-white"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          <Settings size={18} className="mr-3" />
          Settings
        </Link>
      </nav>
    </aside>
  );
}
