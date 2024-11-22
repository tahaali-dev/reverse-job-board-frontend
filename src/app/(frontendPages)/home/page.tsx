"use client";

import Header from "@/app/CommonComps/Header";
import React from "react";
import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();

  return (
    <>
      <Header />

      <div className="min-h-screen bg-blue-50 font-sans">
        <main className="text-center px-4 py-12 md:py-24">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Reverse Job Board for Data Scientists
          </h2>
          <p className="text-xl md:text-2xl mb-8">
            Connect top data science talent with innovative companies
          </p>
          <div className="space-x-4">
            <button
              className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700"
              onClick={() => {
                router.push("/signup");
              }}
            >
              Create Your Data Scientist Profile
            </button>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold border-2 border-blue-600 hover:bg-blue-50">
              Company Subscription
            </button>
          </div>
        </main>

        <section className="bg-gray-100 py-16 px-4">
          <h3 className="text-3xl font-bold text-center mb-12">How It Works</h3>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h4 className="text-xl font-semibold mb-2">
                For Data Scientists
              </h4>
              <p className="text-gray-600">
                Create and upload your profile showcasing your skills and
                experience
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-semibold mb-2">For Companies</h4>
              <p className="text-gray-600">
                Subscribe to access a pool of talented data scientists
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-semibold mb-2">Make Connections</h4>
              <p className="text-gray-600">
                Directly connect with data scientists that match your needs
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
