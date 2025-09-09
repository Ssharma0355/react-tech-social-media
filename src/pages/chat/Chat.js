import React, { useEffect, useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import ChatList from "../../Widgets/ChatList";
import ChatBox from "../../Widgets/ChatBox";
import useAuthStore from "../../store/authStore";

const Chat = () => {
  const fetchUsersData = useAuthStore((state) => state.fetchUsersData);

  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [candidates, setCandidates] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null); // selected user/job
  const [messages, setMessages] = useState({}); // store chat history

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

  const handleSelectChat = (chat) => {
    setSelectedChat(chat);
  };

  const handleSendMessage = (chatId, message) => {
    setMessages((prev) => ({
      ...prev,
      [chatId]: [...(prev[chatId] || []), { sender: "me", text: message }],
    }));
  };

  return (
    <DashboardLayout>
      <div className="flex flex-row gap-4 w-full h-[92vh]">
        <div className="flex flex-col border border-gray-200 rounded-sm w-1/3">
          <ChatList
            candidates={candidates}
            jobs={jobs}
            loading={loading}
            onSelectChat={handleSelectChat}
          />
        </div>
        <div className="flex flex-col border border-gray-200 rounded-sm flex-1">
          <ChatBox
            selectedChat={selectedChat}
            messages={messages[selectedChat?.id] || []}
            onSendMessage={handleSendMessage}
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Chat;
