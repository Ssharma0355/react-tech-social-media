import React, { useEffect, useState } from "react";
import DemoJobCard from "./DemoJobCard";
import { TypeAnimation } from "react-type-animation";

function DemoPostCard() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const getJobs = async () => {
    try {
      setLoading(true);

      const res = await fetch("https://jsonfakery.com/jobs");
      const data = await res.json();

      setJobs(data);
    } catch (err) {
      console.log(err, "ds");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getJobs();
  }, []);

  const handleSwipe = (direction) => {
    const currentJob = jobs[currentIndex];

    if (direction === "right") {
      console.log("Applied", currentJob);
    } else {
      console.log("Not Interested", currentJob);
    }

    setCurrentIndex((prev) => prev + 1);
  };

  if (loading) return <h2>Loading...</h2>;

  if (currentIndex >= jobs.length) {
    return <p>Empty</p>;
  }

  return (
    <div className="flex justify-center w-full px-1 sm:px-6 py-6">
      <div className="w-full max-w-[380px] sm:max-w-[500px] lg:max-w-[650px] xl:max-w-[700px]">
       <div className="p-2">
       <TypeAnimation
          sequence={[
            "👋 Hey Recruiter!",
            1000,
            "👋 Hey Recruiter! I'm Sachin Sharma.",
            1000,
            "👋 Hey Recruiter! I'm Sachin Sharma. Welcome to the Demo View.",
            1500,
            "🚀 Swipe through jobs just like Tinder.",
            1500,
          ]}
          wrapper="h1"
          speed={50}
          repeat={Infinity}
          className="text-2xl md:text-4xl font-bold text-center text-gray-800"
        />
       </div>
      
        <DemoJobCard job={jobs[currentIndex]} onSwipe={handleSwipe} />
      </div>
    </div>
  );
}

export default DemoPostCard;
