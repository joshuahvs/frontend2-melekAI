"use client";
import React from "react";
import { Plus, Download, Rocket, Eye, Clock, CheckCircle, AlertCircle, PlayCircle } from "lucide-react";
import Topbar from "@/components/dashboard/Topbar";
import Sidebar from "@/components/dashboard/Sidebar";

// Mock data for AI projects
const aiProjects = [
	{
		id: 1,
		name: "Customer Service Chatbot",
		type: "Text Classification",
		status: "done",
		progress: 100,
		datasetSize: "15,000 samples",
		accuracy: "94.2%",
		created: "2024-12-15",
		lastModified: "2024-12-28",
		description: "AI chatbot untuk customer service e-commerce",
	},
	{
		id: 2,
		name: "Product Recommendation Engine",
		type: "Recommendation System",
		status: "labeling",
		progress: 65,
		datasetSize: "50,000 samples",
		accuracy: "Training...",
		created: "2024-12-20",
		lastModified: "2 hours ago",
		description: "Sistem rekomendasi produk berdasarkan behavior pelanggan",
	},
	{
		id: 3,
		name: "Financial Report Generator",
		type: "Document Processing",
		status: "preprocessing",
		progress: 35,
		datasetSize: "3,200 documents",
		accuracy: "Processing...",
		created: "2024-12-25",
		lastModified: "1 day ago",
		description: "Otomatisasi laporan keuangan dari data transaksi",
	},
	{
		id: 4,
		name: "Content Moderation AI",
		type: "Image Classification",
		status: "uploaded",
		progress: 15,
		datasetSize: "25,000 images",
		accuracy: "Pending...",
		created: "2024-12-30",
		lastModified: "3 hours ago",
		description: "AI untuk moderasi konten visual di platform sosial media",
	},
	{
		id: 5,
		name: "Sentiment Analysis Tool",
		type: "NLP Analysis",
		status: "draft",
		progress: 0,
		datasetSize: "Not uploaded",
		accuracy: "Not started",
		created: "2025-01-02",
		lastModified: "Just now",
		description: "Analisis sentimen untuk review produk dan feedback pelanggan",
	},
	{
		id: 6,
		name: "Invoice Data Extractor",
		type: "OCR & NLP",
		status: "done",
		progress: 100,
		datasetSize: "8,500 invoices",
		accuracy: "96.8%",
		created: "2024-11-30",
		lastModified: "2024-12-20",
		description: "Ekstraksi data otomatis dari invoice dan dokumen keuangan",
	},
];

const statusConfig: Record<string, {
	label: string;
	color: string;
	icon: React.ReactNode;
	bgColor: string;
}> = {
	draft: {
		label: "Draft",
		color: "bg-gray-100 text-gray-800",
		icon: <Eye size={16} />,
		bgColor: "bg-gray-50",
	},
	uploaded: {
		label: "Uploaded",
		color: "bg-blue-100 text-blue-800",
		icon: <Clock size={16} />,
		bgColor: "bg-blue-50",
	},
	preprocessing: {
		label: "Preprocessing",
		color: "bg-yellow-100 text-yellow-800",
		icon: <PlayCircle size={16} />,
		bgColor: "bg-yellow-50",
	},
	labeling: {
		label: "Labeling",
		color: "bg-purple-100 text-purple-800",
		icon: <AlertCircle size={16} />,
		bgColor: "bg-purple-50",
	},
	done: {
		label: "Done",
		color: "bg-green-100 text-green-800",
		icon: <CheckCircle size={16} />,
		bgColor: "bg-green-50",
	},
};

export default function DashboardClient({ user }: { user: { email?: string } | null }) {
	// Handlers for actions
	const handleDownloadResult = (projectName: string) => {
		alert(`Downloading high-quality dataset for "${projectName}"\n\nDataset siap digunakan untuk production!`);
	};

	const handleRequestDeploy = (projectName: string) => {
		alert(`Deploy request untuk "${projectName}" telah dikirim!\n\nTim kami akan menghubungi Anda dalam 1x24 jam untuk membahas deployment AI model ke production environment.`);
	};

	const handleCreateProject = () => {
		window.location.href = "/project/create";
	};

	return (
		<div className="min-h-screen bg-white flex">
			<Sidebar />
			<div className="flex-1 flex flex-co pl-[250px] pt-20">
				<Topbar user={user} />
				{/* Stats Cards */}
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
					<div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
						<div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
							<div className="flex items-center justify-between">
								<div>
									<p className="text-sm font-medium text-slate-600">Total Projects</p>
									<p className="text-2xl font-bold text-slate-900">{aiProjects.length}</p>
								</div>
								<div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
									<PlayCircle className="text-blue-600" size={24} />
								</div>
							</div>
						</div>
						<div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
							<div className="flex items-center justify-between">
								<div>
									<p className="text-sm font-medium text-slate-600">Completed</p>
									<p className="text-2xl font-bold text-green-600">{aiProjects.filter(p => p.status === 'done').length}</p>
								</div>
								<div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
									<CheckCircle className="text-green-600" size={24} />
								</div>
							</div>
						</div>
						<div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
							<div className="flex items-center justify-between">
								<div>
									<p className="text-sm font-medium text-slate-600">In Progress</p>
									<p className="text-2xl font-bold text-yellow-600">{aiProjects.filter(p => ['preprocessing', 'labeling', 'uploaded'].includes(p.status)).length}</p>
								</div>
								<div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
									<Clock className="text-yellow-600" size={24} />
								</div>
							</div>
						</div>
						<div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
							<div className="flex items-center justify-between">
								<div>
									<p className="text-sm font-medium text-slate-600">Draft</p>
									<p className="text-2xl font-bold text-slate-600">{aiProjects.filter(p => p.status === 'draft').length}</p>
								</div>
								<div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
									<Eye className="text-slate-600" size={24} />
								</div>
							</div>
						</div>
					</div>

					{/* Projects Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{aiProjects.map((project) => (
							<div
								key={project.id}
								className="bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-lg transition-all duration-200 overflow-hidden"
							>
								{/* Project Header */}
								<div
									className={`px-6 py-4 ${statusConfig[project.status]?.bgColor} border-b border-slate-200`}
								>
									<div className="flex items-center justify-between mb-2">
										<span
											className={`inline-flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full ${statusConfig[project.status]?.color}`}
										>
											{statusConfig[project.status]?.icon}
											{statusConfig[project.status]?.label}
										</span>
										<span className="text-xs text-slate-500">
											{project.lastModified}
										</span>
									</div>
									<h3 className="font-bold text-slate-900 text-lg mb-1">
										{project.name}
									</h3>
									<p className="text-sm text-slate-600">
										{project.description}
									</p>
								</div>

								{/* Project Body */}
								<div className="px-6 py-4">
									<div className="space-y-3">
										<div className="flex justify-between items-center">
											<span className="text-sm font-medium text-slate-700">Type:</span>
											<span className="text-sm text-slate-600">{project.type}</span>
										</div>
										<div className="flex justify-between items-center">
											<span className="text-sm font-medium text-slate-700">Dataset:</span>
											<span className="text-sm text-slate-600">{project.datasetSize}</span>
										</div>
										<div className="flex justify-between items-center">
											<span className="text-sm font-medium text-slate-700">Accuracy:</span>
											<span className="text-sm text-slate-600">{project.accuracy}</span>
										</div>
										{/* Progress Bar */}
										<div className="space-y-1">
											<div className="flex justify-between items-center">
												<span className="text-sm font-medium text-slate-700">Progress:</span>
												<span className="text-sm text-slate-600">{project.progress}%</span>
											</div>
											<div className="w-full bg-slate-200 rounded-full h-2">
												<div
													className="bg-gradient-to-r from-[#3a1152] via-purple-600 to-yellow-400 h-2 rounded-full transition-all duration-500"
													style={{ width: `${project.progress}%` }}
												></div>
											</div>
										</div>
									</div>
								</div>

								{/* Action Buttons - Only show if status is 'done' */}
								{project.status === "done" && (
									<div className="px-6 py-4 bg-slate-50 border-t border-slate-200">
										<div className="flex gap-2">
											<button
												onClick={() => handleDownloadResult(project.name)}
												className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-colors"
											>
												<Download size={16} />
												Download Result
											</button>
											<button
												onClick={() => handleRequestDeploy(project.name)}
												className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-700 transition-colors"
											>
												<Rocket size={16} />
												Deploy AI
											</button>
										</div>
									</div>
								)}
							</div>
						))}

						{/* Create New Project Card */}
						<div
							onClick={handleCreateProject}
							className="bg-white rounded-xl border-2 border-dashed border-slate-300 hover:border-[#3a1152] hover:bg-purple-50/50 transition-all duration-200 cursor-pointer flex flex-col items-center justify-center p-8 min-h-[300px]"
						>
							<div className="w-16 h-16 bg-gradient-to-r from-[#3a1152] via-purple-600 to-yellow-400 rounded-full flex items-center justify-center mb-4">
								<Plus className="text-white" size={32} />
							</div>
							<h3 className="font-bold text-slate-900 text-lg mb-2">
								Create New AI Project
							</h3>
							<p className="text-sm text-slate-600 text-center">
								Upload data dan mulai membangun AI model custom untuk bisnis Anda
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
