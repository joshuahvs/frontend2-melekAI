'use client';

import { Bell, Search } from "lucide-react";
// Note: For a real app, you'd use a library like Headless UI for the Dropdown/Menu
// This is a visual representation.

type Props = {
  user: {
    email?: string;
  } | null;
};

export default function Topbar({ user }: Props) {
  const email = user?.email || "user@example.com";
  const initial = email[0]?.toUpperCase() || "U";

  return (
    <header className="w-full border-b bg-white/70 backdrop-blur-lg h-16 px-6 flex items-center justify-between sticky top-0 z-40">
      {/* NEW: A more prominent and functional search bar */}
      <div className="flex items-center gap-2 w-full max-w-xs">
        <Search className="text-gray-400" size={18} />
        <input 
          type="text"
          placeholder="Search projects, tasks..."
          className="bg-transparent text-sm w-full focus:outline-none text-gray-700"
        />
      </div>

      <div className="flex items-center gap-5">
        <button className="text-gray-500 hover:text-fuchsia-600 relative">
          <Bell size={22} />
          {/* NEW: Notification dot */}
          <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
        </button>

        {/* NEW: Styled as a clickable menu */}
        <button className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-fuchsia-500 flex items-center justify-center text-white font-bold text-sm">
            {initial}
          </div>
          <div className="hidden md:flex flex-col items-start">
            <span className="text-sm text-gray-800 font-medium">
              {email.split('@')[0]}
            </span>
            <span className="text-xs text-gray-500">View profile</span>
          </div>
        </button>
      </div>
    </header>
  );
}