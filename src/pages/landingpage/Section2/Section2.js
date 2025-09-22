import React from 'react'
import { Briefcase, Stethoscope, Music, Palette, Cpu, Globe } from "lucide-react";


const Section2 = () => {
    const categories = [
    { id: 1, title: "Software Development", jobs: "4300 Jobs", icon: <Cpu className="w-10 h-10 text-[#4CAF50]" /> },
    { id: 2, title: "Medical & Healthcare", jobs: "2800 Jobs", icon: <Stethoscope className="w-10 h-10 text-[#E91E63]" /> },
    { id: 3, title: "Art & Design", jobs: "1500 Jobs", icon: <Palette className="w-10 h-10 text-[#9C27B0]" /> },
    { id: 4, title: "Music & Performing Arts", jobs: "1200 Jobs", icon: <Music className="w-10 h-10 text-[#3F51B5]" /> },
    { id: 5, title: "Business & Management", jobs: "3100 Jobs", icon: <Briefcase className="w-10 h-10 text-[#FF9800]" /> },
    { id: 6, title: "Others", jobs: "2000 Jobs", icon: <Globe className="w-10 h-10 text-[#607D8B]" /> },
  ];
  return (
    <section className="w-full bg-gray-50 py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <h1 className="text-[#4CAF50] font-bold text-3xl sm:text-4xl md:text-5xl mb-6">
          Most Popular Vacancies
        </h1>
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mb-12">
          Explore opportunities across different industries and professions. Choose the path that fits your passion and career goals.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex flex-col items-center justify-center bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-4">{category.icon}</div>
              <h2 className="text-xl font-semibold text-gray-800">{category.title}</h2>
              <p className="text-gray-500 mt-2">{category.jobs}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Section2
