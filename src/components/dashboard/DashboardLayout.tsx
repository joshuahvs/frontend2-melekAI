import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  user: {
    email?: string;
  } | null;
};

export default function DashboardLayout({ children, user }: Props) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar on the left */}
      <Sidebar />

      {/* Right side: topbar + main content */}
      <div className="flex-1 flex flex-col">
        <Topbar user={user} />
        <main className="p-8">{children}</main>
      </div>
    </div>
  );
}
