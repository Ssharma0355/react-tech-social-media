import React from "react";

const JobCard = ({
  jobTitle,
  department,
  employmentType,
  experienceLevel,
  location,
  remotePolicy,
  salaryRange,
  applicationDeadline,
  jobDescription,
  responsibilities,
  qualifications,
  benefits,
  contactEmail,
  hiringManager,
  logo,
  company,
  date,
  onApply,
  onSave,
  onNotInterested,
}) => {
  return (
    <main className="flex flex-col w-full p-6 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition bg-white gap-4">
      {/* Top Row */}
      <div className="flex flex-row justify-between items-start">
        {/* Company Info */}
        <div className="flex flex-row gap-4 items-center">
          <div className="flex items-center justify-center rounded-full border border-gray-300 h-16 w-16 bg-gray-50 overflow-hidden">
            {logo ? (
              <img
                src={logo}
                alt={company}
                className="h-10 w-10 object-contain"
              />
            ) : (
              <span className="text-sm text-gray-400">Logo</span>
            )}
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-800">{company}</h2>
            <p className="text-sm text-gray-500">{location}</p>
            <p className="text-sm text-gray-500">{department}</p>
          </div>
        </div>

        {/* Posted Date */}
        <p className="text-sm text-gray-400">Posted on: {date}</p>
      </div>

      {/* Job Details */}
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-bold text-gray-700">{jobTitle}</h3>
        <div className="flex flex-wrap gap-2 text-sm text-gray-500">
          <span>{employmentType}</span>
          <span>{experienceLevel}</span>
          <span>{remotePolicy}</span>
          {salaryRange && <span>{salaryRange}</span>}
          {applicationDeadline && <span>Deadline: {applicationDeadline}</span>}
        </div>

        <p className="text-gray-600 mt-2">{jobDescription}</p>

        {responsibilities && (
          <div>
            <h4 className="font-semibold text-gray-700">Responsibilities:</h4>
            <p className="text-gray-600">{responsibilities}</p>
          </div>
        )}
        {qualifications && (
          <div>
            <h4 className="font-semibold text-gray-700">Qualifications:</h4>
            <p className="text-gray-600">{qualifications}</p>
          </div>
        )}
        {benefits && (
          <div>
            <h4 className="font-semibold text-gray-700">Benefits:</h4>
            <p className="text-gray-600">{benefits}</p>
          </div>
        )}

        {contactEmail && (
          <p className="text-sm text-gray-400 mt-2">
            Contact: {hiringManager ? `${hiringManager} - ` : ""}
            {contactEmail}
          </p>
        )}
      </div>

      {/* Desktop Actions */}
      <div className="hidden md:flex flex-row gap-3 mt-4">
        <button
          onClick={onApply}
          className="px-4 py-2 rounded-lg bg-[#4CAF50] text-white font-medium hover:bg-[#388E3C] transition"
        >
          Apply
        </button>
        <button
          onClick={onSave}
          className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100 transition"
        >
          Save
        </button>
        <button
          onClick={onNotInterested}
          className="px-4 py-2 rounded-lg border border-red-400 text-red-600 hover:bg-red-50 transition"
        >
          Not Interested
        </button>
      </div>

      {/* Mobile swipe hints */}
      <div className="md:hidden text-center text-sm text-gray-400 mt-2">
        Swipe right to Apply, swipe left if not interested
      </div>
    </main>
  );
};

export default JobCard;
