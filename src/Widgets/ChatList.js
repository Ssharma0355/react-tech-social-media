import React from "react";

const ChatList = ({ candidates, jobs, loading, onSelectChat }) => {
  if (loading) return <div className="p-4">Loading...</div>;

  return (
    <div className="w-full h-full overflow-y-auto">
      <h2 className="font-semibold text-lg p-2 border-b">Candidates</h2>
      <ul>
        {candidates.map((c, i) => (
          <li
            key={i}
            className="p-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => onSelectChat({ id: `candidate-${i}`, name: c.name || c.email })}
          >
            {c.name || c.email}
          </li>
        ))}
      </ul>

      <h2 className="font-semibold text-lg p-2 border-b mt-4">Jobs</h2>
      <ul>
        {jobs.map((j, i) => (
          <li
            key={i}
            className="p-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => onSelectChat({ id: `job-${i}`, name: j.title })}
          >
            {j.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatList;
