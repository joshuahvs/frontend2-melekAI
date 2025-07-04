"use client";

import { Bell, Search, Plus } from "lucide-react";
import Image from "next/image";

type Props = {
  user: {
    email?: string;
  } | null;
  onCreateProject?: () => void;
};

export default function Topbar({ user, onCreateProject }: Props) {
  const email = user?.email || "user@example.com";
  const initial = email[0]?.toUpperCase() || "U";

  return (
    <header className="w-full border-b fixed top-0 left-0 bg-black/90 backdrop-blur-lg h-20 px-6 flex items-center justify-between z-40">
      {/* Logo in title */}
      <div className="flex items-center gap-4">
        <div className="flex flex-col">
          <span className="text-2xl font-bold leading-tight flex items-center gap-2 text-white drop-shadow-md">
            <Image
              src="/logo.svg"
              alt="MelekAI Logo"
              width={96}
              height={96}
              priority
              className="drop-shadow-md"
            />
            Dashboard
          </span>
          <span className="text-gray-200 text-xs mt-0.5">
            Kelola semua project AI Anda dalam satu tempat
          </span>
        </div>
      </div>

      {/* Search bar */}
      <div className="flex items-center gap-2 w-full max-w-xs mx-8 flex-1">
        <Search className="text-white" size={18} />
        <input
          type="text"
          placeholder="Search projects, tasks..."
          className="bg-transparent text-sm w-full focus:outline-none text-white placeholder-white/70"
        />
      </div>

      <div className="flex items-center gap-5">
        <button className="text-white hover:text-fuchsia-300 relative">
          <Bell size={22} />
          <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
        </button>
        <button
          className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-[#3a1152] via-purple-600 to-yellow-400 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-yellow-400/80 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          onClick={onCreateProject}
        >
          <Plus size={20} />
          Create New Project
        </button>
        <button className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#3a1152] font-bold text-sm border border-fuchsia-300">
            {initial}
          </div>
          <div className="hidden md:flex flex-col items-start">
            <span className="text-sm text-white font-medium">
              {email.split("@")[0]}
            </span>
            <span className="text-xs text-white/70">View profile</span>
          </div>
        </button>
      </div>
    </header>
  );
}
