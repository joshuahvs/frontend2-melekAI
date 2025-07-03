"use client";

import { useState } from "react";
import {
  Search,
  Target,
  BarChart3,
  Eye,
  Layers,
  Hash,
  Video,
  MessageSquare,
  ArrowLeft,
  FileText,
  FileSpreadsheet,
  Upload,
} from "lucide-react";
import Image from "next/image";
import ProjectSidebar from "./Sidebar";
import ProjectTopbar from "./Topbar";

type User = { email?: string } | null;

interface CreateProjectClientProps {
  user: User;
}

const CreateProjectClient: React.FC<CreateProjectClientProps> = ({ user }) => {
  // Prevent unused variable warning
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const _user = user;

  const [step, setStep] = useState(1); // 1: Select Template, 2: Create Project Form
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null);
  
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    dataType: "image", // default to image
  });
  
  // Template selection filters
  const [selectedDataType, setSelectedDataType] = useState("All");
  const [selectedUseCase, setSelectedUseCase] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);

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

  const projectDataTypes = [
    { value: "image", label: "Image", icon: <Image src="/file.svg" width={20} height={20} alt="Image" /> },
    { value: "text", label: "Text", icon: <FileText className="w-5 h-5" aria-hidden="true" /> },
    { value: "document", label: "Document", icon: <FileText className="w-5 h-5" aria-hidden="true" /> },
    { value: "csv", label: "CSV", icon: <FileSpreadsheet className="w-5 h-5" aria-hidden="true" /> },
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
      tags: ['Computer Vision', 'Detection'],
      recommendedDataType: 'image'
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
      tags: ['NLP', 'Classification'],
      recommendedDataType: 'text'
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
      tags: ['Computer Vision', 'AI Analysis'],
      recommendedDataType: 'image'
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
      tags: ['Segmentation', 'Pixel Analysis'],
      recommendedDataType: 'image'
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
      tags: ['NLP', 'Entity Extraction'],
      recommendedDataType: 'text'
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
      tags: ['Video Processing', 'Real-time'],
      recommendedDataType: 'image'
    },
    {
      id: 7,
      title: 'Document OCR',
      description: 'Extract text from documents and images with high accuracy OCR',
      dataType: 'Document',
      useCase: 'Text Generation',
      icon: <FileText className="w-12 h-12 text-blue-500" />,
      preview: (
        <div className="w-full h-32 bg-gradient-to-br from-blue-900 to-indigo-900 rounded-lg p-4">
          <div className="space-y-2">
            <div className="w-full h-2 bg-blue-400 rounded opacity-80"></div>
            <div className="w-3/4 h-2 bg-blue-400 rounded opacity-60"></div>
            <div className="w-full h-2 bg-blue-400 rounded opacity-80"></div>
            <div className="w-1/2 h-2 bg-blue-400 rounded opacity-60"></div>
          </div>
        </div>
      ),
      tags: ['OCR', 'Document Processing'],
      recommendedDataType: 'document'
    },
    {
      id: 8,
      title: 'Sentiment Analysis',
      description: 'Analyze emotional tone and sentiment in text data',
      dataType: 'Text',
      useCase: 'Content Classification',
      icon: <MessageSquare className="w-12 h-12 text-green-500" />,
      preview: (
        <div className="w-full h-32 bg-gradient-to-br from-green-900 to-emerald-900 rounded-lg p-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="text-green-400 text-lg">😊</div>
              <div className="w-16 h-2 bg-green-400 rounded"></div>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-yellow-400 text-lg">😐</div>
              <div className="w-8 h-2 bg-yellow-400 rounded"></div>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-red-400 text-lg">😢</div>
              <div className="w-4 h-2 bg-red-400 rounded"></div>
            </div>
          </div>
        </div>
      ),
      tags: ['Sentiment', 'NLP'],
      recommendedDataType: 'text'
    },
    {
      id: 9,
      title: 'CSV Data Analysis',
      description: 'Analyze and classify structured data from CSV files',
      dataType: 'CSV',
      useCase: 'Content Classification',
      icon: <FileSpreadsheet className="w-12 h-12 text-purple-500" />,
      preview: (
        <div className="w-full h-32 bg-gradient-to-br from-purple-900 to-indigo-900 rounded-lg p-4">
          <div className="grid grid-cols-3 gap-2">
            <div className="space-y-1">
              <div className="w-full h-2 bg-purple-400 rounded"></div>
              <div className="w-full h-2 bg-purple-300 rounded"></div>
              <div className="w-full h-2 bg-purple-300 rounded"></div>
            </div>
            <div className="space-y-1">
              <div className="w-full h-2 bg-indigo-400 rounded"></div>
              <div className="w-full h-2 bg-indigo-300 rounded"></div>
              <div className="w-full h-2 bg-indigo-300 rounded"></div>
            </div>
            <div className="space-y-1">
              <div className="w-full h-2 bg-blue-400 rounded"></div>
              <div className="w-full h-2 bg-blue-300 rounded"></div>
              <div className="w-full h-2 bg-blue-300 rounded"></div>
            </div>
          </div>
        </div>
      ),
      tags: ['Data Analysis', 'CSV'],
      recommendedDataType: 'csv'
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

  const handleTemplateSelect = (templateId: number) => {
    setSelectedTemplate(templateId);
    const template = projectTemplates.find(t => t.id === templateId);
    if (template) {
      setFormData(prev => ({
        ...prev,
        dataType: template.recommendedDataType
      }));
    }
  };

  const handleNextStep = () => {
    if (selectedTemplate) {
      setStep(2);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically make an API call to create the project
    console.log('Creating project with:', {
      templateId: selectedTemplate,
      ...formData
    });
    
    // Simulate API call
    setTimeout(() => {
      // Redirect to project upload page
      // window.location.href = `/project/${Math.random().toString(36).substr(2, 9)}`;
      alert('Project created! Redirecting to upload page...');
    }, 1000);
  };

  const handleRequestTemplate = () => {
    // Implement request template logic here (e.g., open modal)
    alert('Request template feature coming soon!');
  };

  const selectedTemplateData = projectTemplates.find(t => t.id === selectedTemplate);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#3a1152] to-yellow-50 flex flex-col">
      <ProjectTopbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        showFilters={showFilters}
        setShowFilters={setShowFilters}
        onRequestTemplate={handleRequestTemplate}
      />
      <div className="flex flex-1">
        {/* Sidebar: normal block, not sticky/fixed, always starts below topbar */}
        <aside className="hidden md:block w-64">
          <ProjectSidebar />
        </aside>
        <main className="flex-1 p-6 md:p-10 bg-white/90 min-h-[calc(100vh-72px)]">
          <div className="max-w-5xl mx-auto">
            {step === 1 ? (
              // Step 1: Template Selection
              <>
                <div className="mb-8 space-y-4">
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
                      onClick={() => handleTemplateSelect(template.id)}
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
                    <button 
                      onClick={handleNextStep}
                      className="px-8 py-4 bg-[#3a1152] text-white rounded-full hover:bg-purple-700 transition-all shadow-lg hover:shadow-xl text-lg font-semibold"
                    >
                      Continue →
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
              </>
            ) : (
              // Step 2: Project Creation Form
              <>
                <div className="flex items-center gap-4 mb-8">
                  <button
                    onClick={() => setStep(1)}
                    className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    <ArrowLeft className="w-5 h-5" />
                    Back to Templates
                  </button>
                  <h1 className="text-4xl font-bold text-black">
                    Project Details
                  </h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Selected Template Preview */}
                  <div className="lg:col-span-1">
                    <div className="bg-white rounded-xl shadow-sm border-2 border-purple-500 p-6 sticky top-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Selected Template</h3>
                      {selectedTemplateData && (
                        <div>
                          <div className="flex items-center gap-3 mb-4">
                            {selectedTemplateData.icon}
                            <div>
                              <h4 className="font-semibold text-gray-900">
                                {selectedTemplateData.title}
                              </h4>
                              <div className="flex gap-2 mt-1">
                                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                  {selectedTemplateData.dataType}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="mb-4">{selectedTemplateData.preview}</div>
                          <p className="text-sm text-gray-600 mb-4">
                            {selectedTemplateData.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {selectedTemplateData.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-xs bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 px-2 py-1 rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Project Form */}
                  <div className="lg:col-span-2">
                    <div className="bg-white rounded-xl shadow-sm border p-8">
                      <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Project Name */}
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            🔤 Project Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                            placeholder="Enter your project name"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          />
                        </div>

                        {/* Description */}
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            📝 Description
                          </label>
                          <textarea
                            value={formData.description}
                            onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                            placeholder="Describe your project goals and requirements"
                            rows={4}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          />
                        </div>

                        {/* Data Type */}
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            📂 Data Type *
                          </label>
                          <div className="grid grid-cols-2 gap-3">
                            {projectDataTypes.map((type) => (
                              <button
                                key={type.value}
                                type="button"
                                onClick={() => setFormData(prev => ({ ...prev, dataType: type.value }))}
                                className={`flex items-center gap-3 p-4 border-2 rounded-lg transition-all ${
                                  formData.dataType === type.value
                                    ? "border-purple-500 bg-purple-50 text-purple-700"
                                    : "border-gray-200 hover:border-gray-300"
                                }`}
                              >
                                {type.icon}
                                <span className="font-medium">{type.label}</span>
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Submit Button */}
                        <div className="flex gap-4 pt-6">
                          <button
                            type="button"
                            onClick={() => setStep(1)}
                            className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                          >
                            Back
                          </button>
                          <button
                            type="submit"
                            className="flex-1 px-6 py-3 bg-[#3a1152] text-white rounded-lg hover:bg-purple-700 transition-all shadow-lg flex items-center justify-center gap-2"
                          >
                            <Upload className="w-5 h-5" />
                            Create Project
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default CreateProjectClient;