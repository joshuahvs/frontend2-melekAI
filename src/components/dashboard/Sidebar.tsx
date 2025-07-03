import { Folder } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r h-screen fixed top-0 left-0 p-4 hidden md:block">
      <div className="text-xl font-bold mb-8">
        🦄 <span className="text-[#7B3FE4]">Scale Pro</span>
      </div>
      <div className="mb-6">
        <label className="text-sm font-semibold text-gray-600 mb-2 block">Select a project</label>
        <button className="flex items-center w-full px-3 py-2 border rounded-md text-sm text-gray-700">
          <Folder size={16} className="mr-2" />
          Select a project
        </button>
      </div>
      <nav className="text-sm">
        <a href="#" className="block py-2 text-[#7B3FE4] font-medium">Projects</a>
      </nav>
    </aside>
  );
}
