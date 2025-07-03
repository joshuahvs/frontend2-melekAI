// components/dashboard/CreateProjectClient.tsx
"use client";

import { useState } from "react";
import {
  Search,
  Filter,
  ChevronDown,
  Target,
  BarChart3,
  Eye,
  Layers,
  Hash,
  Video,
  Sparkles,
  Microscope,
  MessageSquare,
} from "lucide-react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";

interface User {
  email?: string;
}

interface Props {
  user: User | null;
}

export default function CreateProjectClient({ user }: Props) {
  const [selectedDataType, setSelectedDataType] = useState("All");
  const [selectedUseCase, setSelectedUseCase] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null);

  const dataTypes = ["All", "Image", "Text", "Video", "Audio", "PDF"];
  const useCases = [
    "All",
    "Object Detection",
    "Content Classification",
    "Semantic Segmentation",
    "Named Entity Recognition",
    "Object & Event Detection",
    "Text Generation",
  ];

  const projectTemplates = [
    {
      id: 1,
      title: 'Visual Object Detection',
      description: 'Identify and locate objects within images using advanced bounding box techniques',
      dataType: 'Image',
      useCase: 'Object Detection',
      icon: <Target className="w-12 h-12 text-blue-500" />,
      preview: (
        <div className="relative w-full h-32 bg-gradient-to-br from-purple-900 to-blue-900 rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute top-4 left-4 w-16 h-12 border-2 border-cyan-400 rounded"></div>
          <div className="absolute top-6 right-6 w-12 h-8 border-2 border-pink-400 rounded"></div>
          <div className="absolute bottom-4 left-8 w-20 h-10 border-2 border-green-400 rounded"></div>
        </div>
      ),
      tags: ['Computer Vision', 'Detection']
    },
    {
      id: 2,
      title: 'Content Classification',
      description: 'Categorize and analyze text content with intelligent classification algorithms',
      dataType: 'Text',
      useCase: 'Content Classification',
      icon: <BarChart3 className="w-12 h-12 text-green-500" />,
      preview: (
        <div className="w-full h-32 bg-gradient-to-br from-green-900 to-emerald-900 rounded-lg flex items-center justify-center">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <div className="w-16 h-2 bg-green-400/60 rounded"></div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-12 h-2 bg-yellow-400/60 rounded"></div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="w-8 h-2 bg-red-400/60 rounded"></div>
            </div>
          </div>
        </div>
      ),
      tags: ['NLP', 'Classification']
    },
    {
      id: 3,
      title: 'Smart Image Analysis',
      description: 'Advanced image recognition and content analysis with AI-powered insights',
      dataType: 'Image',
      useCase: 'Content Classification',
      icon: <Eye className="w-12 h-12 text-purple-500" />,
      preview: (
        <div className="w-full h-32 bg-gradient-to-br from-purple-900 to-indigo-900 rounded-lg flex items-center justify-center">
          <div className="relative">
            <div className="w-20 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg opacity-80"></div>
            <div className="absolute -top-1 -right-1 w-8 h-6 bg-white rounded text-xs flex items-center justify-center text-purple-900 font-bold">AI</div>
          </div>
        </div>
      ),
      tags: ['Computer Vision', 'AI Analysis']
    },
    {
      id: 4,
      title: 'Semantic Segmentation',
      description: 'Pixel-level understanding and segmentation of image components',
      dataType: 'Image',
      useCase: 'Semantic Segmentation',
      icon: <Layers className="w-12 h-12 text-orange-500" />,
      preview: (
        <div className="w-full h-32 bg-gradient-to-br from-orange-900 to-red-900 rounded-lg overflow-hidden">
          <div className="flex h-full">
            <div className="w-1/3 bg-gradient-to-b from-orange-400 to-orange-600 opacity-70"></div>
            <div className="w-1/3 bg-gradient-to-b from-red-400 to-red-600 opacity-70"></div>
            <div className="w-1/3 bg-gradient-to-b from-pink-400 to-pink-600 opacity-70"></div>
          </div>
        </div>
      ),
      tags: ['Segmentation', 'Pixel Analysis']
    },
    {
      id: 5,
      title: 'Entity Recognition',
      description: 'Extract and identify named entities from text with high precision',
      dataType: 'Text',
      useCase: 'Named Entity Recognition',
      icon: <Hash className="w-12 h-12 text-teal-500" />,
      preview: (
        <div className="w-full h-32 bg-gradient-to-br from-teal-900 to-cyan-900 rounded-lg p-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <div className="text-xs text-blue-400">Person</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <div className="text-xs text-green-400">Location</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <div className="text-xs text-yellow-400">Organization</div>
            </div>
          </div>
        </div>
      ),
      tags: ['NLP', 'Entity Extraction']
    },
    {
      id: 6,
      title: 'Video Analysis',
      description: 'Real-time object tracking and event detection in video streams',
      dataType: 'Video',
      useCase: 'Object & Event Detection',
      icon: <Video className="w-12 h-12 text-indigo-500" />,
      preview: (
        <div className="w-full h-32 bg-gradient-to-br from-indigo-900 to-purple-900 rounded-lg flex items-center justify-center">
          <div className="relative">
            <div className="w-16 h-12 bg-indigo-400 rounded opacity-80"></div>
            <div className="absolute top-1 right-1 w-4 h-3 border border-white rounded"></div>
            <div className="absolute bottom-1 left-1 w-4 h-3 border border-white rounded"></div>
          </div>
        </div>
      ),
      tags: ['Video Processing', 'Real-time']
    },
    {
      id: 7,
      title: 'Multi-Scale Classification',
      description: 'Handle large taxonomies and complex classification hierarchies',
      dataType: 'Image',
      useCase: 'Content Classification',
      icon: <Sparkles className="w-12 h-12 text-yellow-500" />,
      preview: (
        <div className="w-full h-32 bg-gradient-to-br from-yellow-900 to-orange-900 rounded-lg flex items-center justify-center">
          <div className="grid grid-cols-2 gap-2">
            <div className="w-8 h-6 bg-yellow-400 rounded opacity-80"></div>
            <div className="w-8 h-6 bg-orange-400 rounded opacity-80"></div>
            <div className="w-8 h-6 bg-red-400 rounded opacity-80"></div>
            <div className="w-8 h-6 bg-pink-400 rounded opacity-80"></div>
          </div>
        </div>
      ),
      tags: ['Multi-class', 'Hierarchical']
    },
    {
      id: 8,
      title: 'Biological Analysis',
      description: 'Advanced segmentation for biological and medical imaging',
      dataType: 'Image',
      useCase: 'Semantic Segmentation',
      icon: <Microscope className="w-12 h-12 text-emerald-500" />,
      preview: (
        <div className="w-full h-32 bg-gradient-to-br from-emerald-900 to-green-900 rounded-lg flex items-center justify-center">
          <div className="relative">
            <div className="w-16 h-16 border-2 border-emerald-400 rounded-full"></div>
            <div className="absolute top-2 left-2 w-4 h-4 bg-emerald-400 rounded-full opacity-80"></div>
            <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-400 rounded-full opacity-60"></div>
          </div>
        </div>
      ),
      tags: ['Medical', 'Biology']
    },
    {
      id: 9,
      title: 'Conversational AI',
      description: 'Build intelligent chatbots with context-aware response generation',
      dataType: 'Text',
      useCase: 'Text Generation',
      icon: <MessageSquare className="w-12 h-12 text-blue-500" />,
      preview: (
        <div className="w-full h-32 bg-gradient-to-br from-blue-900 to-indigo-900 rounded-lg p-4">
          <div className="space-y-2">
            <div className="flex justify-start">
              <div className="bg-blue-400 rounded-lg px-2 py-1 text-xs">Hello!</div>
            </div>
            <div className="flex justify-end">
              <div className="bg-white rounded-lg px-2 py-1 text-xs text-gray-800">How can I help?</div>
            </div>
          </div>
        </div>
      ),
      tags: ['Chatbot', 'Generation']
    }
  ];

  const filteredTemplates = projectTemplates.filter((template) => {
    const matchesDataType =
      selectedDataType === "All" || template.dataType === selectedDataType;
    const matchesUseCase =
      selectedUseCase === "All" || template.useCase === selectedUseCase;
    const matchesSearch =
      searchQuery === "" ||
      template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesDataType && matchesUseCase && matchesSearch;
  });

  return (
    <DashboardLayout user={user}>
      <div className="min-h-screen p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-4xl font-bold text-black">
              Create New Project
            </h1>
            <button className="px-6 py-3 bg-[#3a1152] text-white rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all shadow-lg">
              Request Template
            </button>
          </div>

          <div className="mb-8 space-y-4">
            <div className="flex gap-4 items-center">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search templates..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 text-gray-500 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-3 text-gray-500 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Filter className="w-5 h-5" />
                Filter
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    showFilters ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>

            {showFilters && (
              <div className="bg-white p-6 rounded-lg shadow-sm border space-y-4">
                <div>
                  <h3 className="text-sm font-semibold text-gray-700 mb-3">
                    Data Type
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {dataTypes.map((type) => (
                      <button
                        key={type}
                        onClick={() => setSelectedDataType(type)}
                        className={`px-4 py-2 rounded-full text-sm transition-all ${
                          selectedDataType === type
                            ? "bg-purple-500 text-white shadow-lg"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-700 mb-3">
                    Use Case
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {useCases.map((useCase) => (
                      <button
                        key={useCase}
                        onClick={() => setSelectedUseCase(useCase)}
                        className={`px-4 py-2 rounded-full text-sm transition-all ${
                          selectedUseCase === useCase
                            ? "bg-blue-500 text-white shadow-lg"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {useCase}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTemplates.map((template) => (
              <div
                key={template.id}
                onClick={() => setSelectedTemplate(template.id)}
                className={`bg-white rounded-xl shadow-sm border-2 transition-all duration-300 cursor-pointer hover:shadow-lg hover:scale-105 ${
                  selectedTemplate === template.id
                    ? "border-purple-500 ring-4 ring-purple-100"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    {template.icon}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {template.title}
                      </h3>
                      <div className="flex gap-2 mt-1">
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          {template.dataType}
                        </span>
                        <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
                          {template.useCase}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">{template.preview}</div>

                  <p className="text-sm text-gray-600 mb-4">
                    {template.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {template.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {selectedTemplate && (
            <div className="fixed bottom-8 right-8">
              <button className="px-8 py-4 bg-[#3a1152] from-purple-500 to-blue-500 text-white rounded-full hover:from-purple-600 hover:to-blue-600 transition-all shadow-lg hover:shadow-xl text-lg font-semibold">
                Create Project
              </button>
            </div>
          )}

          {filteredTemplates.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No templates found
              </h3>
              <p className="text-gray-500">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
