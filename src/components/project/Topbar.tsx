// components/project/Topbar.tsx
"use client";

import Image from "next/image";
import { Bell, Filter, ChevronDown, Search, User } from "lucide-react";

interface ProjectTopbarProps {
  searchQuery: string;
  setSearchQuery: (v: string) => void;
  showFilters: boolean;
  setShowFilters: (v: boolean) => void;
  onRequestTemplate?: () => void;
}

export default function ProjectTopbar({
  searchQuery,
  setSearchQuery,
  showFilters,
  setShowFilters,
  onRequestTemplate,
}: ProjectTopbarProps) {
  return (
    <header className="w-full bg-black py-4 px-6 flex flex-col md:flex-row md:items-center md:justify-between shadow-lg z-20 gap-4">
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
            Create Project
          </span>
          <span className="text-gray-200 text-xs mt-0.5">
            Buat Proyek Baru Sekarang
          </span>
        </div>
      </div>
      <div className="flex-1 flex gap-4 items-center">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white w-5 h-5" />
          <input
            type="text"
            placeholder="Search templates..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-transparent text-white placeholder-white focus:outline-none focus:ring-0 border-0"
          />
        </div>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 px-4 py-3 text-white bg-transparent rounded-lg hover:text-yellow-400 focus:outline-none border-0 shadow-none"
        >
          <Filter className="w-5 h-5" />
          Filter
          <ChevronDown
            className={`w-4 h-4 transition-transform ${showFilters ? "rotate-180" : ""}`}
          />
        </button>
        <button
          className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-[#3a1152] via-purple-600 to-yellow-400 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-yellow-400/80 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          onClick={onRequestTemplate}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
          Request Template
        </button>
      </div>
      <div className="flex items-center gap-5">
        <button className="text-white hover:text-fuchsia-300 relative">
          <Bell size={22} />
          <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
        </button>
        <button className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#3a1152] font-bold text-sm border border-fuchsia-300">
            <User className="w-5 h-5" />
          </div>
        </button>
      </div>
    </header>
  );
}
