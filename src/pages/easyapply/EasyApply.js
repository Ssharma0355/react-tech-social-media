import React from 'react'
import DashboardLayout from "../../layouts/DashboardLayout";
import JobCard from '../../Widgets/JobCard';

const EasyApply = () => {
  return (
    <DashboardLayout>
      <h1>Easy Apply</h1>
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
    </DashboardLayout>
  );
}

export default EasyApply
