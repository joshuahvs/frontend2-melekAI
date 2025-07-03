/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState } from "react";
import Image from "next/image";

export default function BookDemoClient() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    phone: "",
    jobTitle: "",
    budget: "",
    helpType: "",
    description: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/send-demo-email", {
      method: "POST",
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setSuccess(true);
      setFormData({
        fullName: "",
        email: "",
        company: "",
        phone: "",
        jobTitle: "",
        budget: "",
        helpType: "",
        description: "",
      });
    } else {
      alert("Terjadi kesalahan saat mengirim data.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 mt-8">
      <div className="max-w-6xl w-full shadow-xl rounded-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Gambar */}
        <div className="relative hidden md:block">
          <Image
            src="/book-demo-image.jpg"
            alt="Demo Illustration"
            fill
            className="object-cover"
          />
        </div>

        {/* Form */}
        <div className="p-8 md:p-12">
          <h1 className="text-3xl font-bold text-white mb-6">Konsultasi Sekarang</h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {[
              ["fullName", "Nama Lengkap"],
              ["email", "Email"],
              ["company", "Perusahaan"],
              ["phone", "No Telepon"],
              ["jobTitle", "Jabatan"],
            ].map(([key, label]) => (
              <div key={key}>
                <label className="block text-sm font-medium text-white mb-1">{label}</label>
                <input
                  type="text"
                  name={key}
                  value={(formData as any)[key]}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
                />
              </div>
            ))}

            {/* Budget */}
            <div>
              <label className="block text-sm font-medium text-white mb-2">Budget Project</label>
              <div className="grid grid-cols-2 gap-3">
                {["<50jt", "50-250jt", "250jt-1m", "1m+"].map((option) => (
                  <label key={option} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="budget"
                      value={option}
                      checked={formData.budget === option}
                      onChange={handleChange}
                      required
                      className="accent-violet-600"
                    />
                    <span className="text-sm text-white">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Help type */}
            <div>
              <label className="block text-sm font-medium text-white mb-1">Apa yang dapat kami bantu?</label>
              <select
                name="helpType"
                value={formData.helpType}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
              >
                <option value="">Pilih</option>
                <option value="Data Labeling">Data Labeling</option>
                <option value="Model Evaluation">Model Evaluation</option>
                <option value="Annotation Platform">Annotation Platform</option>
                <option value="Custom Project">Custom Project</option>
              </select>
            </div>

            {/* Deskripsi */}
            <div>
              <label className="block text-sm font-medium text-white mb-1">Deskripsi</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={5}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
            </div>

            {/* Submit */}
            <div className="text-end">
              <button
                type="submit"
                className="bg-violet-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-violet-700 transition-all shadow-md"
              >
                Kirim Permintaan Demo
              </button>
            </div>

            {success && (
              <p className="text-green-600 text-sm text-center mt-4">
                Terima kasih! Kami akan segera menghubungi Anda.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
