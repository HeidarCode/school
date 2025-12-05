import React from "react";
import "../../style/HonorsSection.css";
import Header from "./Header";
import photo1 from "../../style/image/5.jpg";
import photo2 from "../../style/image/6.jpg";
import photo3 from "../../style/image/7.jpg";
import photo4 from "../../style/image/8.jpg";
import photo5 from "../../style/image/9.jpg";
import photo6 from "../../style/image/10.jpg";
import Footer from "./Footer";

export default function HonorsSection() {
  const honors = [
    {
      id: 1,
      img: photo1,
      desc:"نایب قهرمانی تیم تنیس روی میز مدرسه زنده یاد زنجانی در مسابقات بین مدارس استان مازندران.",
    },
    {
      id: 2,
      img: photo2,
      desc: "برگزاری تست انتخابی نمایندگان تیم های ورزشی رشته های هندبال،فوتسال،والیبال مدرسه زنده یاد زنجانی در تاریخ 1404/07/23 در سالن ورزشی شهید ستاری(اسامی بازیکنان انتخاب شده متعاقبا اعلام می شود.)",
    },
    {
      id: 3,
      img: photo3,
      desc: "کسب مقام اول در مسابقات شهرستانی راه یابی نمایندگان شطرنج دبستان زنده یاد زنجانی برای حضور در مسابقات استانی بین مدارس(1404/8/20)",
    },
    {
      id: 4,
      img: photo4,
      desc: "پیروزی تیم هندبال مدرسه زنده یاد زنجانی در بازی فینال و کسب عنوان قهرمانی مسابقات بین مدارس در سطح شهرستان با نتیجه 1-4 و صعود به مرحله استانی",
    },
    {
      id: 5,
      img: photo5,
      desc: "قهرمانی دانش آموز سعید نصیری در مسابقات قهرمانی تکواندو نونهالان استان مازندران و راه یابی به مرحله کشوری.",
    },
    {
      id: 6,
      img: photo6,
      desc: "شروع مرحله استانی مسابقات قرآن، عترت و نماز استان مازندران و حضور 6 نماینده مدرسه زنده یاد زنجانی در رشته های مختلف مسابقات(انشای نماز،احکام،مداحی،صحیفه سجادیه،حفظ قرآن کریم،تفسیر)",
    },
  ];

  return (
    <div className="page-container">

      <Header />

      <main className="page-content">
        <section className="honors-section">

          <h2 className="honors-title">افتخارات و دستاوردها</h2>

          <div className="honors-grid">
            {honors.map((item) => (
              <div className="honor-card" key={item.id}>
                <img src={item.img} alt="" className="honor-img" />
                <p className="honor-card-desc">{item.desc}</p>
              </div>
            ))}
          </div>

        </section>
      </main>

      <Footer />

    </div>
  );
}
