// src/components/sports/SportsEventsPage.jsx
import React from "react";
import "../../style/SportsEventsPage.css";
import Header from "./Header";
import Footer from "./Footer";

export default function SportsEventsPage() {
  // ============================
  // فوتبال
  // ============================
  const footballTeams = [
    {
      name: "ستارگان فجر",
      players:
        "علی رضایی، مهدی احمدی، حسین کریمی، رضا مرادی، امیر عباسی، سجاد قاسمی",
      status: "صعود کرده",
    },
    {
      name: "شهدای مدرسه",
      players:
        "محمد اکبری، سعید نصیری، ایمان جعفری، پارسا محمدی، یاسین شریفی، حمید صادقی",
      status: "صعود کرده",
    },
    {
      name: "قهرمانان آینده",
      players:
        "امیررضا حیدری، محمدمهدی رستمی، علی‌اصغر موسوی، سینا رحیمی، پویا محمدلو، عارف ملکی",
      status: "صعود کرده",
    },
    {
      name: "صاعقه شمال",
      players:
        "حسین نادری، امین فرهادی، مهدی لطفی، حامد عسگری، علی فلاح، محمد کرمی",
      status: "صعود کرده",
    },
    {
      name: "یوزهای مازندران",
      players:
        "عرفان احمدپور، ابوالفضل محمدی، رضا اسکندری، ابراهیم نعمتی، یاسر احمدی، سعید ملکی",
      status: "حذف شده",
    },
    {
      name: "شهاب‌سنگ",
      players:
        "علی‌رضا رفیعی، امیرسام مهدوی، متین باقری، محمدهادی کاظمی، سروش اکبری، امیرحسین طاهری",
      status: "حذف شده",
    },
    {
      name: "پارس شمال",
      players:
        "یونس محمدپور، علیرضا تیموری، رضا یگانه، علی یوسفی، نیما قربانی، حسام احمدی",
      status: "حذف شده",
    },
    {
      name: "طوفان زرد",
      players:
        "محمد طاهریان، ابوالفضل رضازاده، مهدی قائمی، علیرضا رمضانپور، امیرحسین شعبانی، سینا رستگار",
      status: "حذف شده",
    },
  ];

  const footballSemifinals = [
    {
      match: "ستارگان فجر  ⚽  شهدای مدرسه",
      date: "سه‌شنبه ۹ بهمن ۱۴۰۴",
      time: "ساعت ۱۰:۳۰ صبح",
      place: "سالن ورزشی شهید ستاری",
    },
    {
      match: "قهرمانان آینده  ⚽  صاعقه شمال",
      date: "سه‌شنبه ۹ بهمن ۱۴۰۴",
      time: "ساعت ۱۱:۳۰ صبح",
      place: "سالن ورزشی شهید ستاری",
    },
  ];

  // ============================
  // تنیس روی میز
  // ============================
  const tennisMatches = [
    { p: "سعید نصیری", d: "۱۰ بهمن", r: "امیر محمدی", s: "۲ - ۱" },
    { p: "علی رضاپور", d: "۱۰ بهمن", r: "پارسا عباسی", s: "۰ - ۲" },
    { p: "سینا رستگار", d: "۱۱ بهمن", r: "محمد اسدی", s: "۱ - ۲" },
    { p: "حسین نادری", d: "۱۱ بهمن", r: "یاسین محمدلو", s: "۲ - ۰" },

    // مسابقات برنامه‌ریزی شده
    { p: "امیر محمدی", d: "۱۲ بهمن", r: "سعید نصیری", s: "—" },
    { p: "پارسا عباسی", d: "۱۲ بهمن", r: "علی رضاپور", s: "—" },
    { p: "محمد اسدی", d: "۱۲ بهمن", r: "سینا رستگار", s: "—" },
    { p: "یاسین محمدلو", d: "۱۲ بهمن", r: "حسین نادری", s: "—" },
  ];

  const tennisSemifinals = [
    {
      m: "سعید نصیری  🎾  حسین نادری",
      date: "۱۵ بهمن ۱۴۰۴",
      time: "ساعت ۹:۳۰ صبح",
      place: "سالن چند منظوره مدرسه",
    },
    {
      m: "محمد اسدی  🎾  پارسا عباسی",
      date: "۱۵ بهمن ۱۴۰۴",
      time: "ساعت ۱۰:۰۰ صبح",
      place: "سالن چند منظوره مدرسه",
    },
  ];

  return (
    <div>
        <Header />
    <div className="sports-page" dir="rtl">
        
      {/* هدر با انیمیشن */}
      <header className="sports-hero">
        <div className="sports-hero-overlay" />
        <div className="sports-hero-content">
          <span className="sports-hero-tag">ویژه‌برنامه دهه مبارک فجر</span>
          <h1 className="sports-hero-title">
            مسابقات ورزشی<span> دهه مبارک فجر</span>
          </h1>
          <p className="sports-hero-subtitle">
            رقابت سالم، رفاقت ماندگار؛ ویژه دانش‌آموزان دبستان زنده‌یاد زنجانی
          </p>
        </div>
      </header>

      <main className="sports-content">
        {/* ========================== */}
        {/* جدول فوتبال */}
        {/* ========================== */}
        <section className="sports-section">
          <h2 className="section-title section-title-football">
            جدول رده‌بندی مسابقات فوتبال
          </h2>
          <p className="section-caption">
            ۸ تیم ۶ نفره – مرحله مقدماتی؛ وضعیت صعود یا حذف هر تیم مشخص شده است.
          </p>

          <div className="table-card table-card-football">
            <div className="table-glow table-glow-football" />

            <table className="sports-table">
              <thead>
                <tr>
                  <th>نام تیم</th>
                  <th>اسامی بازیکنان</th>
                  <th>وضعیت</th>
                </tr>
              </thead>

              <tbody>
                {footballTeams.map((team, index) => (
                  <tr
                    key={index}
                    className={
                      team.status === "صعود کرده"
                        ? "row-qualified"
                        : "row-eliminated"
                    }
                    style={{ animationDelay: `${index * 0.06}s` }}
                  >
                    <td>{team.name}</td>
                    <td>{team.players}</td>
                    <td className="status-cell">
                      <span
                        className={
                          team.status === "صعود کرده"
                            ? "status-badge status-qualified"
                            : "status-badge status-eliminated"
                        }
                      >
                        {team.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ========================== */}
        {/* نیمه‌نهایی فوتبال */}
        {/* ========================== */}
        <section className="sports-section">
          <h2 className="section-title section-title-semi">
            برنامه مسابقات نیمه‌نهایی فوتبال
          </h2>

          <p className="section-caption">
            دیدارهای نیمه‌نهایی با حضور داوران و اعضای کمیته ورزشی برگزار خواهد شد.
          </p>

          <div className="semifinal-grid">
            {footballSemifinals.map((g, i) => (
              <div
                key={i}
                className="semifinal-card"
                style={{ animationDelay: `${i * 0.12}s` }}
              >
                <div className="semifinal-badge">نیمه‌نهایی</div>
                <h3 className="semifinal-match">{g.match}</h3>

                <div className="semifinal-info">
                  <span>
                    <i className="fa-regular fa-calendar-days" /> {g.date}
                  </span>
                  <span>
                    <i className="fa-regular fa-clock" /> {g.time}
                  </span>
                  <span>
                    <i className="fa-solid fa-location-dot" /> {g.place}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
         <section className="sports-section notes-section">
          <h2 className="section-title section-title-notes">
           توضیحات مسابقات فوتبال 
          </h2>

          <div className="notes-grid">
            <div className="note-card note-card-primary">
              <p>
                مسابقات شامل ۸ تیم در مرحله مقدماتی و ۴ تیم در مرحله نیمه‌نهایی
                می‌باشد.
              </p>
            </div>

            <div className="note-card note-card-accent">
              <p>
                مسابقات به صورت تک‌حذفی و با حضور اعضای کمیته‌های ورزشی مدرسه
                انجام می‌شود.
              </p>
            </div>

            <div className="note-card note-card-outline">
              <p>
                قرعه‌کشی مرحله مقدماتی در تاریخ دوشنبه ۲ بهمن با حضور مسئولین
                کمیته‌های ورزشی و شورای دانش‌آموزی برگزار شده است.
              </p>
            </div>
          </div>
        </section>

        {/* ========================== */}
        {/* جدول تنیس روی میز */}
        {/* ========================== */}
        <section className="sports-section">
          <h2 className="section-title section-title-tennis">
            جدول مسابقات تنیس روی میز
          </h2>

          <p className="section-caption">
            ۸ بازیکن – شامل نام بازیکن، تاریخ برگزاری، حریف و نتیجه
          </p>

          <div className="table-card table-card-tennis">
            <div className="table-glow table-glow-tennis" />

            <table className="sports-table">
              <thead>
                <tr>
                  <th>نام بازیکن</th>
                  <th>تاریخ</th>
                  <th>حریف</th>
                  <th>نتیجه</th>
                </tr>
              </thead>

              <tbody>
                {tennisMatches.map((row, i) => (
                  <tr key={i} style={{ animationDelay: `${i * 0.07}s` }}>
                    <td>{row.p}</td>
                    <td>{row.d}</td>
                    <td>{row.r}</td>
                    <td>{row.s}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ========================== */}
        {/* نیمه‌نهایی تنیس روی میز */}
        {/* ========================== */}
        <section className="sports-section">
          <h2 className="section-title section-title-semi-tennis">
            مرحله نیمه‌نهایی تنیس روی میز
          </h2>

          <p className="section-caption">
            مسابقات نیمه‌نهایی با حضور برندگان مرحله مقدماتی برگزار می‌شود.
          </p>

          <div className="semifinal-grid">
            {tennisSemifinals.map((g, i) => (
              <div
                key={i}
                className="semifinal-card semifinal-card-tennis"
                style={{ animationDelay: `${i * 0.12}s` }}
              >
                <div className="semifinal-badge">نیمه‌نهایی</div>

                <h3 className="semifinal-match">{g.m}</h3>

                <div className="semifinal-info">
                  <span>
                    <i className="fa-regular fa-calendar-days" /> {g.date}
                  </span>
                  <span>
                    <i className="fa-regular fa-clock" /> {g.time}
                  </span>
                  <span>
                    <i className="fa-solid fa-location-dot" /> {g.place}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================== */}
        {/* توضیحات پایانی تنیس روی میز */}
        {/* ========================== */}
        <section className="sports-section notes-section">
          <h2 className="section-title section-title-tennis-notes">
            توضیحات مسابقات تنیس روی میز
          </h2>

          <div className="notes-grid">
            <div className="note-card note-card-primary">
              <p>
                مسابقات مقدماتی شامل ۴ بازی بوده و هر مسابقه از سه ست ۱۱ امتیازی
                تشکیل می‌شود.
              </p>
            </div>

            <div className="note-card note-card-accent">
              <p>
                برندگان مرحله مقدماتی به مرحله نیمه‌نهایی صعود کرده و براساس
                قرعه با حریف خود مسابقه خواهند داد.
              </p>
            </div>

            <div className="note-card note-card-outline">
              <p>
                فینال مسابقات در تاریخ
                <strong> ۲۰ بهمن ماه </strong>
                در سه ست ۲۱ امتیازی و با حضور مدیریت و اعضای کمیته ورزشی برگزار
                خواهد شد.
              </p>
            </div>
          </div>
        </section>

      {/* ========================== */}
{/* جدول مسابقات طناب‌کشی */}
{/* ========================== */}
<section className="sports-section">
  <h2 className="section-title section-title-rope">
    جدول مسابقات طناب‌کشی
  </h2>

  <p className="section-caption">
    مسابقات بین‌کلاسی – شامل تیم‌ها، تاریخ برگزاری، محل و نتیجه (برنده یا در حال برگزاری)
  </p>

  <div className="table-card table-card-rope">
    <div className="table-glow table-glow-rope" />

    <table className="sports-table">
      <thead>
        <tr>
          <th>تیم‌ها</th>
          <th>تاریخ</th>
          <th>محل برگزاری</th>
          <th>نتیجه</th>
        </tr>
      </thead>

      <tbody>
        {[
          {
            teams: "کلاس سوم الف  🆚  کلاس دوم ب",
            date: "۱۸ بهمن",
            place: "حیاط جنوبی",
            result: "کلاس سوم الف",
          },
          {
            teams: "کلاس ششم الف  🆚  کلاس پنجم ب",
            date: "۱۸ بهمن",
            place: "حیاط جنوبی",
            result: "کلاس پنجم ب",
          },
            {
            teams: "کلاس ششم الف 🆚  کلاس ششم ب",
            date: "۱۸ بهمن",
            place: "حیاط جنوبی",
            result: "کلاس ششم ب",
          },
          {
            teams: "کلاس چهارم الف  🆚  کلاس سوم ب",
            date: "۱۹ بهمن",
            place: "حیاط جنوبی",
            result: "— در حال برگزاری —",
          },
          {
            teams: "کلاس پنجم الف  🆚  کلاس چهارم ب",
            date: "۱۹ بهمن",
            place: "حیاط جنوبی",
            result: "— در حال برگزاری —",
          },
        ].map((row, index) => (
          <tr key={index} style={{ animationDelay: `${index * 0.07}s` }}>
            <td>{row.teams}</td>
            <td>{row.date}</td>
            <td>{row.place}</td>
            <td>
              {row.result.includes("در حال")
                ? <span className="status-badge rope-pending">{row.result}</span>
                : <span className="status-badge rope-winner">{row.result}</span>}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</section>
{/* ========================== */}
{/* مرحله نهایی طناب‌کشی */}
{/* ========================== */}
<section className="sports-section">
  <h2 className="section-title section-title-rope-final">
    برنامه مرحله نهایی مسابقات طناب‌کشی
  </h2>

  <p className="section-caption">
    فینال با حضور مدیریت محترم مدرسه و معاونین برگزار خواهد شد.
  </p>

  <div className="semifinal-grid">
    <div className="semifinal-card semifinal-card-rope">
      <div className="semifinal-badge">فینال</div>

      <h3 className="semifinal-match">
        فینال مسابقات طناب‌کشی
      </h3>

      <div className="semifinal-info">
        <span>
          <i className="fa-regular fa-calendar-days" /> شنبه ۲۱ بهمن ۱۴۰۴
        </span>
        <span>
          <i className="fa-regular fa-clock" /> ساعت ۱۰:۰۰ صبح
        </span>
        <span>
          <i className="fa-solid fa-location-dot" /> حیاط جنوبی مدرسه
        </span>
      </div>
    </div>
  </div>
</section>
{/* ========================== */}
{/* توضیحات طناب‌کشی */}
{/* ========================== */}
<section className="sports-section notes-section">
  <h2 className="section-title section-title-rope-notes">
    توضیحات مسابقات طناب‌کشی
  </h2>

  <div className="notes-grid">

    <div className="note-card note-card-primary">
      <p>
        مسابقات به صورت بین‌کلاسی برگزار شده و در زمان زنگ‌های تفریح در حیاط مدرسه انجام می‌شود.
      </p>
    </div>

    <div className="note-card note-card-accent">
      <p>
        محل برگزاری تمام مسابقات: <strong>حیاط جنوبی مدرسه</strong>.
      </p>
    </div>

    <div className="note-card note-card-outline">
      <p>
        حداکثر تعداد بازیکنان تیم‌های کلاس پنجم و ششم <strong>۱۲ نفر</strong>  
        و در سایر پایه‌ها <strong>تا ۱۴ نفر</strong> می‌باشد.
      </p>
    </div>

  </div>
</section>

       
      </main>
    </div>
    <Footer />
    </div>
  );
}
