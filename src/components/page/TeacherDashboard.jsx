import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../page/Sidebar";
import "../../style/TeacherDashboard.css";

function TeacherDashboard() {
  const navigate = useNavigate();

  const [activeSection, setActiveSection] = useState("profile");

  const [teacherData, setTeacherData] = useState({
    nationalId: "",
    firstName: "",
    lastName: "",
    birthDate: "",
    phone: "",
    photo: "",
  });

  const [profileImg, setProfileImg] = useState(null);
  const [isProfileComplete, setIsProfileComplete] = useState(false);

  // بارگذاری اطلاعات از localStorage
  useEffect(() => {
    const saved = localStorage.getItem("teacherData");
    if (saved) {
      const parsed = JSON.parse(saved);
      setTeacherData(parsed);
      setProfileImg(parsed.photo);
      setIsProfileComplete(true);
    }
  }, []);

  // ذخیره اطلاعات نمایه
  const handleSave = (e) => {
    e.preventDefault();
    if (
      teacherData.nationalId &&
      teacherData.firstName &&
      teacherData.lastName &&
      teacherData.birthDate &&
      teacherData.phone
    ) {
      localStorage.setItem("teacherData", JSON.stringify(teacherData));
      setIsProfileComplete(true);
      alert("اطلاعات با موفقیت ذخیره شد");
    } else {
      alert("لطفاً تمام فیلدها را پر کنید");
    }
  };

  // انتخاب و نمایش عکس
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImg(reader.result);
        setTeacherData({ ...teacherData, photo: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  // پاک‌کردن نمایه معلم و بازنشانی فرم
  const handleProfileReset = () => {
    localStorage.removeItem("teacherData");
    setTeacherData({
      nationalId: "",
      firstName: "",
      lastName: "",
      birthDate: "",
      phone: "",
      photo: "",
    });
    setProfileImg(null);
    setIsProfileComplete(false);
    alert("نمایه معلم پاک شد. لطفاً مجدداً اطلاعات را وارد کنید.");
  };

  // داده‌های نمونه دانش‌آموزان
  const students = [
    { name: "امیر", lastName: "رحیمی", grade: "هفتم", subject: "ریاضی" },
    { name: "محمد", lastName: "جعفری", grade: "هفتم", subject: "علوم" },
    { name: "علی", lastName: "کریمی", grade: "هشتم", subject: "ورزش" },
    { name: "رضا", lastName: "حسینی", grade: "نهم", subject: "فارسی" },
    { name: "سینا", lastName: "عباسی", grade: "نهم", subject: "ریاضی" },
    { name: "پارسا", lastName: "ملکی", grade: "هشتم", subject: "زبان انگلیسی" },
    { name: "امیرحسین", lastName: "زارعی", grade: "هفتم", subject: "دینی" },
    { name: "عرفان", lastName: "موسوی", grade: "هشتم", subject: "تاریخ" },
    { name: "یونس", lastName: "احمدی", grade: "نهم", subject: "اجتماعی" },
    { name: "محمدرضا", lastName: "بیاتی", grade: "هشتم", subject: "ورزش" },
    { name: "مهدی", lastName: "نصیری", grade: "هفتم", subject: "ریاضی" },
    { name: "علی", lastName: "کاظمی", grade: "نهم", subject: "علوم" },
    { name: "طاها", lastName: "جلالی", grade: "نهم", subject: "زبان انگلیسی" },
    { name: "پیمان", lastName: "محمدی", grade: "هشتم", subject: "اجتماعی" },
    { name: "رضوان", lastName: "کریمیان", grade: "هفتم", subject: "هنر" },
  ];

  // کلیک روی دانش‌آموز
  const handleStudentClick = (student) => {
    localStorage.setItem("selectedStudent", JSON.stringify(student));
    navigate("/teacher-dashboard/student-evaluation");
  };

  return (
    <div className="teacher-dashboard">
      <Sidebar
        role="teacher"
        isProfileComplete={isProfileComplete}
        onNavigate={setActiveSection}
      />

      <div className="teacher-main">
        {/* بخش پروفایل معلم */}
        {activeSection === "profile" && (
          <div className="profile-card">
            <h2 className="card-title">پروفایل معلم</h2>

            {!isProfileComplete && (
              <form className="profile-form" onSubmit={handleSave}>
                <div className="photo-selector">
                  <label htmlFor="teacher-photo" className="photo-label">
                    {profileImg ? (
                      <img src={profileImg} alt="Teacher" className="preview-img" />
                    ) : (
                      <div className="photo-upload">
                        <span>+</span>
                      </div>
                    )}
                  </label>

                  <input
                    type="file"
                    id="teacher-photo"
                    accept="image/*"
                    onChange={handleImageChange}
                    style={{ display: "none" }}
                  />

                  <label htmlFor="teacher-photo" className="select-btn">
                    انتخاب تصویر
                  </label>
                </div>

                <label>کد ملی</label>
                <input
                  value={teacherData.nationalId}
                  onChange={(e) =>
                    setTeacherData({ ...teacherData, nationalId: e.target.value })
                  }
                />

                <label>نام</label>
                <input
                  value={teacherData.firstName}
                  onChange={(e) =>
                    setTeacherData({ ...teacherData, firstName: e.target.value })
                  }
                />

                <label>نام خانوادگی</label>
                <input
                  value={teacherData.lastName}
                  onChange={(e) =>
                    setTeacherData({ ...teacherData, lastName: e.target.value })
                  }
                />

                <label>تاریخ تولد</label>
                <input
                  value={teacherData.birthDate}
                  onChange={(e) =>
                    setTeacherData({ ...teacherData, birthDate: e.target.value })
                  }
                />

                <label>شماره تماس</label>
                <input
                  value={teacherData.phone}
                  onChange={(e) =>
                    setTeacherData({ ...teacherData, phone: e.target.value })
                  }
                />

                <button type="submit" className="save-btn">
                  ذخیره و ورود به پنل
                </button>
              </form>
            )}

            {isProfileComplete && (
              <div className="teacher-card">
                <h3>نمایه ثبت‌شده معلم</h3>
                <div className="teacher-card-content">
                  <div className="teacher-photo">
                    <img src={profileImg || teacherData.photo} alt="عکس معلم" />
                  </div>
                  <div className="teacher-info">
                    <p>نام: {teacherData.firstName} {teacherData.lastName}</p>
                    <p>کد ملی: {teacherData.nationalId}</p>
                    <p>تاریخ تولد: {teacherData.birthDate}</p>
                    <p>شماره تماس: {teacherData.phone}</p>
                  </div>
                </div>

                <button className="reset-btn" onClick={handleProfileReset}>
                  حذف نمایه و ورود مجدد اطلاعات
                </button>
              </div>
            )}
          </div>
        )}

        {/* بخش دانش‌آموزان */}
        {activeSection === "students-report" && (
          <div className="students-list-section">
            <h2 className="students-title">لیست دانش‌آموزان</h2>
            <div className="students-table-container">
              <table className="students-table">
                <thead>
                  <tr>
                    <th>نام</th>
                    <th>نام خانوادگی</th>
                    <th>مقطع</th>
                    <th>درس</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((s, index) => (
                    <tr key={index} onClick={() => handleStudentClick(s)}>
                      <td>{s.name}</td>
                      <td>{s.lastName}</td>
                      <td>{s.grade}</td>
                      <td>{s.subject}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeSection === "classes" && (
          <p>بخش کلاس‌های معلم (بعد از تکمیل پروفایل فعال می‌شود)</p>
        )}
      </div>
    </div>
  );
}

export default TeacherDashboard;
