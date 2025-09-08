import React, { useEffect, useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import JobCard from "../../Widgets/JobCard";
import CandidateCard from "../../Widgets/CandidateCard";
import SwitchButton from "../../Widgets/SwitchButton";
import SearchBar from "../../Widgets/SearchBar";
import useAuthStore from "../../store/authStore";

const EasyApply = () => {
  const [jobs, setJobs] = useState([]);
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userType, setUserType] = useState(true);

  const fetchUsersData = useAuthStore((state) => state.fetchUsersData);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await fetchUsersData();
      if (result.success) {
        setJobs(result.jobs);
        setCandidates(result.candidates);
      }
      setLoading(false);
    };
    fetchData();
  }, [fetchUsersData]);

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-4">
        {/* Header */}
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-bold mb-4">Easy Apply</h1>
          <SearchBar placeholder={"Search jobs..."} />
          <SwitchButton userType={userType} setUserType={setUserType} />
        </div>

        {/* Loading state */}
        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : (
          <div className="flex flex-col">
            {userType ? (
              jobs.length > 0 ? (
                jobs.map((job, idx) => (
                  <JobCard
                    key={idx}
                    {...job}
                    onApply={() => alert(`Applied for ${job.jobTitle}`)}
                    onSave={() => alert(`Saved ${job.jobTitle}`)}
                    onNotInterested={() =>
                      alert(`Not interested in ${job.jobTitle}`)
                    }
                  />
                ))
              ) : (
                <p className="text-center text-gray-400">No jobs available</p>
              )
            ) : candidates.length > 0 ? (
              candidates.map((candidate, idx) => (
                <CandidateCard
                  key={idx}
                  {...candidate}
                  onShortlist={() => alert(`Shortlisted ${candidate.email}`)}
                  onSave={() => alert(`Saved ${candidate.email}`)}
                  onReject={() => alert(`Rejected ${candidate.email}`)}
                />
              ))
            ) : (
              <p className="text-center text-gray-400">
                No candidates available
              </p>
            )}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default EasyApply;
