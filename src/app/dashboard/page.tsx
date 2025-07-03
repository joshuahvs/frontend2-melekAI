import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Plus } from "lucide-react";
import Link from "next/link";

// Mock data for project cards
const projects = [
  { name: "Website Redesign", taskCount: 42, status: "In Progress", edited: "2h ago" },
  { name: "Mobile App Dev", taskCount: 89, status: "Completed", edited: "1d ago" },
  { name: "API Integration", taskCount: 12, status: "On Hold", edited: "5h ago" },
];

export default async function DashboardPage() {
  const { getUser } = getKindeServerSession();
  const rawUser = await getUser();
  const user = rawUser
    ? {
        // You can keep the full user object if you prefer
        email: rawUser.email ?? undefined,
      }
    : null;

  return (
    <DashboardLayout user={user}>
      {/* NEW: Page header with a primary Call to Action */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Projects</h1>
          <p className="text-gray-500 mt-1">
            Organize, manage, and track all your team's work in one place.
          </p>
        </div>
        <Link href="/project/create/" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#3a1152] text-white font-semibold text-sm hover:bg-opacity-50 transition-colors">
          <Plus size={18} />
          Create Project
        </Link>
      </div>

      {/* NEW: A modern card-based layout for displaying projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.name} className="bg-white p-5 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer">
            <div className="flex items-center justify-between mb-4">
              <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                project.status === "In Progress" ? "bg-blue-100 text-blue-800" : 
                project.status === "Completed" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
              }`}>
                {project.status}
              </span>
              <div className="text-xs text-gray-400">
                edited {project.edited}
              </div>
            </div>
            <h3 className="font-bold text-gray-800 text-lg mb-1">{project.name}</h3>
            <p className="text-sm text-gray-500">{project.taskCount} tasks</p>
          </div>
        ))}
         {/* NEW: A card to invite creating a new project */}
         <div className="flex flex-col items-center justify-center p-5 rounded-xl border-2 border-dashed border-gray-300 hover:border-fuchsia-500 hover:bg-fuchsia-50/50 transition-colors cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mb-3">
              <Plus className="text-gray-500" size={24} />
            </div>
            <h3 className="font-semibold text-gray-700">New Project</h3>
            <p className="text-sm text-gray-500 text-center">Get started with a new workspace.</p>
         </div>
      </div>
    </DashboardLayout>
  );
}