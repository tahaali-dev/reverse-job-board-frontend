"use client";

import Header from "@/app/CommonComps/Header";
import React, { useState, ChangeEvent, FormEvent } from "react";

interface Project {
  title: string;
  description: string;
}

interface FormData {
  bio: string;
  skills: string;
  yearsOfExperience: string;
  education: string;
  location: string;
  projects: Project[];
  profilePicture: File | null;
  resume: File | null;
}

export default function Component() {
  const [formData, setFormData] = useState<FormData>({
    bio: "",
    skills: "",
    yearsOfExperience: "",
    education: "",
    location: "",
    projects: [{ title: "", description: "" }],
    profilePicture: null,
    resume: null,
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (
    e: ChangeEvent<HTMLInputElement>,
    fieldName: "profilePicture" | "resume"
  ) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({
      ...prev,
      [fieldName]: file,
    }));
  };

  const handleProjectChange = (
    index: number,
    field: keyof Project,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      projects: prev.projects.map((project, i) =>
        i === index ? { ...project, [field]: value } : project
      ),
    }));
  };

  const addProject = () => {
    setFormData((prev) => ({
      ...prev,
      projects: [...prev.projects, { title: "", description: "" }],
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-4 flex items-center justify-center">
        <div className="w-full max-w-2xl bg-white rounded-lg shadow-sm">
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div>
              <h1 className="text-2xl font-bold">Create Your Profile</h1>
              <p className="text-gray-600">
                Fill in your details to create your data scientist profile
              </p>
            </div>

            <div className="space-y-2">
              <label htmlFor="bio" className="block text-sm font-medium">
                Bio
              </label>
              <textarea
                id="bio"
                name="bio"
                placeholder="Tell us about yourself..."
                value={formData.bio}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                rows={4}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="skills" className="block text-sm font-medium">
                Skills (comma-separated)
              </label>
              <input
                id="skills"
                name="skills"
                placeholder="Python, Machine Learning, Data Visualization..."
                value={formData.skills}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="yearsOfExperience"
                className="block text-sm font-medium"
              >
                Years of Experience
              </label>
              <input
                id="yearsOfExperience"
                name="yearsOfExperience"
                type="number"
                min="0"
                value={formData.yearsOfExperience}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="education" className="block text-sm font-medium">
                Education
              </label>
              <input
                id="education"
                name="education"
                placeholder="Highest degree and institution"
                value={formData.education}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="location" className="block text-sm font-medium">
                Location
              </label>
              <input
                id="location"
                name="location"
                placeholder="City, State/Country"
                value={formData.location}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="space-y-4">
              <label className="block text-sm font-medium">Projects</label>
              {formData.projects.map((project, index) => (
                <div key={index} className="space-y-2">
                  <input
                    placeholder="Project Title"
                    value={project.title}
                    onChange={(e) =>
                      handleProjectChange(index, "title", e.target.value)
                    }
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                  <textarea
                    placeholder="Project Description"
                    value={project.description}
                    onChange={(e) =>
                      handleProjectChange(index, "description", e.target.value)
                    }
                    className="w-full p-2 border border-gray-300 rounded-md"
                    rows={3}
                  />
                </div>
              ))}
              <button
                type="button"
                onClick={addProject}
                className="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm"
              >
                Add Project
              </button>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="profilePicture"
                className="block text-sm font-medium"
              >
                Profile Picture
              </label>
              <input
                id="profilePicture"
                type="file"
                accept="image/*"
                onChange={(e) => handleFileChange(e, "profilePicture")}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="resume" className="block text-sm font-medium">
                Resume
              </label>
              <input
                id="resume"
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={(e) => handleFileChange(e, "resume")}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-black text-white rounded-md text-sm font-medium"
            >
              Create Profile
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
