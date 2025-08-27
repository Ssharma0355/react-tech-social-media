import React from "react";
import { CheckCircle } from "lucide-react";
import NavLayout from "../../layouts/NavLayout";
import { useNavigate } from "react-router-dom";


const features = [
  {
    title: "One-Click Apply",
    description:
      "No more endless form filling. Apply once, reuse your profile everywhere with a single swipe.",
    icon: <CheckCircle className="text-green-500 w-6 h-6" />,
  },
  {
    title: "Instant Matches",
    description:
      "Like Tinder, but for work. Get instantly connected with employers, cofounders, and people from your domain.",
    icon: <CheckCircle className="text-green-500 w-6 h-6" />,
  },
  {
    title: "Domain-Based Connections",
    description:
      "Discover talent, collaborators, or opportunities that align with your skills and goals.",
    icon: <CheckCircle className="text-green-500 w-6 h-6" />,
  },
  {
    title: "ATS-Friendly Resume",
    description:
      "AI-powered resume scoring ensures your profile passes ATS filters and gets noticed by recruiters.",
    icon: <CheckCircle className="text-green-500 w-6 h-6" />,
  },
  {
    title: "Direct Messaging",
    description:
      "Skip HR delays. Reach out directly for referrals, hiring, and collaborations.",
    icon: <CheckCircle className="text-green-500 w-6 h-6" />,
  },
  {
    title: "Seamless Profile",
    description:
      "Showcase your projects, achievements, and skills all in one place for instant credibility.",
    icon: <CheckCircle className="text-green-500 w-6 h-6" />,
  },
];

const Features = () => {
  const navigate = useNavigate();
  const toSignuppage = ()=>{
    navigate("/signup");
  }

  return (
    <NavLayout>
      <section className="max-w-6xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">
            Find Jobs, Collaborators & Opportunities Seamlessly
          </h1>
          <p className="text-lg text-gray-600">
            No more queues, no more forms. Just swipe, connect, and get matched
            with your next big opportunity.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 border rounded-2xl shadow hover:shadow-lg transition"
            >
              <div className="flex items-center gap-3 mb-4">
                {feature.icon}
                <h2 className="text-xl font-semibold">{feature.title}</h2>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <h2 className="text-2xl font-bold mb-4">
            Your Next Job, Cofounder, or Talent is Just One Swipe Away
          </h2>
          <button onClick={toSignuppage} className="px-6 py-3 bg-[#4CAF50] text-white rounded-xl shadow hover:bg-[#3ba33f] transition">
            Get Started Free
          </button>
        </div>
      </section>
    </NavLayout>
  );
};

export default Features;
