import React from "react";

const CandidateCard = ({
  name,
  role,
  experience,
  location,
  education,
  skills,
  summary,
  email,
  phone,
  linkedIn,
  github,
  resumeLink,
  photo,
  date,
  onShortlist,
  onSave,
  onReject,
}) => {
  return (
    <main className="flex flex-col w-full p-6 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition bg-white gap-4">
      {/* Top Row */}
      <div className="flex flex-row justify-between items-start">
        {/* Candidate Info */}
        <div className="flex flex-row gap-4 items-center">
          <div className="flex items-center justify-center rounded-full border border-gray-300 h-16 w-16 bg-gray-50 overflow-hidden">
            {photo ? (
              <img
                src={photo}
                alt={name}
                className="h-10 w-10 object-cover rounded-full"
              />
            ) : (
              <span className="text-sm text-gray-400">Photo</span>
            )}
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
            <p className="text-sm text-gray-500">{role}</p>
            <p className="text-sm text-gray-500">{location}</p>
          </div>
        </div>

        {/* Date Applied */}
        <p className="text-sm text-gray-400">Applied on: {date}</p>
      </div>

      {/* Candidate Details */}
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-bold text-gray-700">{experience}</h3>

        {summary && <p className="text-gray-600 mt-2">{summary}</p>}

        {skills && (
          <div>
            <h4 className="font-semibold text-gray-700">Skills:</h4>
            <p className="text-gray-600">{skills}</p>
          </div>
        )}

        {education && (
          <div>
            <h4 className="font-semibold text-gray-700">Education:</h4>
            <p className="text-gray-600">{education}</p>
          </div>
        )}

        {(email || phone || linkedIn || github || resumeLink) && (
          <div className="text-sm text-gray-400 mt-2 flex flex-col gap-1">
            {email && <p>Email: {email}</p>}
            {phone && <p>Phone: {phone}</p>}
            {linkedIn && (
              <a
                href={linkedIn}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 hover:underline"
              >
                LinkedIn
              </a>
            )}
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 hover:underline"
              >
                GitHub
              </a>
            )}
            {resumeLink && (
              <a
                href={resumeLink}
                target="_blank"
                rel="noreferrer"
                className="text-green-600 hover:underline"
              >
                View Resume
              </a>
            )}
          </div>
        )}
      </div>

      {/* Desktop Actions */}
      <div className="hidden md:flex flex-row gap-3 mt-4">
        <button
          onClick={onShortlist}
          className="px-4 py-2 rounded-lg bg-[#4CAF50] text-white font-medium hover:bg-[#388E3C] transition"
        >
          Shortlist
        </button>
        <button
          onClick={onSave}
          className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100 transition"
        >
          Save
        </button>
        <button
          onClick={onReject}
          className="px-4 py-2 rounded-lg border border-red-400 text-red-600 hover:bg-red-50 transition"
        >
          Reject
        </button>
      </div>

      {/* Mobile swipe hints */}
      <div className="md:hidden text-center text-sm text-gray-400 mt-2">
        Swipe right to Shortlist, swipe left to Reject
      </div>
    </main>
  );
};

export default CandidateCard;
