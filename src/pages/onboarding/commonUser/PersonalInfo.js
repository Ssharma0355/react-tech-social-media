import React, { useState, useMemo } from "react";
import useAuthStore from "../../../store/authStore"; // zustand store
import { useNavigate } from "react-router-dom";

const PersonalInfo = () => {
  const { userInfo } = useAuthStore();
  const { candidateOnboarding } = useAuthStore();
  const name = `${userInfo.firstName} ${userInfo.lastName}`;
  const email = userInfo.email;
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    govtIdType: "",
    govtIdNumber: "",
    sex: "",
    dob: "",
    nationality: "",
    address: "",
    phone: "",
    experience: "",
    college: "",
    degree: "",
    marks: "",
    resume: null,
    photo: null,
  });

  const fields = Object.keys(formData);

  // ✅ calculate progress
  const progress = useMemo(() => {
    const filled = fields.filter((field) => {
      const value = formData[field];
      return value !== null && value !== "";
    }).length;
    return Math.round((filled / fields.length) * 100);
  }, [formData]);

const handleChange = (e) => {
  const { name, value, files } = e.target;
  setFormData({
    ...formData,
    [name]: files ? files[0] : value,  // ✅ store File object
  });
};


  
const handleSubmit = async (e) => {
  e.preventDefault();
  const result = await candidateOnboarding(formData);
  if (result.success) {
    navigate("/dashboard");
  } else {
    console.error(result.error);
  }
};

  return (
    <main className="w-full mx-auto p-4 md:p-6 flex flex-col gap-6">
      {/* Header Section */}
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-100">
        <h1 className="text-xl md:text-2xl font-semibold text-gray-800">
          Step 2: Personal Information
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Complete your profile to continue
        </p>

        {/* Progress Bar */}
        <div className="mt-6">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-medium text-gray-600">
              Profile Completion
            </span>
            <span className="text-xs font-medium text-gray-600">
              {progress}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-[#4CAF50] h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-100"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* Auto filled from store */}
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 p-4 bg-gray-50 rounded-lg">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                value={name}
                readOnly
                className="w-full p-3 border border-gray-300 rounded-md bg-gray-100 text-gray-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                value={email}
                readOnly
                className="w-full p-3 border border-gray-300 rounded-md bg-gray-100 text-gray-600"
              />
            </div>
          </div>

          {/* Government ID */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Government ID Type
            </label>
            <select
              name="govtIdType"
              value={formData.govtIdType}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select ID Type</option>
              <option value="Aadhar">Aadhar Card</option>
              <option value="PAN">PAN Card</option>
              <option value="Passport">Passport</option>
              <option value="VoterID">Voter ID</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              ID Number
            </label>
            <input
              type="text"
              name="govtIdNumber"
              value={formData.govtIdNumber}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your ID number"
            />
          </div>

          {/* Personal Details */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Sex
            </label>
            <select
              name="sex"
              value={formData.sex}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date of Birth
            </label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nationality
            </label>
            <input
              type="text"
              name="nationality"
              value={formData.nationality}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your nationality"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="+91 1234567890"
            />
          </div>

          {/* Address - Full width */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Address
            </label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              rows={3}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your complete address"
            />
          </div>

          {/* Education & Experience */}
          <div className="md:col-span-2 mt-2 pt-4 border-t border-gray-200">
            <h2 className="text-lg font-medium text-gray-800 mb-4">
              Education & Experience
            </h2>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Years of Experience
            </label>
            <input
              type="number"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="0"
              min="0"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              College/University
            </label>
            <input
              type="text"
              name="college"
              value={formData.college}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="College name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Degree
            </label>
            <input
              type="text"
              name="degree"
              value={formData.degree}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your degree"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Marks / Percentage
            </label>
            <input
              type="text"
              name="marks"
              value={formData.marks}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="CGPA or %"
            />
          </div>

          {/* Resume & Photo - Full width */}
          <div className="md:col-span-2 mt-2 pt-4 border-t border-gray-200">
            <h2 className="text-lg font-medium text-gray-800 mb-4">
              Documents
            </h2>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload Resume
            </label>
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500">
                    PDF, DOC, DOCX (MAX. 5MB)
                  </p>
                </div>
                <input
                  type="file"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  onChange={handleChange}
                  className="hidden"
                />
              </label>
            </div>
            {formData.resume && (
              <p className="text-sm mt-2 text-green-600 flex items-center">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Uploaded: {formData.resume.name}
              </p>
            )}
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload Photo
            </label>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="flex-shrink-0">
                {formData.photo ? (
                   <img
    src={URL.createObjectURL(formData.photo)}
    alt="preview"
    className="w-24 h-24 rounded-full object-cover border-2 border-gray-300"
  />
                ) : (
                  <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center border-2 border-dashed border-gray-300">
    <svg
      className="w-8 h-8 text-gray-400"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2
           1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 
           20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 
           0 00-2 2v12a2 2 0 002 2z"
      ></path>
    </svg>
  </div>
                )}
              </div>
              <div className="flex-grow">
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        className="w-8 h-8 mb-4 text-gray-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p className="mb-2 text-sm text-gray-500">
                        <span className="font-semibold">Click to upload</span>{" "}
                        or drag and drop
                      </p>
                      <p className="text-xs text-gray-500">
                        JPG, PNG (MAX. 5MB)
                      </p>
                    </div>
                    <input
                      type="file"
                      name="photo"
                      accept="image/*"
                      onChange={handleChange}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Continue Button */}
          <div className="md:col-span-2 mt-4">
            <button
              type="submit"
              className="w-full p-3 rounded-md bg-[#4CAF50] hover:bg-[#439346] text-white font-medium disabled:bg-gray-400 transition-colors duration-200"
              disabled={progress < 100}
            >
              {progress < 100
                ? `Complete your profile (${progress}%)`
                : "Continue"}
            </button>
          </div>
        </div>
      </form>
    </main>
  );
};

export default PersonalInfo;
