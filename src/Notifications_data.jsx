import {
  FaFlag,
  FaLock,
  FaServer,
  FaChartLine,
  FaShoppingCart,
  FaBox,
  FaShieldAlt,
  FaCreditCard,
  FaComment,
  FaDatabase,
  FaBan,
  FaTools,
  FaBell,
} from "react-icons/fa";
import { MdMessage } from "react-icons/md";

export const dummyNotifs = [
  {
    id: 1,
    icon: <FaBell size={24} color="#4CAF50" />,
    main: "New User Registration",
    description: "User 'john_doe' has successfully registered.",
    date: "March 10, 2025",
    sortedDate: "2025-03-10",
    read: false,
    from: "system",
    color: "#4CAF50", // Green
  },
  {
    id: 2,
    icon: <FaFlag size={24} color="#FF6347" />,
    main: "Content Moderation Alert",
    description:
      'User "susan_jones" submitted a post that has been flagged for review due to inappropriate language.',
    date: "February 25, 2025",
    sortedDate: "2025-02-25",
    read: false,
    from: "Content Moderation team",
    color: "#FF6347", // Tomato Red
  },
  {
    id: 3,
    icon: <FaLock size={24} color="#FF9800" />,
    main: "Suspicious Login Attempt",
    description: "Multiple failed login attempts from IP 192.168.1.5.",
    date: "March 12, 2025",
    sortedDate: "2025-03-12",
    read: false,
    from: "Security Team",
    color: "#FF9800", // Orange
  },
  {
    id: 4,
    icon: <FaServer size={24} color="#2196F3" />,
    main: "Server Overload Warning",
    description:
      "The server load is above 85%. Consider optimizing resources to prevent potential downtime.",
    date: "February 28, 2025",
    sortedDate: "2025-02-28",
    read: false,
    from: "System Admin Team",
    color: "#2196F3", // Blue
  },
  {
    id: 5,
    icon: <FaLock size={24} color="#FF9800" />,
    main: "Password Change Alert",
    description:
      'Admin user "admin123" has successfully changed their password.',
    date: "March 15, 2025",
    sortedDate: "2025-03-15",
    read: false,
    from: "Security Team",
    color: "#FF9800", // Orange
  },
  {
    id: 6,
    icon: <FaChartLine size={24} color="#FFC107" />,
    main: "High Traffic Spike",
    description:
      "A traffic spike has been detected on your website, with 1,200 active users in the last 10 minutes.",
    date: "March 5, 2025",
    sortedDate: "2025-03-05",
    read: false,
    from: "Analytics Team",
    color: "#FFC107", // Amber
  },
  {
    id: 7,
    icon: <FaShoppingCart size={24} color="#4CAF50" />,
    main: "Order Received",
    description:
      'New order #3021 placed by customer "alice_smith" for 3 items.',
    date: "February 19, 2025",
    sortedDate: "2025-02-19",
    read: false,
    from: "Sales System",
    color: "#4CAF50", // Green
  },
  {
    id: 8,
    icon: <FaBox size={24} color="#FF5722" />,
    main: "Inventory Low Alert",
    description:
      'Product "Wireless Headphones" stock is low. Only 5 items left.',
    date: "March 18, 2025",
    sortedDate: "2025-03-18",
    read: false,
    from: "Inventory Management",
    color: "#FF5722", // Deep Orange
  },
  {
    id: 9,
    icon: <FaShieldAlt size={24} color="#9C27B0" />,
    main: "Security Vulnerability Detected",
    description:
      "A critical security patch is available for your website's core software. Please update immediately to avoid vulnerabilities.",
    date: "February 22, 2025",
    sortedDate: "2025-02-22",
    read: false,
    from: "Security Team",
    color: "#9C27B0", // Purple
  },
  {
    id: 10,
    icon: <MdMessage size={24} color="#3F51B5" />,
    main: "New Message from Support",
    description:
      'You have received a new message from the support team: "Your server issue has been resolved. Please check the status."',
    date: "February 20, 2025",
    sortedDate: "2025-02-20",
    read: false,
    from: "Support Team",
    color: "#3F51B5", // Indigo
  },
  {
    id: 11,
    icon: <FaCreditCard size={24} color="#FFEB3B" />,
    main: "Failed Payment Notification",
    description:
      'Payment for order #2098 failed. Please verify the payment method for customer "john_doe".',
    date: "March 10, 2025",
    sortedDate: "2025-03-10",
    read: false,
    from: "Payment Gateway",
    color: "#FFEB3B", // Yellow
  },
  {
    id: 12,
    icon: <FaComment size={24} color="#FF5722" />,
    main: "New Comment on Blog Post",
    description:
      '"Interesting article! Looking forward to more updates" - Comment on your latest blog post.',
    date: "March 1, 2025",
    sortedDate: "2025-03-01",
    read: false,
    from: 'User "mark_smith"',
    color: "#FF5722", // Deep Orange
  },
  {
    id: 13,
    icon: <FaDatabase size={24} color="#00BCD4" />,
    main: "Backup Completed Successfully",
    description:
      "Your system backup was completed successfully at 2:00 AM today.",
    date: "March 13, 2025",
    sortedDate: "2025-03-13",
    read: false,
    from: "Backup Service",
    color: "#00BCD4", // Cyan
  },
  {
    id: 14,
    icon: <FaBan size={24} color="#F44336" />,
    main: "User Account Suspended",
    description:
      'User "mike_brown" has been suspended due to a violation of the terms of service.',
    date: "March 7, 2025",
    sortedDate: "2025-03-07",
    read: false,
    from: "Admin Team",
    color: "#F44336", // Red
  },
  {
    id: 15,
    icon: <FaTools size={24} color="#9E9E9E" />,
    main: "System Maintenance Reminder",
    description:
      "Scheduled system maintenance will begin in 1 hour. Please inform users about possible downtime from 3:00 PM to 5:00 PM.",
    date: "March 3, 2025",
    sortedDate: "2025-03-03",
    read: false,
    from: "System Admin Team",
    color: "#9E9E9E", // Grey
  },
];
