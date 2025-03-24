import React, { useEffect, useState } from "react";
import { IoSendSharp } from "react-icons/io5";
import YourProfilePic from "../assets/you_profile_pic.jpg";
import { useRef } from "react";

const ChatWindow = ({
  selectedPerson,
  messages,
  setMessages,
  role,
  setRole,
}) => {
  const [inputText, setInputText] = useState("");
  const chatWindowRef = useRef(null);

  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (inputText.trim()) {
      const time = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });

      const newMessage = {
        sender: role === "sender" ? "sender" : "receiver",
        text: inputText,
        id: Date.now(),
        time,
      };

      setMessages((prevMessages) => ({
        ...prevMessages,
        [selectedPerson.id]: [
          ...(prevMessages[selectedPerson.id] || []),
          newMessage,
        ],
      }));

      setInputText("");

      // Scroll to the latest message
      setTimeout(() => {
        chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
      }, 0);
    }
  };

  return (
    <div className="flex flex-col justify-between h-full text-custom-black">
      {/* section 1 -> chat header */}
      <div>
        {role === "sender" ? (
          <div className="flex gap-2 items-center bg-dark-blue dark:bg-gray-900 p-2 shadow-md">
            <img
              src={selectedPerson.image}
              className="h-10 w-10 rounded-full"
              alt="profile"
            />
            <p className="font-medium text-white">{selectedPerson.name}</p>
          </div>
        ) : (
          <div className="flex gap-2 items-center bg-gray-800 p-2 shadow-md">
            <img
              src={YourProfilePic}
              className="h-10 w-10 rounded-full"
              alt="profile"
            />
            <p className="font-medium text-white">YOU</p>
          </div>
        )}

        {/* section 2 -> chat messages */}
        <div
          ref={chatWindowRef}
          className="flex flex-col gap-2 p-4 overflow-y-auto max-h-158 bg-blue-50 dark:bg-border-dark shadow-inner"
        >
          {messages[selectedPerson.id] &&
            messages[selectedPerson.id].map((msg) => (
              <div
                key={msg.id}
                className={`p-2 max-w-[75%] rounded-md dark:shadow-sm dark:shadow-gray-600 ${
                  msg.sender === role
                    ? "bg-blue-200 dark:bg-dark-blue dark:text-text-dark text-right ml-auto"
                    : "bg-custom-white shadow-sm shadow-gray-400 dark:bg-text-dark text-left mr-auto"
                }`}
              >
                <p className="mb-1">{msg.text}</p>
                <p className="text-xs text-gray-500">{msg.time}</p>
              </div>
            ))}
        </div>
      </div>

      {/* section 3 -> input, dropdown, and send button */}
      <div className="flex items-center justify-center bg-dark-blue dark:bg-gray-900 gap-2 p-2">
        <select
          className="outline-none pl-2 bg-dark-blue dark:bg-gray-900 text-text-dark rounded-md"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="sender">Sender</option>
          <option value="receiver">Receiver</option>
        </select>

        <input
          className="border bg-custom-white dark:bg-gray-200 outline-none pl-2 rounded-[2px] h-10 w-full "
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type your message"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSendMessage();
            }
          }}
        />

        <div
          className="p-2 rounded-full cursor-pointer hover:bg-blue-600  transition-all"
          onClick={handleSendMessage}
        >
          <IoSendSharp className="text-blue-50 dark:text-text-secondary-dark size-7 mr-2" />
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
