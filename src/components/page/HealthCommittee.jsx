import React from "react";
import "../../style/HealthCommittee.css";
import Header from "../page/Header";
import { FaUserCircle } from "react-icons/fa";

const council = {
  honorary: [
    { name: "آقای محمد نادری", role: "مدیریت مدرسه" },
    { name: "خانم لیلا رستگار", role:"معاونت پرورشی مدرسه" },
    { name:"محمد آرزم", role: "دبیر تربیت بدنی مدرسه" },
  ],
  students: [
    { name: "رضا محمدی", grade: "پایه نهم", role: "رئیس شورا" },
    { name: "مریم کیانی", grade: "پایه هشتم", role: "دبیر شورا" },
     { name: "مریم کیانی", grade: "پایه هشتم", role: "عضو شورا" },
      { name: "مریم کیانی", grade: "پایه هشتم", role: "عضو شورا" },
       { name: "مریم کیانی", grade: "پایه هشتم", role: "عضو شورا" },
  ],
};

// 🟢 کمیته‌ها (هر دانش‌آموز: نام + پایه)
const committees = [
  {
    title: "کمیته ترویج سلامت و ورزش",
    students: [
      { name: "مریم احمدی", grade: "پایه نهم" },
      { name: "یاسین ملکی", grade: "پایه هشتم" },
      { name: "محمد نوروزی", grade: "پایه نهم" },
      { name: "الهام پوررضا", grade: "پایه هشتم" },
      { name: "علیرضا شریفی", grade: "پایه هفتم" },
    ],
  },
  {
    title: "کمیته فضای مجازی و بازی‌های دیجیتال",
    students: [
      { name: "مهشید حسین‌زاده", grade: "پایه نهم" },
      { name: "امیرحسین قره‌داغی", grade: "پایه هشتم" },
      { name: "سینا باباپور", grade: "پایه نهم" },
      { name: "شقایق فرضی", grade: "پایه هشتم" },
      { name: "رامین امیری", grade: "پایه هفتم" },
    ],
  },
  {
    title: "کمیته مسابقات و رویدادها",
    students: [
      { name: "عارف قریبی", grade: "پایه نهم" },
      { name: "فاطمه ادهم", grade: "پایه هشتم" },
      { name: "پارسا نظری", grade: "پایه نهم" },
      { name: "نیلوفر راد", grade: "پایه هشتم" },
      { name: "حسین عباس‌زاده", grade: "پایه هفتم" },
    ],
  },
  {
    title: "کمیته مدیریت حوادث",
    students: [
      { name: "الهه جلالی", grade: "پایه نهم" },
      { name: "سامان اسلامی", grade: "پایه هشتم" },
      { name: "مژگان یزدانی", grade: "پایه هشتم" },
      { name: "پرهام حاتمی", grade: "پایه نهم" },
      { name: "رها سعیدی", grade: "پایه هفتم" },
    ],
  },
  {
    title: "کمیته ارزیابی محیط",
    students: [
      { name: "آتنا باقری", grade: "پایه نهم" },
      { name: "پویا معصومی", grade: "پایه هشتم" },
      { name: "شهرزاد دانش‌طلب", grade: "پایه نهم" },
      { name: "بهراد افشاری", grade: "پایه هشتم" },
      { name: "نیما هاشمی", grade: "پایه هفتم" },
    ],
  },
];

// 🟢 کارت دانش‌آموز
function MemberCard({ name, grade, role }) {
  return (
    <div className="committee-card">
      <FaUserCircle className="committee-icon" />
      <div className="committee-name">{name}</div>
      {grade && <div className="committee-grade">{grade}</div>}
      {role && <div className="committee-role">{role}</div>}
    </div>
  );
}

export default function HealthCommittee() {
  return (
    <div className="health-committees-container">
      <Header />
      <main className="health-committees-main">
        <h1 className="health-title">کمیته‌ها و شورای ورزشی مدرسه زنده یاد زنجانی</h1>

        {/* 🏫 شورای ورزشی */}
        <section className="glass-section">
          <h2 className="committee-section-title">شورای ورزشی مدرسه</h2>
          <div className="council-groups">

            <div className="council-group">
              <div className="council-group-title">اعضای افتخاری مدرسه</div>
              <div className="council-members">
                {council.honorary.map((m, i) => (
                  <MemberCard key={i} name={m.name} role={m.role} />
                ))}
              </div>
            </div>

            <div className="council-group">
              <div className="council-group-title">اعضای دانش‌آموزی شورا</div>
              <div className="council-members">
                {council.students.map((m, i) => (
                  <MemberCard key={i} name={m.name} grade={m.grade} role={m.role} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 🧭 کمیته‌ها */}
        {committees.map((com, idx) => (
          <section className="glass-section" key={idx}>
            <h2 className="committee-section-title">{com.title}</h2>
            <div className="committee-students">
              {com.students.map((s, i) => {
                const role =
                  i === 0 ? "مسئول کمیته" :
                  i === 1 ? "دبیر کمیته" :
                  "عضو کمیته";
                return <MemberCard key={i} name={s.name} grade={s.grade} role={role} />;
              })}
            </div>
          </section>
        ))}
      </main>
     
    </div>
  );
}

