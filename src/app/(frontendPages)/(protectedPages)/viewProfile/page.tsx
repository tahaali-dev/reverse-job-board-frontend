"use client";

import {
  ArrowLeft,
  Download,
  MapPin,
  Clock,
  Mail,
  Phone,
  Github,
  Linkedin,
  LinkIcon,
} from "lucide-react";
import Image from "next/image";

import { useRouter } from "next/navigation";

export default function Component() {
  const router = useRouter();
  return (
    <>
      <div className="min-h-screen bg-gray-50 m-2">
        <div className="max-w-6xl mx-auto px-4">
          <div className="py-4">
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

          <div className="bg-blue-600 rounded-lg p-6 md:p-8 text-white mb-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <Image
                src="/placeholder.svg?height=128&width=128"
                alt="Profile picture"
                width={128}
                height={128}
                className="rounded-full bg-white"
              />
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl font-bold mb-2">Sarah Chen</h1>
                <p className="text-xl text-blue-100 mb-4">
                  Senior Data Scientist | ML Engineer
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <div className="flex items-center text-sm">
                    <MapPin className="w-4 h-4 mr-1" />
                    San Francisco, CA
                  </div>
                  <div className="flex items-center text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    5+ years experience
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <button className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50">
                  Hire Me
                </button>
                <button className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 flex items-center">
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </button>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-[2fr,1fr] gap-8">
            <div>
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">About</h2>
                <p className="text-gray-600">
                  Experienced Data Scientist and Machine Learning Engineer with
                  a passion for solving complex problems using cutting-edge
                  technologies. Skilled in developing and deploying machine
                  learning models at scale, with a focus on natural language
                  processing and computer vision applications.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Python",
                    "TensorFlow",
                    "PyTorch",
                    "SQL",
                    "AWS",
                    "Machine Learning",
                    "Deep Learning",
                    "NLP",
                    "Computer Vision",
                    "Data Visualization",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Experience</h2>
                <div className="space-y-6">
                  <div className="border-l-2 border-blue-600 pl-4">
                    <h3 className="font-bold">Senior Data Scientist</h3>
                    <p className="text-gray-600 mb-2">
                      TechCorp AI | 2020 - Present
                    </p>
                    <p className="text-gray-600">
                      Lead data scientist for the computer vision team,
                      developing state-of-the-art object detection and image
                      segmentation models.
                    </p>
                  </div>
                  <div className="border-l-2 border-blue-600 pl-4">
                    <h3 className="font-bold">Machine Learning Engineer</h3>
                    <p className="text-gray-600 mb-2">
                      DataDrive Solutions | 2018 - 2020
                    </p>
                    <p className="text-gray-600">
                      Developed and deployed NLP models for sentiment analysis
                      and text classification at scale.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Projects</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4">
                    <h3 className="font-bold mb-2">
                      AI-Powered Image Recognition System
                    </h3>
                    <p className="text-gray-600">
                      Developed a real-time image recognition system using deep
                      learning techniques, achieving 95% accuracy on benchmark
                      datasets.
                    </p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h3 className="font-bold mb-2">
                      Natural Language Processing Chatbot
                    </h3>
                    <p className="text-gray-600">
                      Created an intelligent chatbot using advanced NLP
                      techniques, improving customer service efficiency by 40%.
                    </p>
                  </div>
                </div>
              </section>
            </div>

            <div>
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Contacts</h2>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-gray-400" />
                    <a
                      href="mailto:sarah.chen@example.com"
                      className="text-gray-600 hover:text-blue-600"
                    >
                      sarah.chen@example.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-gray-400" />
                    <a
                      href="tel:+15551234567"
                      className="text-gray-600 hover:text-blue-600"
                    >
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Education</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold">M.S. in Computer Science</h3>
                    <p className="text-gray-600">Stanford University, 2018</p>
                  </div>
                  <div>
                    <h3 className="font-bold">B.S. in Data Science</h3>
                    <p className="text-gray-600">UC Berkeley, 2016</p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Certifications</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>AWS Certified Machine Learning - Specialty</li>
                  <li>Google Cloud Professional Data Engineer</li>
                  <li>Deep Learning Specialization - Coursera</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Work Preferences</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold mb-2">Role Types</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                        Full-time employment
                      </span>
                      <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                        Full-time contract
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Role Levels</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                        Senior
                      </span>
                      <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                        Principal / staff
                      </span>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Connect</h2>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-full border hover:bg-gray-50"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-full border hover:bg-gray-50"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-full border hover:bg-gray-50"
                  >
                    <LinkIcon className="w-5 h-5" />
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
