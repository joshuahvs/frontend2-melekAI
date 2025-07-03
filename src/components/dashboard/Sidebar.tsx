import { Folder, Home, Settings, Briefcase, ChevronDown } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r h-screen fixed top-0 left-0 p-5 hidden md:block">
      <div className="text-2xl font-bold mb-10 flex items-center gap-2">
        {/* CHANGED: Updated branding to be unique */}
         <span className="text-black">MelekAI</span>
      </div>
      
      {/* NEW: More interactive project selector */}
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

      {/* NEW: More complete navigation with icons and active state */}
      <nav className="text-sm flex flex-col gap-2">
        <a href="#" className="flex items-center py-2 px-3 text-white bg-fuchsia-600 rounded-md font-medium">
          <Home size={18} className="mr-3" />
          Dashboard
        </a>
        <a href="#" className="flex items-center py-2 px-3 text-gray-600 hover:bg-gray-100 rounded-md font-medium">
          <Briefcase size={18} className="mr-3" />
          Projects
        </a>
        <a href="#" className="flex items-center py-2 px-3 text-gray-600 hover:bg-gray-100 rounded-md font-medium">
          <Settings size={18} className="mr-3" />
          Settings
        </a>
      </nav>
    </aside>
  );
}