import React from "react";
import "../../style/EducationalContentPage.css";
import video from "../../style/image/video.mp4";
import photo from "../../style/image/فواید شنا.jpg"
import photo1 from "../../style/image/اینو چوگان.jpg"
import pdf1 from "../../style/image/pdf1.pdf"
import pdf2 from "../../style/image/pdf2.pdf"
import pdf3 from "../../style/image/pdf3.pdf"
import pdf4 from "../../style/image/pdf4.pdf"
import pdf5 from "../../style/image/pdf5.pdf"
import pdf6 from "../../style/image/pdf6.pdf"
import pdf7 from "../../style/image/pdf7.pdf"
import Header from "./Header";
import Footer from "./Footer";


const EducationalContentPage = () => {
  const pdfList = [
    { id: 1, title:"آموزش سپک تاکارا", link: pdf1 },
    { id: 2, title: "فایل آموزشی تجهیزات شنا", link: pdf2 },
    { id: 3, title: "فایل آموزشی  فواید دوچرخه سواری",  link: pdf3 },
    { id: 4, title: "فایل  آموزشی فواید آموزشی ورزش رای افراد مسن",  link: pdf4},
    { id: 5, title: "فایل آموزشی کشتی لوچو",  link: pdf5 },
    { id: 6, title: "اینفوگرافی پرتاب گوی",  link: pdf6},
    { id: 7, title: "اینوگرافی فوتبال دستی ",  link: pdf7 },
  ];

  return (
    <div>
      <Header />
    <div className="edu-page">

      {/* -------------------- هدر -------------------- */}
      <div className="edu-header">
        <h1>محتوای آموزشی</h1>
        <p>ویدئو و جزوه‌های  آموزشی  PDF مخصوص دانش‌آموزان</p>
      </div>

      {/* -------------------- ویدئو واقعی -------------------- */}
      <section className="edu-video-section">
        <div className="edu-video-container real-video">
       

          <video src={video} controls className="edu-real-video" />

        </div>
      </section>

      {/* -------------------- دو تصویر -------------------- */}
      <section className="edu-images-section">
        <h2 className="section-title">تصاویر کمک‌درسی</h2>

        <div className="edu-images-grid">
          <div className="edu-image-card">
            <div className="image"></div>
             <img src={photo} className="edu-image" alt="help poster" />
            <h3> چهار فایده اصلی شنا</h3>
            
          </div>

          <div className="edu-image-card">
            <div className="image"></div>
            <img src={photo1} className="edu-image" alt="help poster" />
            <h3>چوگان ، ورزش شاهان ایران باستان</h3>
           
          </div>
        </div>
      </section>

      {/* -------------------- PDF ها -------------------- */}
      <section className="edu-pdf-section">
        <h2 className="section-title">فایل‌های PDF آموزشی</h2>

        <div className="pdf-grid">
          {pdfList.map((item) => (
            <div className="pdf-card" key={item.id}>
              <div className="pdf-icon">PDF</div>

              <h3>{item.title}</h3>
              <p>{item.desc}</p>

              <a href={item.link} className="pdf-btn" target="_blank">
                باز کردن PDF
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
    <Footer />
    </div>
  );
};

export default EducationalContentPage;
