import React, { useState, useEffect } from "react";
import ChatWindow from "./ChatWindow";
import teddy from "../assets/teddy.jpg";
import wolfie from "../assets/wolf-cut-girlie.jpg";
import grumpy from "../assets/grumpy-kid.jpg";

const Inbox = ({ isMenuOpen }) => {
  const people = [
    { id: 1, name: "John Doe", image: teddy },
    { id: 2, name: "Mary Jane", image: wolfie },
    { id: 3, name: "Carly Davis", image: grumpy },
  ];

  const [selectedPerson, setSelectedPerson] = useState(null);
  const [messages, setMessages] = useState({});
  const [role, setRole] = useState("sender");

  useEffect(() => {
    if (selectedPerson) {
      const storedMessages = localStorage.getItem(
        `messages_${selectedPerson.id}`
      );
      if (storedMessages) {
        setMessages((prevMessages) => ({
          ...prevMessages,
          [selectedPerson.id]: JSON.parse(storedMessages),
        }));
      } else {
        setMessages((prevMessages) => ({
          ...prevMessages,
          [selectedPerson.id]: [],
        }));
      }
    }
  }, [selectedPerson]);

  useEffect(() => {
    if (selectedPerson) {
      localStorage.setItem(
        `messages_${selectedPerson.id}`,
        JSON.stringify(messages[selectedPerson.id])
      );
    }
  }, [messages, selectedPerson]);

  const getLastMessage = (personId) => {
    const personMessages = messages[personId];
    if (personMessages && personMessages.length > 0) {
      return personMessages[personMessages.length - 1].text;
    }
    return "No messages yet";
  };

  return (
    <div className="w-screen h-187 overscroll-y-none flex ">
      <div className="h-full w-full flex">
        <div
          className={`flex h-full w-full transition-all duration-500 ease-in-out  ${
            isMenuOpen ? "transform pl-60" : "transform pl-0"
          }`}
        >
          {/* List of people to chat with */}
          <div className="w-1/3 h-full bg-dark-blue text-greyish-blue-light font-semibold text-2xl  dark:text-text-dark dark:bg-gray-900 p-4  dark:border-1 dark:border-gray-900 dark:border-r-gray-500 border-r border-greyish-blue-dark">
            <div className="flex flex-col">
              <p className="border-b border-greyish-blue-dark dark:border-gray-500 p-2 ">
                Chats
              </p>
              <ul className="flex flex-col ">
                {people.map((person) => {
                  return (
                    <li
                      key={person.id}
                      onClick={() => setSelectedPerson(person)}
                      className={` flex items-center gap-3 cursor-pointer p-3 rounded-[3px] border-b border-gray-400 ${
                        selectedPerson?.id === person.id
                          ? "bg-border-dark dark:bg-border-dark"
                          : "hover:bg-border-dark dark:hover:bg-gray-700"
                      }`}
                    >
                      <img
                        src={person.image}
                        className="h-12 w-12 rounded-full"
                        alt="profile"
                      />
                      <div className="text-sm">
                        <p className="font-medium">{person.name}</p>
                        <p className="text-xs text-gray-300 dark:text-gray-300 overflow-hidden text-ellipsis whitespace-nowrap max-w-xs md:max-w-35">
                          {getLastMessage(person.id)}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Chat window */}
          <div className="w-2/3 h-full bg-blue-50 dark:bg-border-dark =">
            {selectedPerson ? (
              <ChatWindow
                selectedPerson={selectedPerson}
                messages={messages}
                setMessages={setMessages}
                role={role}
                setRole={setRole}
              />
            ) : (
              <p className="h-full flex justify-center items-center text-gray-500">
                Select a person to chat with
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inbox;
