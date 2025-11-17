import React, { useState } from "react";
import "../style/AuthPage.css";
// import { Calendar } from "react-modern-calendar-datepicker";
// import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { useNavigate } from "react-router-dom";


function AuthPage() {
    const [isLogin, setIsLogin] = useState(true); // حالت ورود یا ثبت‌نام
    const [role, setRole] = useState(""); // نقش کاربر


    const [selectedDate, setSelectedDate] = useState(null);
    const [nationalCode, setNationalCode] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        // بررسی طول کد ملی
        if (nationalCode.length !== 10) {
            alert("کد ملی باید دقیقا ۱۰ رقم باشد!");
            return;
        }

        // تشخیص نقش بر اساس کد ملی
        if (nationalCode === "0481111111") {
            navigate("/student-dashboard");
        } else if (nationalCode === "0482222222") {
            navigate("/teacher-dashboard");
        } else if (nationalCode === "0483333333") {
            navigate("/parent-dashboard");
        } else {
            alert("کد ملی معتبر نیست یا در سیستم ثبت نشده است.");
        }
    };
    const navigate = useNavigate();


    return (
        <div className="auth-container">
            <div className="auth-box">
                <h1 className="portal-title">درگاه مدرسه</h1>

                {/* دکمه‌های ورود / ثبت‌نام */}
                <div className="auth-tabs">
                    <button
                        className={`tab-btn ${isLogin ? "active" : ""}`}
                        onClick={() => {
                            setIsLogin(true);
                            setRole("");
                        }}
                    >
                        ورود
                    </button>
                    <button
                        className={`tab-btn ${!isLogin ? "active" : ""}`}
                        onClick={() => {
                            setIsLogin(false);
                            setRole("");
                        }}
                    >
                        ثبت‌ نام
                    </button>
                </div>

                {/* فرم ورود */}
                {isLogin ? (
                    <form className="form" onSubmit={handleLogin}>
                        <label>کد ملی</label>
                        <input type="text" placeholder="کد ملی خود را وارد کنید"
                            value={nationalCode}
                            onChange={(e) => setNationalCode(e.target.value)} />

                        <label>رمز عبور</label>
                        <input type="password" placeholder="رمز عبور"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />

                        <button type="submit" className="submit-btn">ورود</button>

                        <p className="switch-text">
                            هنوز حسابی ندارید؟{" "}
                            <span onClick={() => setIsLogin(false)}>ثبت‌ نام</span>
                        </p>
                    </form>
                ) : (
                    // فرم ثبت‌نام
                    <form className={`form ${!isLogin ? "scrollable" : ""}`}>
                        {/* دکمه‌های انتخاب نقش */}
                        <div className="role-selection">
                            <label className="role-title">نقش خود را انتخاب کنید:</label>
                            <div className="role-buttons">
                                {["دانش‌آموز", "معلم", "خانواده"].map((roleName, index) => {
                                    const roleValue = ["student", "teacher", "parent"][index];
                                    return (
                                        <button
                                            key={roleValue}
                                            type="button"
                                            className={`role-btn ${role === roleValue ? "active" : ""}`}
                                            onClick={() => setRole(roleValue)}
                                        >
                                            {roleName}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {role && (
                            <>
                                <label>نام</label>
                                <input type="text" placeholder="نام" />

                                <label>نام خانوادگی</label>
                                <input type="text" placeholder="نام خانوادگی" />

                                <label>کد ملی</label>
                                <input type="text" placeholder="کد ملی" />


                                <label>تاریخ تولد (شمسی)</label>
                                <input type="text"
                                    id="birthDate"
                                    placeholder="مثلاً ۱۳۸۵/۰۴/۲۲"
                                    inputMode="numeric"
                                    pattern="\d{4}/\d{2}/\d{2}" />


                                <label>شماره تماس</label>
                                <input type="text" placeholder="09xxxxxxxxx" />

                                {role === "parent" && (
                                    <>
                                        <label>کد ملی دانش‌آموز</label>
                                        <input type="text" placeholder="کد ملی دانش‌آموز" />
                                    </>
                                )}

                                <label>رمز عبور</label>
                                <input type="password" placeholder="رمز عبور" />

                                <button type="submit" className="submit-btn">
                                    ثبت‌نام
                                </button>
                            </>
                        )}

                        <p className="switch-text">
                            قبلاً ثبت‌نام کرده‌اید؟{" "}
                            <span onClick={() => setIsLogin(true)}>ورود</span>
                        </p>
                    </form>
                )}
            </div>
        </div>
    );
}

export default AuthPage;
