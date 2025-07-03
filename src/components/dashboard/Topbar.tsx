'use client';

import { Bell, Grid, Search } from "lucide-react";

type Props = {
  user: {
    email?: string;
  } | null;
};

export default function Topbar({ user }: Props) {
  const email = user?.email || "user@example.com";
  const initial = email[0]?.toUpperCase() || "U";

  return (
    <header className="w-full border-b bg-white h-16 px-4 flex items-center justify-between sticky top-0 z-40">
      <div className="text-[#7B3FE4] font-medium text-sm">MelekAI</div>
      <div className="flex items-center gap-4">
        <Search className="text-gray-500" size={20} />
        <Grid className="text-gray-500" size={20} />
        <Bell className="text-gray-500" size={20} />

        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-fuchsia-500 flex items-center justify-center text-white font-bold">
            {initial}
          </div>
          <span className="hidden md:inline text-sm text-gray-700">{email}</span>
        </div>
      </div>
    </header>
  );
}
