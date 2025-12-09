"use client";

import React from "react";

import Hero from "./components/home/Hero";
import JourneyBanner from "./components/home/JourneyBanner";
import Features from "./components/home/Features";
import CustomerJourneyGraphic from "./components/home/CustomerJourneyGraphic";
import Stats from "./components/home/Stats";
import UserGroups from "./components/home/UserGroups";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <Navbar />
      <Hero />

      {/* Banner: Screen to Store */}
      <JourneyBanner />

      {/* Feature Cards */}
      <Features />

      {/* Customer Journey Timeline */}
      <CustomerJourneyGraphic />

      {/* Stats & Impact */}
      <Stats />

      {/* User Groups */}
      <UserGroups />

      {/* Final Call-To-Action */}
      <section className="py-24 bg-gradient-to-r from-[#5B2EFF] to-[#C96EFF] text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 font-serif">
            Ready to redefine retail?
          </h2>

          <p className="text-xl text-purple-100 mb-10 max-w-2xl mx-auto">
            Join the leading fashion brands using <strong>STYLA.AI</strong> to
            double their conversion rates and delight customers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 bg-white text-purple-700 rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all">
              Request a Demo
            </button>

            <button className="px-10 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all">
              View Pricing
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
