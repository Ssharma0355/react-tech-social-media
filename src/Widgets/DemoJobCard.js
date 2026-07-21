import {
    MapPin,
    Building2,
    IndianRupee,
    Briefcase,
    Check,
    X,
  } from "lucide-react";

  function DemoJobCard({ job, onSwipe }) {
    const qualifications = JSON.parse(job.qualifications);
  
    return (
      <div className="w-full bg-white rounded-3xl shadow-xl overflow-hidden">  
        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-indigo-600 p-5 sm:p-6 text-white">
          <h1 className="text-xl sm:text-2xl font-bold">
            {job.title}
          </h1>
  
          <div className="flex items-center gap-2 mt-3 text-sm sm:text-base">
            <Building2 size={18} />
            {job.company}
          </div>
  
          <div className="flex items-center gap-2 mt-2 text-sm sm:text-base">
            <MapPin size={18} />
            {job.location}
          </div>
        </div>
  
        {/* Body */}
        <div className="p-5 sm:p-6">
  
          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs sm:text-sm">
            {job.job_category}
          </span>
  
          <p className="mt-5 text-gray-600 text-sm sm:text-base leading-relaxed">
            {job.description}
          </p>
  
          <div className="flex items-center gap-2 mt-5 text-sm sm:text-base">
            <IndianRupee size={18} />
            <strong>
              {job.salary_from.toLocaleString()} -{" "}
              {job.salary_to.toLocaleString()}
            </strong>
          </div>
  
          <div className="flex items-center gap-2 mt-3 text-sm sm:text-base">
            <Briefcase size={18} />
            {job.employment_type}
          </div>
  
          <div className="mt-6">
            <p className="font-semibold mb-3">Skills</p>
  
            <div className="flex flex-wrap gap-2">
              {qualifications.map((skill) => (
                <span
                  key={skill}
                  className="bg-gray-100 rounded-full px-3 py-1 text-xs sm:text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
  
          {/* Buttons */}
          <div className="flex justify-between items-center mt-8">
  
            <button
              onClick={() => onSwipe("left")}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-100 hover:bg-red-500 hover:text-white transition-all duration-300 flex items-center justify-center shadow"
            >
              <X size={32} />
            </button>
  
            <button
              onClick={() => onSwipe("right")}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-green-100 hover:bg-green-500 hover:text-white transition-all duration-300 flex items-center justify-center shadow"
            >
              <Check size={32} />
            </button>
  
          </div>
  
        </div>
  
      </div>
    );
  }

export default DemoJobCard
