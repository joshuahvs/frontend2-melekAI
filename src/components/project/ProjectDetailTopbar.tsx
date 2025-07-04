"use client";

import Image from "next/image";
import { Bell, User } from "lucide-react";

interface ProjectDetailTopbarProps {
  projectName: string;
  onExitProject?: () => void;
}

export default function ProjectDetailTopbar({ projectName, onExitProject }: ProjectDetailTopbarProps) {
  return (
    <header className="w-full fixed bg-black py-4 px-6 flex flex-col md:flex-row md:items-center md:justify-between shadow-lg z-20 gap-4">
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
            Studio
          </span>
          <span className="text-gray-200 text-xs mt-0.5">
            {projectName}
          </span>
        </div>
      </div>
      <div className="flex-1 flex gap-4 items-center justify-end">
        <button
          className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-[#3a1152] via-purple-600 to-yellow-400 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-yellow-400/80 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          onClick={onExitProject}
        >
          Exit Project
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
