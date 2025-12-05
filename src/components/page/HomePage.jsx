import React from "react";
import { useNavigate } from "react-router-dom";
import "../../style/HomePage.css";
import Header from "./Header";
import Slider from "./Slider";
import photo1 from "../../style/image/1.jpg"
import photo2 from "../../style/image/2.jpg"
import photo3 from "../../style/image/3.jpg"
import photo4 from "../../style/image/4.jpg"
import Footer from "./Footer";

const HomePage = () => {
  return (
    <div className="homepage" dir="rtl">
      <Header />
         <Slider images={sliderImages} />   {/* 👈 اسلایدر اینجاست */}

      <MainSections />
      <FunActivities />
      <Footer />
    </div>
  );
};

 const sliderImages = [
   photo1 , photo2 , photo3 , photo4 
  ];


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


  





export default HomePage;
