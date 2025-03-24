import React, { useState } from "react";
import Notif from "./Notif";
import { MdMarkChatRead } from "react-icons/md";
import { dummyNotifs } from "@/Notifications_data";

const Notifications = ({ isMenuOpen }) => {
  const [notifications, setNotifications] = useState(dummyNotifs);

  const toggleRead = (id) => {
    setNotifications((prevNotifications) => {
      return prevNotifications.map((notification) => {
        if (notification.id === id) {
          return { ...notification, read: !notification.read };
        }
        return notification;
      });
    });
  };

  const handleMarkAllRead = () => {
    setNotifications((Notifications) => {
      return Notifications.map((notif) => {
        return { ...notif, read: true };
      });
    });
  };

  return (
    <div
      className={`w-screen dark:bg-border-dark dark:text-text-dark transition-all duration-500 ease-in-out ${
        isMenuOpen ? "transform pl-60" : "transform pl-0"
      }`}
    >
      {/* Notifications header */}
      <div className="flex justify-between items-center p-4 px-6 ">
        <p className="text-2xl">Notifications</p>
        <div
          className="text-blue-400 dark:text-blue-200 flex justify-center items-center gap-2 pr-4
          cursor-pointer"
          onClick={handleMarkAllRead}
        >
          <MdMarkChatRead /> Mark all as read
        </div>
      </div>

      {/* Notifications list */}
      <div className="h-full w-full">
        <ul className="flex flex-col gap-2 pb-10">
          {notifications.map((notifications) => {
            return (
              <li className="px-2" key={notifications.id}>
                <Notif
                  icon={notifications.icon}
                  main={notifications.main}
                  description={notifications.description}
                  date={notifications.date}
                  from={notifications.from}
                  read={notifications.read}
                  color={notifications.color}
                  toggleRead={() => toggleRead(notifications.id)}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Notifications;
