import React from 'react'
import CompanyCarousel from '../../../Widgets/CompanyCarousel';

const Section3 = () => {
      const companies = [
    {
      name: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      description: "Innovating technology, AI, and cloud solutions worldwide.",
    },
    {
      name: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      description: "Empowering businesses with productivity and enterprise tools.",
    },
    {
      name: "Amazon",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      description: "E-commerce and cloud computing leader, redefining industries.",
    },
    {
      name: "Spotify",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg",
      description: "Global music streaming and audio entertainment platform.",
    },
    {
      name: "Tesla",
      logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
      description: "Revolutionizing electric vehicles and clean energy solutions.",
    },
  ];
  return (
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 overflow-hidden">
        <CompanyCarousel  companies={companies}/>
      
    </div>
  )
}

export default Section3
