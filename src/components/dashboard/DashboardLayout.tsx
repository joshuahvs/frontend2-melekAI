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
    // NEW: Softer background color for a more premium feel
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />
      <div className="flex flex-1 flex-col md:ml-64"> 
        {/* FIXED: Changed ml-20 to md:ml-64 to correctly offset the sidebar width on medium screens and up */}
        <Topbar user={user} />
        <main className="flex-1 p-6 md:p-10">
          {/* CHANGED: Increased padding for more breathing room */}
          <div className="w-full max-w-6xl mx-auto"> 
            {/* CHANGED: Increased max-width slightly for modern screens */}
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}