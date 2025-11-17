import React , {useState} from "react";
import { Link } from "react-router-dom";
import {
  FaUserCircle, FaRegAddressCard, FaChartLine,
  FaClipboardList, FaChalkboardTeacher,
  FaClipboardCheck, FaChalkboard, FaSignOutAlt,
} from "react-icons/fa";
import "../../style/Sidebar.css";

const menus = {
  student: [
    { id: "profile", label: "نمایه", icon: <FaUserCircle /> },
    { id: "extra-info", label: "اطلاعات تکمیلی", icon: <FaRegAddressCard /> },
    { id: "evaluation", label: "ارزشیابی", icon: <FaChartLine /> },
  ],
  teacher: [
    { id: "profile", label: "نمایه", icon: <FaUserCircle /> },
    { id: "students-report", label: "لیست دانش‌آموزان", icon: <FaClipboardList /> },
    { id: "classes", label: "کلاس‌ها", icon: <FaChalkboardTeacher /> },
  ],
  parent: [
    { id: "profile", label: "نمایه", icon: <FaUserCircle /> },
    { id: "student-report", label: "کارنامه دانش‌آموز", icon: <FaClipboardCheck /> },
    { id: "student-class", label: "کلاس دانش‌آموز", icon: <FaChalkboard /> },
  ],
};

const Sidebar = ({ role = "student", onNavigate , isProfileComplete}) => {
  const items = menus[role] || [];
  const [activeSection, setActiveSection] = useState("profile");

  return (
    <div className="sidebar">
      <h2>پنل {role}</h2>
      
     <ul>
  {items.map((item) => {
    const disabled = !isProfileComplete && item.id !== "profile";

    return (
      <li
        key={item.id}
        className={`menu-item ${disabled ? "disabled" : ""}`}
        onClick={() => {
          if (!disabled) onNavigate(item.id);
        }}
      >
        {item.icon}
        <span>{item.label}</span>
      </li>
    );
  })}
</ul>

       
     
      <button onClick={() => onNavigate("logout")} className="logout-btn">
        <FaSignOutAlt /> خروج
      </button>
    </div>
  );
};

export default Sidebar;
