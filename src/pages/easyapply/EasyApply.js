import React, { useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import JobCard from "../../Widgets/JobCard";
import CandidateCard from "../../Widgets/CandidateCard";
import { jobsData, candidatesData } from "../../assets/JSONs/easyApplyData";
import SwitchButton from "../../Widgets/SwitchButton";
import SearchBar from "../../Widgets/SearchBar";

const EasyApply = () => {
       const [userType, setUserType] = useState(true);
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-bold mb-4">Easy Apply</h1>
          <SearchBar />
          <SwitchButton userType={userType} setUserType={setUserType} />
        </div>
        <div className="flex flex-col">
          {userType
            ? jobsData.map((job) => (
                <JobCard
                  key={job.id}
                  {...job}
                  onApply={() => alert(`Applied for ${job.jobTitle}`)}
                  onSave={() => alert(`Saved ${job.jobTitle}`)}
                  onNotInterested={() =>
                    alert(`Not interested in ${job.jobTitle}`)
                  }
                />
              ))
            : candidatesData.map((candidate) => (
                <CandidateCard
                  key={candidate.id}
                  {...candidate}
                  onShortlist={() => alert(`Shortlisted ${candidate.name}`)}
                  onSave={() => alert(`Saved ${candidate.name}`)}
                  onReject={() => alert(`Rejected ${candidate.name}`)}
                />
              ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default EasyApply;
