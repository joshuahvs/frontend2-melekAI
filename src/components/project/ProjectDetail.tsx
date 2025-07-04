"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Upload,
  FileText,
  Loader2,
  FileSpreadsheet,
  ChevronRight,
  Eye,
  Play,
  BarChart3,
  FileDown,
  Bot,
  Tag,
  FileCheck,
  Users,
} from "lucide-react";
import ProjectSidebar from "./Sidebar";
import ProjectDetailTopbar from "./ProjectDetailTopbar";
import type { ReactElement } from "react";

interface Project {
  id: string;
  name: string;
  description: string;
  dataType: string;
  step: "upload" | "result";
  template: {
    title: string;
    description: string;
    icon: ReactElement;
    taxonomy: { id: string; label: string; description: string; color: string }[];
    instructions: string;
    aiInstructions: string;
  };
  useCase: string;
  uploadedFiles: { 
    name: string; 
    size: string; 
    status: "uploaded" | "processing" | "completed" | "failed";
    preview?: string;
  }[];
  batchData: {
    id: string;
    name: string;
    totalItems: number;
    labeledItems: number;
    status: "pending" | "in_progress" | "completed" | "failed";
    assignedTo: string;
  }[];
  results?: {
    summary: {
      totalItems: number;
      labeledItems: number;
      accuracy: number;
      topLabels: { label: string; count: number; percentage: number }[];
    };
    data: { id: string; item: string; predictedLabel: string; confidence: number; actualLabel?: string }[];
  };
}

// Hardcoded mock project data untuk Customer Purchase Behavior Analysis
const mockProject: Project = {
  id: "purchase-behavior-001",
  name: "Customer Purchase Behavior Analysis",
  description: "Analisis pola pembelian pelanggan untuk prediksi churn dan rekomendasi produk",
  dataType: "tabular",
  step: "upload",
  template: {
    title: "Customer Behavior Classification",
    description: "Klasifikasi pelanggan berdasarkan pola pembelian untuk identifikasi segmen dan risiko churn",
    icon: <BarChart3 className="w-12 h-12 text-purple-600" />,
    taxonomy: [
      {
        id: "high_value",
        label: "High Value Customer",
        description: "Pelanggan dengan nilai transaksi tinggi dan frekuensi pembelian konsisten",
        color: "bg-green-100 text-green-800"
      },
      {
        id: "regular_customer",
        label: "Regular Customer", 
        description: "Pelanggan dengan pola pembelian normal dan stabil",
        color: "bg-blue-100 text-blue-800"
      },
      {
        id: "at_risk",
        label: "At Risk Customer",
        description: "Pelanggan yang menunjukkan tanda-tanda akan churn",
        color: "bg-yellow-100 text-yellow-800"
      },
      {
        id: "churned",
        label: "Churned Customer",
        description: "Pelanggan yang sudah tidak aktif atau berhenti membeli",
        color: "bg-red-100 text-red-800"
      }
    ],
    instructions: `
    Klasifikasi setiap pelanggan berdasarkan kriteria berikut:

    **High Value Customer:**
    - Total pembelian > 5 juta dalam 6 bulan terakhir
    - Frekuensi pembelian minimal 2x per bulan
    - Rata-rata nilai transaksi > 500rb
    - Membeli produk dari berbagai kategori

    **Regular Customer:**
    - Total pembelian 1-5 juta dalam 6 bulan terakhir
    - Frekuensi pembelian 1x per bulan
    - Rata-rata nilai transaksi 200-500rb
    - Pola pembelian konsisten

    **At Risk Customer:**
    - Tidak ada pembelian dalam 2 bulan terakhir
    - Penurunan frekuensi pembelian > 50%
    - Hanya membeli produk diskon/promo
    - Komplain atau return meningkat

    **Churned Customer:**
    - Tidak ada pembelian dalam 6 bulan terakhir
    - Tidak merespon kampanye marketing
    - Tidak membuka email/notifikasi
    `,
    aiInstructions: "Analisis pola pembelian berdasarkan RFM (Recency, Frequency, Monetary) dan behavior patterns untuk klasifikasi otomatis"
  },
  useCase: "Customer Segmentation & Churn Prediction",
  uploadedFiles: [],
  batchData: [],
  results: undefined
};

// Sample data untuk hasil analisis
const sampleResults = {
  summary: {
    totalItems: 2500,
    labeledItems: 2500,
    accuracy: 87.5,
    topLabels: [
      { label: "Regular Customer", count: 1125, percentage: 45.0 },
      { label: "At Risk Customer", count: 625, percentage: 25.0 },
      { label: "High Value Customer", count: 500, percentage: 20.0 },
      { label: "Churned Customer", count: 250, percentage: 10.0 }
    ]
  },
  data: [
    { id: "CUST001", item: "Ahmad Santoso", predictedLabel: "High Value Customer", confidence: 0.92, actualLabel: "High Value Customer" },
    { id: "CUST002", item: "Siti Nurhaliza", predictedLabel: "Regular Customer", confidence: 0.85, actualLabel: "Regular Customer" },
    { id: "CUST003", item: "Budi Prasetyo", predictedLabel: "At Risk Customer", confidence: 0.78, actualLabel: "At Risk Customer" },
    { id: "CUST004", item: "Maya Sari", predictedLabel: "Churned Customer", confidence: 0.91, actualLabel: "Churned Customer" },
    { id: "CUST005", item: "Rizki Firmansyah", predictedLabel: "High Value Customer", confidence: 0.88, actualLabel: "High Value Customer" }
  ]
};

export default function ProjectDetail() {
  const router = useRouter();
  const [project, setProject] = useState<Project>(mockProject);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [selectedTaxonomy, setSelectedTaxonomy] = useState<string[]>(
    project.template.taxonomy.map(t => t.id)
  );
  const [showInstructions, setShowInstructions] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  // Handle file upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement> | React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsUploading(true);
    setUploadProgress(0);

    const files = 'dataTransfer' in e ? e.dataTransfer.files : e.target.files;
    if (!files || files.length === 0) return;

    const file = files[0];
    
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          
          // Add uploaded file
          setProject((prev) => ({
            ...prev,
            uploadedFiles: [
              ...prev.uploadedFiles,
              {
                name: file.name,
                size: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
                status: "uploaded",
                preview: file.name.includes('csv') ? 'customer_id,total_purchase,frequency,last_purchase_date,category_diversity...' : undefined
              }
            ]
          }));
          
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  // Handle submit and create batches
  const handleSubmit = () => {
    if (project.uploadedFiles.length === 0) return;
    
    setIsProcessing(true);
    
    // Simulate batch creation
    setTimeout(() => {
      setProject((prev) => ({
        ...prev,
        batchData: [
          {
            id: "batch-001",
            name: "Customer Segment Analysis Batch 1",
            totalItems: 2500,
            labeledItems: 2500,
            status: "completed",
            assignedTo: "AI Model + Human Review"
          }
        ]
      }));
      
      // After 3 seconds, show results
      setTimeout(() => {
        setProject((prev) => ({
          ...prev,
          step: "result",
          results: sampleResults
        }));
        setIsProcessing(false);
      }, 3000);
    }, 1000);
  };

  // Handle download results
  const handleDownload = (format: 'csv' | 'json') => {
    const data = project.results?.data || [];
    let content = '';
    let filename = '';
    
    if (format === 'csv') {
      content = 'Customer ID,Customer Name,Predicted Label,Confidence,Actual Label\n';
      content += data.map(item => 
        `${item.id},${item.item},${item.predictedLabel},${item.confidence},${item.actualLabel || ''}`
      ).join('\n');
      filename = 'customer_analysis_results.csv';
    } else {
      content = JSON.stringify(data, null, 2);
      filename = 'customer_analysis_results.json';
    }
    
    const blob = new Blob([content], { type: format === 'csv' ? 'text/csv' : 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Render upload step
  const renderUploadStep = () => (
    <div className="space-y-8">
      {/* Taxonomy Review */}
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex items-center gap-2 mb-4">
          <Tag className="w-5 h-5 text-purple-600" />
          <h3 className="text-lg font-semibold text-gray-800">Taxonomy Review</h3>
        </div>
        <p className="text-gray-600 mb-4">Review dan sesuaikan label yang akan digunakan untuk klasifikasi</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.template.taxonomy.map((tax) => (
            <div key={tax.id} className="border rounded-lg p-4">
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={selectedTaxonomy.includes(tax.id)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedTaxonomy([...selectedTaxonomy, tax.id]);
                    } else {
                      setSelectedTaxonomy(selectedTaxonomy.filter(id => id !== tax.id));
                    }
                  }}
                  className="mt-1"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${tax.color}`}>
                      {tax.label}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{tax.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Instructions Preview */}
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-purple-600" />
            <h3 className="text-lg font-semibold text-gray-800">Instructions Preview</h3>
          </div>
          <button
            onClick={() => setShowInstructions(!showInstructions)}
            className="flex items-center gap-2 text-purple-600 hover:text-purple-700"
          >
            <Eye className="w-4 h-4" />
            {showInstructions ? 'Hide' : 'Show'} Instructions
          </button>
        </div>
        
        {showInstructions && (
          <div className="bg-gray-50 p-4 rounded-lg">
            <pre className="text-sm text-gray-700 whitespace-pre-wrap">{project.template.instructions}</pre>
            <div className="mt-4 p-3 bg-blue-50 rounded border-l-4 border-blue-400">
              <p className="text-sm text-blue-800">
                <strong>AI Instructions:</strong> {project.template.aiInstructions}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Upload Data */}
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex items-center gap-2 mb-4">
          <Upload className="w-5 h-5 text-purple-600" />
          <h3 className="text-lg font-semibold text-gray-800">Upload Data</h3>
        </div>
        <p className="text-gray-600 mb-4">Upload dataset historis pembelian pelanggan (CSV/Excel)</p>
        
        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center ${isUploading ? "bg-gray-50" : "bg-white"}`}
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleFileUpload}
        >
          <input
            type="file"
            className="hidden"
            id="file-upload"
            accept=".csv,.xlsx,.xls"
            onChange={handleFileUpload}
          />
          <label htmlFor="file-upload" className="cursor-pointer">
            {isUploading ? (
              <div className="space-y-4">
                <Loader2 className="w-8 h-8 animate-spin text-purple-600 mx-auto" />
                <p className="text-gray-600">Uploading... {uploadProgress}%</p>
              </div>
            ) : (
              <div className="space-y-4">
                <FileSpreadsheet className="w-12 h-12 text-gray-400 mx-auto" />
                <p className="text-gray-600">Drag and drop your CSV/Excel file here or click to browse</p>
                <p className="text-sm text-gray-500">Format: customer_id, total_purchase, frequency, last_purchase_date, etc.</p>
                <button className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">Browse Files</button>
              </div>
            )}
          </label>
        </div>

        {/* Uploaded Files */}
        {project.uploadedFiles.length > 0 && (
          <div className="mt-6">
            <h4 className="font-medium text-gray-800 mb-3">Uploaded Files</h4>
            <div className="space-y-2">
              {project.uploadedFiles.map((file, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <FileSpreadsheet className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="font-medium text-gray-800">{file.name}</p>
                      <p className="text-sm text-gray-600">{file.size}</p>
                      {file.preview && (
                        <p className="text-xs text-gray-500 mt-1">Preview: {file.preview}</p>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      file.status === 'uploaded' ? 'bg-green-100 text-green-800' :
                      file.status === 'processing' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {file.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Submit Button */}
      <div className="flex justify-end">
        <button
          onClick={handleSubmit}
          disabled={project.uploadedFiles.length === 0 || isProcessing}
          className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2"
        >
          {isProcessing ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Processing...
            </>
          ) : (
            <>
              <Play className="w-5 h-5" />
              Submit & Create Batches
            </>
          )}
        </button>
      </div>

      {/* Processing Status */}
      {project.batchData.length > 0 && (
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center gap-2 mb-4">
            <Users className="w-5 h-5 text-purple-600" />
            <h3 className="text-lg font-semibold text-gray-800">Batch Status</h3>
          </div>
          <div className="space-y-3">
            {project.batchData.map((batch) => (
              <div key={batch.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-800">{batch.name}</p>
                  <p className="text-sm text-gray-600">{batch.labeledItems}/{batch.totalItems} items completed</p>
                  <p className="text-sm text-gray-600">Assigned to: {batch.assignedTo}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  batch.status === 'completed' ? 'bg-green-100 text-green-800' :
                  batch.status === 'in_progress' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {batch.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  // Render results step
  const renderResultsStep = () => (
    <div className="space-y-8">
      {/* Summary */}
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex items-center gap-2 mb-4">
          <BarChart3 className="w-5 h-5 text-purple-600" />
          <h3 className="text-lg font-semibold text-gray-800">Analysis Summary</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-800">{project.results?.summary.totalItems}</p>
            <p className="text-sm text-gray-600">Total Customers</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-800">{project.results?.summary.labeledItems}</p>
            <p className="text-sm text-gray-600">Analyzed</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-green-600">{project.results?.summary.accuracy}%</p>
            <p className="text-sm text-gray-600">Accuracy</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-purple-600">{project.results?.summary.topLabels.length}</p>
            <p className="text-sm text-gray-600">Segments</p>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="font-medium text-gray-800">Customer Segments Distribution</h4>
          {project.results?.summary.topLabels.map((label, index) => (
            <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
              <span className="text-sm font-medium text-gray-800">{label.label}</span>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">{label.count} customers</span>
                <span className="text-sm font-medium text-purple-600">{label.percentage}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Results Table */}
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <FileCheck className="w-5 h-5 text-purple-600" />
            <h3 className="text-lg font-semibold text-gray-800">Customer Analysis Results</h3>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => handleDownload('csv')}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              <FileDown className="w-4 h-4" />
              Download CSV
            </button>
            <button
              onClick={() => handleDownload('json')}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              <FileDown className="w-4 h-4" />
              Download JSON
            </button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="p-3 text-sm font-medium text-gray-600">Customer ID</th>
                <th className="p-3 text-sm font-medium text-gray-600">Customer Name</th>
                <th className="p-3 text-sm font-medium text-gray-600">Predicted Segment</th>
                <th className="p-3 text-sm font-medium text-gray-600">Confidence</th>
                <th className="p-3 text-sm font-medium text-gray-600">Actual Segment</th>
              </tr>
            </thead>
            <tbody>
              {project.results?.data.map((result) => (
                <tr key={result.id} className="border-b border-gray-100">
                  <td className="p-3 text-sm font-medium text-gray-800">{result.id}</td>
                  <td className="p-3 text-sm text-gray-700">{result.item}</td>
                  <td className="p-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      result.predictedLabel === 'High Value Customer' ? 'bg-green-100 text-green-800' :
                      result.predictedLabel === 'Regular Customer' ? 'bg-blue-100 text-blue-800' :
                      result.predictedLabel === 'At Risk Customer' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {result.predictedLabel}
                    </span>
                  </td>
                  <td className="p-3">
                    <span className={`text-sm font-medium ${
                      result.confidence >= 0.8 ? 'text-green-600' :
                      result.confidence >= 0.6 ? 'text-yellow-600' :
                      'text-red-600'
                    }`}>
                      {(result.confidence * 100).toFixed(1)}%
                    </span>
                  </td>
                  <td className="p-3">
                    {result.actualLabel ? (
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        result.actualLabel === 'High Value Customer' ? 'bg-green-100 text-green-800' :
                        result.actualLabel === 'Regular Customer' ? 'bg-blue-100 text-blue-800' :
                        result.actualLabel === 'At Risk Customer' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {result.actualLabel}
                      </span>
                    ) : (
                      <span className="text-sm text-gray-400">-</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Build AI Model */}
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex items-center gap-2 mb-4">
          <Bot className="w-5 h-5 text-purple-600" />
          <h3 className="text-lg font-semibold text-gray-800">Build AI Model</h3>
        </div>
        <p className="text-gray-600 mb-4">
          Create a custom AI model based on this analysis to automatically classify future customers
        </p>
        <button
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700"
          onClick={() => router.push("/book-demo")}
        >
          <Bot className="w-5 h-5" />
          Request to Build AI Model
        </button>
      </div>
    </div>
  );

  const handleExitProject = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <ProjectDetailTopbar projectName={project.name} onExitProject={handleExitProject} />
      <div className="flex flex-1 mt-16">
        <aside className="hidden md:block w-64">
          <ProjectSidebar />
        </aside>
        <main className="flex-1 p-6 md:p-10 bg-white/90 min-h-[calc(100vh-72px)]">
          <div className="max-w-6xl mx-auto">
            {/* Project Info */}
            <div className="bg-white p-6 rounded-lg shadow mb-6">
              <div className="flex items-center gap-4 mb-4">
                {project.template.icon}
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">{project.template.title}</h2>
                  <p className="text-gray-600">{project.template.description}</p>
                </div>
              </div>
              {/* Step Indicator */}
              <div className="flex items-center gap-4 mt-4">
                <div className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                  project.step === "upload" ? "bg-purple-100 text-purple-800" : "bg-gray-100 text-gray-600"
                }`}>
                  <Upload className="w-4 h-4" />
                  <span className="font-medium">Upload & Setup</span>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400" />
                <div className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                  project.step === "result" ? "bg-purple-100 text-purple-800" : "bg-gray-100 text-gray-600"
                }`}>
                  <BarChart3 className="w-4 h-4" />
                  <span className="font-medium">Results</span>
                </div>
              </div>
            </div>
            {/* Step Content */}
            {project.step === "upload" ? renderUploadStep() : renderResultsStep()}
          </div>
        </main>
      </div>
    </div>
  );
}