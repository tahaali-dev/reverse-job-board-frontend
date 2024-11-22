"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import DashboardHeader from "@/app/CommonComps/DashboardHeader";
import { useRouter } from "next/navigation";

export default function BusinessProfileForm() {
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const router = useRouter();
  const handleLogoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <DashboardHeader currentUrl="" />
      <div className="container mx-auto p-6">
        <div className="mb-6">
          <div
            className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 cursor-pointer"
            onClick={() => {
              router.push("/dashboard");
            }}
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Browse
          </div>
        </div>
        <h1 className="text-2xl font-bold mb-6">Your business profile</h1>

        <div className="space-y-6">
          {/* Business Details Section */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">Business details</h2>
            <p className="text-sm text-gray-600 mb-4">
              Information about your business. Here's your chance to sell
              yourself to potential hires!
            </p>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="company-name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Company name
                </label>
                <input
                  type="text"
                  id="company-name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your company name"
                />
              </div>

              <div>
                <label
                  htmlFor="website"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Website
                </label>
                <input
                  type="url"
                  id="website"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="https://"
                />
              </div>

              <div>
                <label
                  htmlFor="bio"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Bio
                </label>
                <textarea
                  id="bio"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Tell us about your company"
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your company logo
                </label>
                <div className="flex items-center gap-4">
                  <div className="relative h-20 w-20 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                    {logoPreview ? (
                      <Image
                        src={logoPreview}
                        alt="Company logo preview"
                        layout="fill"
                        objectFit="cover"
                      />
                    ) : (
                      <svg
                        className="h-12 w-12 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    )}
                  </div>
                  <label
                    htmlFor="logo-upload"
                    className="cursor-pointer bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Upload
                    <input
                      id="logo-upload"
                      name="logo-upload"
                      type="file"
                      className="sr-only"
                      onChange={handleLogoUpload}
                      accept="image/*"
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Personal Details Section */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">Personal details</h2>
            <p className="text-sm text-gray-600 mb-4">
              Information about you, the contact point for your business.
            </p>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label
                  htmlFor="job-title"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your job title or role
                </label>
                <input
                  type="text"
                  id="job-title"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your job title"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
