import "../../style/StudentDashboard.css";
import Sidebar from "./Sidebar";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import StudentHealthInfo from "./StudentHealthInfo";
import StudentCard from "./StudentCard";
import ScoreChart from "./ScoreChart";



function StudentDashboard() {
  const [profileImg, setProfileImg] = useState(null);
  const [isProfileComplete, setIsProfileComplete] = useState(false);
  const [studentData, setStudentData] = useState({});
  const [activeSection, setActiveSection] = useState("profile");
  const [showCard, setShowCard] = useState(false);

  const navigate = useNavigate();

  const [profileData, setProfileData] = useState({
    nationalId: "0481111111",
    firstName: "محسن",
    lastName: "محمدی",
    birthDate: "1388/02/14",
    phone: "09123456789",
    password: "********",
    fatherName: "",
    grade: "",
    sport: "",
  });

  const sportsOptions = ["کشتی", "فوتبال", "شنا", "تکواندو", "والیبال", "بسکتبال"];
  const gradesOptions = ["اول", "دوم", "سوم", "چهارم", "پنجم", "ششم"];

  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => setProfileImg(reader.result);
    reader.readAsDataURL(file);
  };

  const handleSave = (e) => {
    e.preventDefault();

    if (profileData.fatherName && profileData.sport && profileData.grade && profileImg) {
      const completedProfile = {
        fatherName: profileData.fatherName,
        grade: profileData.grade,
        sport: profileData.sport,
        photo: profileImg,
        firstName: profileData.firstName,
        lastName: profileData.lastName,
      };

      setStudentData(completedProfile);
      localStorage.setItem("studentData", JSON.stringify(completedProfile));

      alert("پروفایل با موفقیت ثبت شد!");
      window.location.reload();
    } else {
      alert("همه فیلدها (نام پدر، پایه، رشته و تصویر) اجباری‌اند.");
    }
  };

  const handleDeleteProfile = () => {
    localStorage.removeItem("studentData");
    setStudentData({});
    setIsProfileComplete(false);
    setProfileImg(null);
    window.location.reload();
  };

  useEffect(() => {
    const saved = localStorage.getItem("studentData");
    if (saved) {
      const parsed = JSON.parse(saved);
      setStudentData(parsed);
      setProfileImg(parsed.photo);
      setIsProfileComplete(true);
    }
  }, []);

  return (
    <div className="dashboard-container">

      <Sidebar
        role="student"
        isProfileComplete={isProfileComplete}
        onNavigate={(section) => setActiveSection(section)}
      />

      <div className="dashboard-content">

        {/* ------------------ بخش پروفایل ------------------ */}
        {activeSection === "profile" && (
          <div className="Student-profile-card">

            <h2 className="card-title">پروفایل دانش‌آموز</h2>

            {!isProfileComplete ? (
              <>
                <div className="profile-photo">
                  <div className="photo-circle">
                    {profileImg ? (
                      <img src={profileImg} alt="پروفایل" />
                    ) : (
                      <span className="photo-placeholder">+</span>
                    )}
                  </div>

                  <label htmlFor="fileInput" className="photo-btn">
                    انتخاب تصویر
                  </label>

                  <input
                    type="file"
                    id="fileInput"
                    accept="image/*"
                    onChange={handleImageUpload}
                    hidden
                  />
                </div>

                {/* فرم */}
                <form className="Teacher-profile-form" onSubmit={handleSave}>

                  <div className="form-row">
                    <label>کد ملی</label>
                    <input value={profileData.nationalId} disabled />
                  </div>

                  <div className="form-row">
                    <label>نام</label>
                    <input value={profileData.firstName} disabled />
                  </div>

                  <div className="form-row">
                    <label>نام خانوادگی</label>
                    <input value={profileData.lastName} disabled />
                  </div>

                  <div className="form-row">
                    <label>تاریخ تولد</label>
                    <input value={profileData.birthDate} disabled />
                  </div>

                  <div className="form-row">
                    <label>شماره تماس</label>
                    <input value={profileData.phone} disabled />
                  </div>

                  <div className="form-row">
                    <label>رمز عبور</label>
                    <input type="password" value={profileData.password} disabled />
                  </div>

                  <div className="form-row">
                    <label>نام پدر</label>
                    <input name="fatherName" value={profileData.fatherName} onChange={handleChange} />
                  </div>

                  <div className="form-row">
                    <label>پایه تحصیلی</label>
                    <select name="grade" value={profileData.grade} onChange={handleChange}>
                      <option value="">انتخاب کنید</option>
                      {gradesOptions.map((g, i) => (
                        <option key={i} value={g}>{g}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-row">
                    <label>رشته ورزشی</label>
                    <select name="sport" value={profileData.sport} onChange={handleChange}>
                      <option value="">انتخاب کنید</option>
                      {sportsOptions.map((s, i) => (
                        <option key={i} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <button type="submit" className="save-btn">
                    ذخیره و نمایش نمایه
                  </button>
                </form>

              </>
            ) : (
              <div className="student-profile-card">

                <div className="student-profile-avatar">
                  <img src={studentData.photo} alt="دانش‌آموز" />
                </div>

                <h3>اطلاعات دانش‌آموز</h3>

                <div className="student-profile-info">
                  <p><strong>نام:</strong> {studentData.firstName} {studentData.lastName}</p>
                  <p><strong>نام پدر:</strong> {studentData.fatherName}</p>
                  <p><strong>پایه تحصیلی:</strong> {studentData.grade}</p>
                  <p><strong>رشته ورزشی:</strong> {studentData.sport}</p>
                  <p><strong>امتیاز کلی دانش‌آموز:</strong> 193</p>
                </div>
                  {/* نمودار تغییرات نمرات */}
<ScoreChart monthlyScores={[12, 14, 15, 17, 19, 18, 20, 18, 17, 19, 20, 20]} />

                <button className="download-btn" onClick={() => setShowCard(true)}>
                  👁️ نمایش کارت دانش‌آموزی
                </button>

                <button className="delete-profile-btn" onClick={handleDeleteProfile}>
                  حذف نمایه
                </button>

              </div>
            )}

          </div>
        )}

        {/* ------------------ اطلاعات تکمیلی ------------------ */}
        {activeSection === "extra-info" && (
          <div className="extra-info-section">
            <StudentHealthInfo />
          </div>
        )}

        {/* ------------------ صفحه ارزشیابی ------------------ */}
        {activeSection === "evaluation" && (
          <div className="evaluation-section">
            <h2>صفحه ارزشیابی دانش‌آموز</h2>
            <p>در آینده این بخش با فرم ارزیابی معلم جایگزین می‌شود.</p>
          </div>
        )}

      </div>

      {/* ----------- مودال نمایش کارت دانش‌آموز ----------- */}
      {showCard && (
        <div className="card-modal">
          
          <div className="card-overlay" onClick={() => setShowCard(false)}></div>

          <div className="card-content">
            <StudentCard
              name={`${studentData.firstName} ${studentData.lastName}`}
              fatherName={studentData.fatherName}
              grade={studentData.grade}
              major={studentData.sport}
              continuousScore={80}
              finalScore={20}
              profileImg={studentData.photo}
            />
            
            <button className="close-card-btn" onClick={() => setShowCard(false)}>
              بستن کارت
            </button>
          </div>
        </div>
      )}


    </div>
  );
}

export default StudentDashboard;
