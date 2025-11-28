import React from "react";
import { useNavigate } from "react-router-dom";
import "../../style/HomePage.css";
import Header from "./Header";
import photo from "../../style/مدرسه-ایرانی-در-خارج-از-کشور-7.jpg";
import photo1 from "../../style/رنگ-لباس-فرم-راهنمایی-پسرانه-1.jpg";

const HomePage = () => {
  return (
    <div className="homepage" dir="rtl">
      <Header />
      <Slider />
      <MainSections />
      <FunActivities />
      <Footer />
    </div>
  );
};

// ---------------------- اسلایدر ----------------------
const Slider = () => {
  return (
    <div className="slider">
      <div className="slider-inner">
        <img src={photo} alt="group study" />
        <img src={photo1} alt="teacher class" />
        <img
          src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg"
          alt="students teamwork"
        />
        <img
          src="https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg"
          alt="library reading"
        />
      </div>
    </div>
  );
};

// ---------------------- بخش کارت‌ها ----------------------
const MainSections = () => {
  const navigate = useNavigate();
  return (
    <section className="main-sections">
      <div className="card red" onClick={() => navigate("/achievements")}>
       <h3>افتخارات و دستاورد ها</h3>
       <p>موفقیت های علمی ورزشی ،فرهنگی  و ورزشی دانش آموزان  و مدرسه</p>
      </div>
      <div className="card yellow" onClick={() => navigate("/sports-events")}>
        <h3>رویداد های ورزشی </h3>
        <p>برگزاری مسابقات و رویداد های ورزشی متنوع برای تقویت روحیه تیمی </p>
      </div>
      <div className="card blue" onClick={() => navigate("/health-committee")}>
     <h3>کمیته های ورزشی و سلامت</h3>
     <p>فعالیت های منظم برای ارتقای سلامت جسمی و روحی دانش آموزان </p>
      </div>
      <div
        className="card purple"
        onClick={() => navigate("/educational-content")}
      >
        <h3>محتوای آموزشی</h3>
        <p>دسترسی به محتوای آموزشی با کیفیت و به روز برای تمامی دانش آموزان </p>
      </div>
    </section>
  );
};


const FunActivities = () => {
    const GAME_LINKS = {
    chess: "https://lichess.org/",
    snake: "https://playsnake.org/",
    racing: "https://slowroads.io/",
    tictactoe: "https://playtictactoe.org/",
  };
  const activities = [
    { key: "chess", icon: "♟", title: "شطرنج آنلاین", desc: "دوئل فکری با تایمر" },
    { key: "snake", icon: "🐍", title: "بازی مار", desc: "نوستالژی کلاسیک مدرسه" },
    { key: "racing", icon: "🚗", title: "مسابقه خودرو", desc: "هیجان سرعت و نیترو!" },
    { key: "tictactoe", icon: "⭕", title: "دوز کلاسیک", desc: "بازی نوبتی با هوش مصنوعی" },
  ];
    const handlePlayClick = (key) => {
    const link = GAME_LINKS[key];
    if (link) {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section className="fun-section fun-redesign">
      <div className="fun-header">
        <h2>فعالیت‌های سرگرم‌کننده آنلاین</h2>
        <p className="fun-sub">
          انتخاب کن و همین الان شروع کن؛ سبک، سریع و تمام‌صفحه!
        </p>
        <span className="fun-underline" />
      </div>

      <div className="fun-grid">
        {activities.map((a) => (
          <div key={a.key} className="activity-card">
            <div className="card-glow" />
            <div className="card-header">
              <span className="activity-icon">{a.icon}</span>
              <span className="badge">آنلاین</span>
            </div>
            <h3 className="activity-title">{a.title}</h3>
            <p className="activity-desc">{a.desc}</p>
     
             <button className="play-btn" onClick={() => handlePlayClick(a.key)}>بازی کن </button>
          </div>
        ))}
      </div>

      <div className="fun-decor d1" />
      <div className="fun-decor d2" />
      <div className="fun-decor d3" />
    </section>
  );
};


const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-box">
        <h3>مدرسه زنده‌یاد زنجانی</h3>
        <p>محل یادگیری، تلاش و افتخار</p>
      </div>

      <div className="footer-box">
        <h4>تماس با ما</h4>
        <p>📍 زنجان، میدان انقلاب</p>
        <p>📞 ۰۲۴-۳۳۴۴۵۶۷۸</p>
      </div>

      <div className="footer-box">
        <h4>ارسال پیام</h4>
        <input type="email" placeholder="ایمیل شما" />
        <button>ارسال</button>
      </div>
    </div>

    <div className="social-links">
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <i className="fab fa-instagram"></i>
      </a>
      <a
        href="https://t.me"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Telegram"
      >
        <i className="fab fa-telegram"></i>
      </a>
      <a
        href="https://www.youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="YouTube"
      >
        <i className="fab fa-youtube"></i>
      </a>
      <a
        href="https://www.linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <i className="fab fa-linkedin"></i>
      </a>
    </div>

    <p className="copy">
      ©  طراحی توسط Soft Labs
    </p>
  </footer>
);




export default HomePage;
