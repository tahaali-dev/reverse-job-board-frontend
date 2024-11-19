"use client";

import { useState } from "react";
import { ArrowLeft, Plus, Upload } from "lucide-react";
import UserHeader from "@/app/CommonComps/UserHeader";
import { useRouter } from "next/navigation";

export default function Component() {
  const [skills, setSkills] = useState<string[]>([]);
  const [newSkill, setNewSkill] = useState("");
  const router = useRouter();

  const addSkill = () => {
    if (newSkill.trim() !== "" && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill("");
    }
  };

  return (
    <>
      <UserHeader currentUrl="/user/makeProfile" />

      <div className="min-h-screen bg-gray-50 p-4 md:p-8">
        <div className="mx-auto max-w-4xl bg-white rounded-lg shadow p-6">
          <div className="mb-6">
            <div
              className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 cursor-pointer"
              onClick={() => {
                router.push("/user/dashboard");
              }}
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back to Browse
            </div>
          </div>

          <h1 className="text-2xl font-bold mb-8">Create Your Profile</h1>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Professional Title
                </label>
                <input
                  type="text"
                  placeholder="Senior Data Scientist"
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Location
                </label>
                <input
                  type="text"
                  placeholder="San Francisco, CA"
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Years of Experience
                </label>
                <select className="w-full px-3 py-2 border rounded-md">
                  <option>Select years of experience</option>
                  <option>1-3 years</option>
                  <option>3-5 years</option>
                  <option>5-10 years</option>
                  <option>10+ years</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">About</label>
              <textarea
                rows={4}
                placeholder="Tell us about yourself and your experience..."
                className="w-full px-3 py-2 border rounded-md resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Skills</label>
              <div className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  placeholder="Add a skill"
                  className="flex-1 px-3 py-2 border rounded-md"
                />
                <button
                  onClick={addSkill}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Add
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Projects</label>
              <div className="space-y-4">
                <div className="border rounded-md p-4">
                  <input
                    type="text"
                    placeholder="Project Title"
                    className="w-full px-3 py-2 border rounded-md mb-2"
                  />
                  <textarea
                    placeholder="Project Description"
                    rows={3}
                    className="w-full px-3 py-2 border rounded-md resize-none"
                  />
                </div>
                <button className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800">
                  <Plus className="w-4 h-4 mr-1" />
                  Add Another Project
                </button>
              </div>
            </div>

            <div>
              <h1 className="block text-sm font-medium mb-2">Certificates</h1>
              <div className="flex gap-3 w-full p-2">
                <input
                  type="text"
                  placeholder="Certificate Name"
                  className="w-1/3 px-3 py-2 border rounded-md "
                />

                <input
                  type="text"
                  placeholder="Issuer"
                  className="w-1/3 px-3 py-2 border rounded-md "
                />

                <input
                  type="text"
                  placeholder="Year"
                  className="w-1/3 px-3 py-2 border rounded-md "
                />
              </div>
              <button className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 mt-2">
                <Plus className="w-4 h-4 mr-1" />
                Add Another Certification
              </button>
            </div>

            <div>
              <h1 className="block text-sm font-medium mb-2">Education</h1>
              <div className="flex gap-3 w-full p-2">
                <input
                  type="text"
                  placeholder="Degree"
                  className="w-1/3 px-3 py-2 border rounded-md "
                />

                <input
                  type="text"
                  placeholder="School"
                  className="w-1/3 px-3 py-2 border rounded-md "
                />

                <input
                  type="text"
                  placeholder="Year"
                  className="w-1/3 px-3 py-2 border rounded-md "
                />
              </div>
              <button className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 mt-2">
                <Plus className="w-4 h-4 mr-1" />
                Add Another Education
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  GitHub Profile
                </label>
                <input
                  type="url"
                  placeholder="https://github.com/yourusername"
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  LinkedIn Profile
                </label>
                <input
                  type="url"
                  placeholder="https://www.linkedin.com/in/yourusername"
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Profile Picture
                </label>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                    <Upload className="w-6 h-6 text-gray-400" />
                  </div>
                  <button className="px-4 py-2 border rounded-md hover:bg-gray-50">
                    Choose file
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Resume/CV
                </label>
                <button className="px-4 py-2 border rounded-md hover:bg-gray-50 w-full text-left">
                  Choose file
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Work preferences</h3>
              <div className="text-sm text-gray-500 mb-4">
                What kind of work are you looking for next?
              </div>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Search status
                  </label>
                  <div className="space-y-2">
                    {[
                      {
                        label: "Actively looking",
                        description:
                          "Your profile will get featured on the homepage.",
                      },
                      {
                        label: "Open",
                        description:
                          "Companies can still find you, but you won't appear on the homepage",
                      },
                      {
                        label: "Not interested",
                        description:
                          "Your profile will not appear in search results.",
                      },
                      {
                        label: "Invisible",
                        description:
                          "Your profile is hidden and can only be seen by yourself.",
                      },
                    ].map((status) => (
                      <label
                        key={status.label}
                        className="flex items-start gap-2"
                      >
                        <input type="radio" name="status" className="mt-1" />
                        <div>
                          <div className="font-medium">{status.label}</div>
                          <div className="text-sm text-gray-500">
                            {status.description}
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Role type
                  </label>
                  <div className="space-y-2">
                    {[
                      "Full-time contract",
                      "Part-time contract",
                      "Full-time employment",
                    ].map((role) => (
                      <label key={role} className="flex items-center gap-2">
                        <input type="checkbox" />
                        <span>{role}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Experience level
                  </label>
                  <div className="space-y-2">
                    {[
                      "Junior",
                      "Mid-level",
                      "Senior",
                      "Principal / Staff",
                      "C-level",
                    ].map((level) => (
                      <label key={level} className="flex items-center gap-2">
                        <input type="checkbox" />
                        <span>{level}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-black text-white rounded-md hover:bg-gray-800"
            >
              Create Profile
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
