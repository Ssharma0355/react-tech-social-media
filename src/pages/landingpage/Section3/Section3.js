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
  {
    name: "Nike",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
    description: "Leading sportswear and fitness innovation brand.",
  },
  {
    name: "Adobe",
    logo: "https://www.adobe.com/federal/assets/svgs/adobe-logo.svg",
    description: "Creative software leader, empowering art and design.",
  },
  {
    name: "Uber Eats",
    logo: "https://cdn.brandfetch.io/idIjpcD2zP/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1756325837799",
    description: "Celebrating culinary creativity and world-class cooking.",
  },
  {
    name: "LinkedIn",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg",
    description: "Professional networking and career growth platform.",
  },
  {
    name: "Harvard Business School",
    logo: "https://cdn.brandfetch.io/id_ZfMtaAq/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1753299430402",
    description: "World-class business education and leadership training.",
  },
  {
    name: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    description: "Design-driven innovation in consumer technology and software.",
  },
  {
    name: "Universal Music Group",
    logo: "https://cdn.brandfetch.io/idTxGOuOyP/w/1079/h/1079/theme/dark/icon.png?c=1bxid64Mup7aczewSAYMX&t=1668516536731",
    description: "Global leader in recorded music, publishing, and talent.",
  },
  {
    name: "MoMA",
    logo: "https://cdn.brandfetch.io/idjt0wCLt8/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1752235280781",
    description: "Museum of Modern Art showcasing world-class artworks.",
  },
  {
    name: "Gold’s Gym",
    logo: "https://cdn.brandfetch.io/idzjac_teo/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1668014116603",
    description: "Iconic gym chain inspiring strength and fitness worldwide.",
  },
  ];


  return (
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 overflow-hidden">
        <CompanyCarousel  companies={companies}/>
      
    </div>
  )
}

export default Section3
