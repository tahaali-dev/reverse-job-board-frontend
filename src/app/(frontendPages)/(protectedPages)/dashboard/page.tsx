"use client";
import { useEffect, useState } from "react";
import { Search, MapPin, Clock, ExternalLink } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Component() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const profiles = [
    {
      id: 1,
      title: "Senior Data Scientist | ML Engineer",
      location: "San Francisco, CA",
      experience: "5+ years",
      skills: ["Python", "TensorFlow", "SQL", "AWS"],
      type: "Full-time",
    },
    {
      id: 2,
      title: "ML Research Scientist | PhD in Computer Science",
      location: "Boston, MA",
      experience: "8+ years",
      skills: ["PyTorch", "Deep Learning", "Computer Vision", "MLOps"],
      type: "Contract",
    },
    {
      id: 3,
      title: "Data Scientist",
      location: "New York, NY",
      experience: "3+ years",
      skills: ["Python", "R", "Statistics", "Visualization"],
      type: "Full-time",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Search Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search by name, skills, or location..."
              className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <aside className="w-full md:w-64 space-y-6">
              <div>
                <h2 className="text-lg font-semibold mb-4">Experience Level</h2>
                <div className="space-y-2">
                  {["Entry Level", "Mid Level", "Senior", "Lead"].map(
                    (level) => (
                      <label
                        key={level}
                        className="flex items-center space-x-2"
                      >
                        <input
                          type="checkbox"
                          className="rounded border-gray-300"
                        />
                        <span>{level}</span>
                      </label>
                    )
                  )}
                </div>
              </div>

              <div>
                <h2 className="text-lg font-semibold mb-4">Availability</h2>
                <div className="space-y-2">
                  {["Full-time", "Part-time", "Contract", "Freelance"].map(
                    (type) => (
                      <label key={type} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300"
                        />
                        <span>{type}</span>
                      </label>
                    )
                  )}
                </div>
              </div>

              <div>
                <h2 className="text-lg font-semibold mb-4">Popular Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Python",
                    "SQL",
                    "Machine Learning",
                    "Deep Learning",
                    "AWS",
                  ].map((skill) => (
                    <button
                      key={skill}
                      className="px-3 py-1 bg-white border rounded-full text-sm hover:bg-gray-50"
                    >
                      {skill}
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">
                  Browse Data Scientists
                </h2>
                <span className="text-gray-500">
                  {profiles.length} profiles available
                </span>
              </div>

              <div className="space-y-4">
                {profiles.map((profile) => (
                  <div
                    key={profile.id}
                    className="bg-white p-6 rounded-lg border hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex space-x-4">
                        <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                        <div>
                          <h3 className="font-semibold text-lg">
                            {profile.title}
                          </h3>
                          <div className="flex items-center space-x-4 text-gray-500 mt-2">
                            <div className="flex items-center space-x-1">
                              <MapPin className="h-4 w-4" />
                              <span>{profile.location}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="h-4 w-4" />
                              <span>{profile.experience}</span>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2 mt-3">
                            {profile.skills.map((skill) => (
                              <span
                                key={skill}
                                className="px-2 py-1 bg-blue-50 text-blue-600 rounded-md text-sm"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                          <div className="mt-3">
                            <span
                              className={`inline-block px-2 py-1 rounded-md text-sm ${
                                profile.type === "Full-time"
                                  ? "bg-green-50 text-green-600"
                                  : "bg-purple-50 text-purple-600"
                              }`}
                            >
                              {profile.type}
                            </span>
                          </div>
                        </div>
                      </div>
                      <button
                        className="flex items-center space-x-1 text-blue-600 hover:text-blue-700"
                        onClick={() => {
                          router.push("/viewProfile");
                        }}
                      >
                        <span>View Profile</span>
                        <ExternalLink className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
