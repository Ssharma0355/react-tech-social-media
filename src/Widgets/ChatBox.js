import React, { useState } from "react";
import { Send } from 'lucide-react';


const ChatBox = ({ selectedChat, messages, onSendMessage }) => {
  const [input, setInput] = useState("");

  if (!selectedChat) {
    return (
      <div className="flex items-center justify-center h-full text-gray-500">
        Select a user/job to start chatting
      </div>
    );
  }

  const handleSend = () => {
    if (!input.trim()) return;
    onSendMessage(selectedChat.id, input);
    setInput("");
  };

  return (
    <div className="flex flex-col w-full h-full">
      <div className="border-b p-3 font-semibold">
        Chat with {selectedChat.name}
      </div>

      <div className="flex-1 p-4 overflow-y-auto space-y-2">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-2 rounded-lg max-w-xs ${
              msg.sender === "me"
                ? "bg-blue-500 text-white ml-auto"
                : "bg-gray-200"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="p-2 border-t flex">
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border rounded px-2 py-1"
        />
        <button
          onClick={handleSend}
          className="ml-2 px-4 py-1 bg-[#4CAF50] text-white rounded"
        >
         <Send />
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
