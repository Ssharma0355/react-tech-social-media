import React, { useState } from 'react'
import DashboardLayout from "../../layouts/DashboardLayout";
import JobCard from '../../Widgets/JobCard';
import CandidateCard from '../../Widgets/CandidateCard';

const EasyApply = () => {
  const [userType, setusertpe] = useState(false);
  return (
    <DashboardLayout>
      <h1>Easy Apply</h1>
      {userType ? (
        <JobCard
          logo="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
          company="Google"
          jobTitle="Frontend Developer"
          department="Engineering"
          employmentType="Full-time"
          experienceLevel="Mid-level"
          location="Bangalore, India"
          remotePolicy="Hybrid"
          salaryRange="₹10L - ₹15L"
          applicationDeadline="31 Oct, 2025"
          jobDescription="We are looking for a skilled frontend developer to join our team and work on scalable, high-performance applications."
          responsibilities="Build and maintain user interfaces, collaborate with designers and backend developers, optimize app performance."
          qualifications="3+ years of experience with React, TypeScript, and modern frontend tools."
          benefits="Health insurance, Stock options, Flexible work hours."
          contactEmail="hr@google.com"
          hiringManager="Sundar Pichai"
          date="24 Oct, 2025"
          onApply={() => alert("Applied!")}
          onSave={() => alert("Saved!")}
          onNotInterested={() => alert("Not Interested!")}
        />
      ) : (
        <CandidateCard
          photo="https://randomuser.me/api/portraits/men/75.jpg"
          name="Rahul Sharma"
          role="Frontend Developer"
          experience="3+ years of experience in React, Next.js, and TypeScript"
          location="Bangalore, India"
          education="B.Tech in Computer Science, IIT Delhi"
          skills="React, TypeScript, Next.js, Tailwind CSS, Node.js"
          summary="Passionate developer who loves building scalable and user-friendly web applications."
          email="rahul.sharma@example.com"
          phone="+91 9876543210"
          linkedIn="https://linkedin.com/in/rahul-sharma"
          github="https://github.com/rahulsharma"
          resumeLink="/resumes/rahul-sharma.pdf"
          date="28 Oct, 2025"
          onShortlist={() => alert("Candidate Shortlisted!")}
          onSave={() => alert("Candidate Saved!")}
          onReject={() => alert("Candidate Rejected!")}
        />
      )}
    </DashboardLayout>
  );
}

export default EasyApply
