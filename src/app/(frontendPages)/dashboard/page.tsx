"use client";

import Header from "@/app/CommonComps/Header";
import React, { useState } from "react";

interface Profile {
  name: string;
  skills: string[];
  location: string;
  experience: number;
}

const skills: string[] = [
  "Python",
  "Machine Learning",
  "SQL",
  "R",
  "Data Visualization",
  "Statistics",
  "Deep Learning",
  "TensorFlow",
  "Computer Vision",
];

const locations: string[] = ["New York, NY", "San Francisco, CA", "Boston, MA"];

const profiles: Profile[] = [
  {
    name: "John Doe",
    skills: ["Python", "Machine Learning", "SQL"],
    location: "New York, NY",
    experience: 5,
  },
  {
    name: "Jane Smith",
    skills: ["R", "Data Visualization", "Statistics"],
    location: "San Francisco, CA",
    experience: 3,
  },
];

export default function page() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [experienceYears, setExperienceYears] = useState<number>(0);

  const handleSkillChange = (skill: string) => {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };

  const handleLocationChange = (location: string) => {
    setSelectedLocations((prev) =>
      prev.includes(location)
        ? prev.filter((l) => l !== location)
        : [...prev, location]
    );
  };

  const filteredProfiles = profiles.filter((profile) => {
    const matchesSearch =
      profile.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      profile.skills.some((skill) =>
        skill.toLowerCase().includes(searchQuery.toLowerCase())
      ) ||
      profile.location.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesSkills =
      selectedSkills.length === 0 ||
      selectedSkills.every((skill) => profile.skills.includes(skill));

    const matchesLocation =
      selectedLocations.length === 0 ||
      selectedLocations.includes(profile.location);

    const matchesExperience = profile.experience >= experienceYears;

    return (
      matchesSearch && matchesSkills && matchesLocation && matchesExperience
    );
  });

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100 flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white p-6 border-r">
          <h2 className="text-xl font-bold mb-6">Filters</h2>

          {/* Skills Section */}
          <section className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Skills</h3>
            <div className="space-y-2">
              {skills.map((skill) => (
                <label key={skill} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={selectedSkills.includes(skill)}
                    onChange={() => handleSkillChange(skill)}
                    className="rounded border-gray-300"
                  />
                  <span>{skill}</span>
                </label>
              ))}
            </div>
          </section>

          {/* Location Section */}
          <section className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Location</h3>
            <div className="space-y-2">
              {locations.map((location) => (
                <label key={location} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={selectedLocations.includes(location)}
                    onChange={() => handleLocationChange(location)}
                    className="rounded border-gray-300"
                  />
                  <span>{location}</span>
                </label>
              ))}
            </div>
          </section>

          {/* Experience Slider */}
          <section>
            <h3 className="text-lg font-semibold mb-4">Experience (years)</h3>
            <div className="space-y-2">
              <input
                type="range"
                min="0"
                max="10"
                value={experienceYears}
                onChange={(e) => setExperienceYears(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-600">
                <span>0 years</span>
                <span>10 years</span>
              </div>
            </div>
          </section>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <h1 className="text-3xl font-bold mb-6">Data Scientist Profiles</h1>

          {/* Search Bar */}
          <div className="mb-8">
            <input
              type="text"
              placeholder="Search by name, skills, or location"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-3 border rounded-lg"
              aria-label="Search profiles"
            />
          </div>

          {/* Profile Cards */}
          <div className="space-y-4">
            {filteredProfiles.map((profile) => (
              <article
                key={profile.name}
                className="bg-white p-6 rounded-lg shadow"
              >
                <h2 className="text-xl font-bold mb-4">{profile.name}</h2>
                <div className="space-y-2">
                  <p>
                    <span className="font-semibold">Skills:</span>{" "}
                    {profile.skills.join(", ")}
                  </p>
                  <p>
                    <span className="font-semibold">Location:</span>{" "}
                    {profile.location}
                  </p>
                  <p>
                    <span className="font-semibold">Experience:</span>{" "}
                    {profile.experience} years
                  </p>
                </div>
                <button
                  className="mt-4 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                  aria-label={`View full profile of ${profile.name}`}
                >
                  View Full Profile
                </button>
              </article>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
