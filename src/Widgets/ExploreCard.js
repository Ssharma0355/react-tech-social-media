import React from "react";
import {
  BookOpen,
  Code2,
  Layers,
  Mic,
  FileText,
  Rocket,
  BookMarked,
  Brain,
  Users,
  Lightbulb
} from "lucide-react";

const ExploreCard = () => {
  return (
    <div className="border border-gray-300 p-4 rounded-xl shadow-md bg-white">
      <h3 className="text-lg font-semibold text-gray-700 mb-3">📌 Explore More</h3>

      <ul className="space-y-2">
        {/* Skills Development */}
        <li className="p-2 flex items-center gap-2 text-gray-700 font-medium">
          🎯 Skills Development
        </li>
        <li className="pl-6 p-2 flex items-center gap-2 text-gray-600 rounded-lg hover:bg-green-50 hover:text-green-600 cursor-pointer transition">
          <BookOpen size={18} /> <span>Learn React</span>
        </li>
        <li className="pl-6 p-2 flex items-center gap-2 text-gray-600 rounded-lg hover:bg-green-50 hover:text-green-600 cursor-pointer transition">
          <Code2 size={18} /> <span>DSA Practice</span>
        </li>
        <li className="pl-6 p-2 flex items-center gap-2 text-gray-600 rounded-lg hover:bg-green-50 hover:text-green-600 cursor-pointer transition">
          <Layers size={18} /> <span>System Design</span>
        </li>
      </ul>

      {/* Divider */}
      <div className="border-t border-gray-200 my-3"></div>

      <ul className="space-y-2">
        {/* Interview Prep */}
        <li className="p-2 flex items-center gap-2 text-gray-700 font-medium">
          💼 Interview Prep
        </li>
        <li className="pl-6 p-2 flex items-center gap-2 text-gray-600 rounded-lg hover:bg-green-50 hover:text-green-600 cursor-pointer transition">
          <Mic size={18} /> <span>Mock Interviews</span>
        </li>
        <li className="pl-6 p-2 flex items-center gap-2 text-gray-600 rounded-lg hover:bg-green-50 hover:text-green-600 cursor-pointer transition">
          <FileText size={18} /> <span>Resume Review</span>
        </li>
      </ul>

      {/* Divider */}
      <div className="border-t border-gray-200 my-3"></div>

      <ul className="space-y-2">
        {/* Tech Things */}
        <li className="p-2 flex items-center gap-2 text-gray-700 font-medium">
          ⚡ Tech Things
        </li>
        <li className="pl-6 p-2 flex items-center gap-2 text-gray-600 rounded-lg hover:bg-green-50 hover:text-green-600 cursor-pointer transition">
          <Rocket size={18} /> <span>New Hackathon</span>
        </li>
        <li className="pl-6 p-2 flex items-center gap-2 text-gray-600 rounded-lg hover:bg-green-50 hover:text-green-600 cursor-pointer transition">
          <BookMarked size={18} /> <span>Latest Tech Blogs</span>
        </li>
      </ul>

      {/* Divider */}
      <div className="border-t border-gray-200 my-3"></div>

      <ul className="space-y-2">
        {/* AI & Founders */}
        <li className="p-2 flex items-center gap-2 text-gray-700 font-medium">
          🤖 AI & Founders
        </li>
        <li className="pl-6 p-2 flex items-center gap-2 text-gray-600 rounded-lg hover:bg-green-50 hover:text-green-600 cursor-pointer transition">
          <Brain size={18} /> <span>AI Master Class</span>
        </li>
        <li className="pl-6 p-2 flex items-center gap-2 text-gray-600 rounded-lg hover:bg-green-50 hover:text-green-600 cursor-pointer transition">
          <Users size={18} /> <span>Founders Meet</span>
        </li>
        <li className="pl-6 p-2 flex items-center gap-2 text-gray-600 rounded-lg hover:bg-green-50 hover:text-green-600 cursor-pointer transition">
          <Lightbulb size={18} /> <span>Startup Insights</span>
        </li>
      </ul>

      {/* Footer */}
      <div className="border-t mt-4 pt-2 text-xs text-gray-500 text-center">
        &copy; 2025
      </div>
    </div>
  );
};

export default ExploreCard;
