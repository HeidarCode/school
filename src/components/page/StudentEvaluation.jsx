import React , {useState,useEffect} from "react";
import "./../../style/StudentEvaluation.css";

const StudentEvaluation = () => {
  const [score, setScore] = useState("");
  const [score2, setScore2] = useState("");
  const [score3, setScore3] = useState("");
  const [score4, setScore4] = useState("");
  const [score5, setScore5] = useState("");
  const [score6, setScore6] = useState("");
  const [score7, setScore7] = useState("");
  const [score8, setScore8] = useState("");
  const [score9, setScore9] = useState("");
  const [scoreHarkat1, setScoreHarkat1] = useState("");
  const [scoreHarkat2, setScoreHarkat2] = useState("");
  const [scoreHarkat3, setScoreHarkat3] = useState("");
  const [scoreHarkat4, setScoreHarkat4] = useState("");
  const [scoreHarkat5, setScoreHarkat5] = useState("");
  const [scoreHarkat6, setScoreHarkat6] = useState("");
  const getFeedbackHarkat1 = () => generateFeedback(scoreHarkat1);
const getFeedbackHarkat2 = () => generateFeedback(scoreHarkat2);
const getFeedbackHarkat3 = () => generateFeedback(scoreHarkat3);
const getFeedbackHarkat4 = () => generateFeedback(scoreHarkat4);
const getFeedbackHarkat5 = () => generateFeedback(scoreHarkat5);
const getFeedbackHarkat6 = () => generateFeedback(scoreHarkat6);
const [student, setStudent] = useState(null);
useEffect(() => {
    const saved = localStorage.getItem("selectedStudent");
    if (saved) setStudent(JSON.parse(saved));
  }, []);

// تابع مشترک بازخورد
const generateFeedback = (score) => {
  if (!score && score !== 0) return { text: "", color: "" };
  const val = Number(score);
  if (val >= 18) return { text: "عالی 👏", color: "#00e676" };
  if (val >= 14) return { text: "خوب 😊", color: "#ffeb3b" };
  if (val >= 10) return { text: "نیاز به تلاش بیشتر 💪", color: "#ff9800" };
  return { text: "نیاز به تمرین مداوم 🏋️", color: "#f44336" };
};

  // منطق بازخورد بر اساس بازه نمره‌ای
  const getFeedback = () => {
    const val = parseInt(score);
    if (isNaN(val)) return "";
    if (val >= 0 && val <= 5)
      return {
        text:
          "به جای انکار شکست، آن را به عنوان بخشی از فرایند یادگیری بپذیرید. به جای سرزنش عوامل خارجی، به دنبال دلایل عینی و قابل اصلاح در عملکرد خود باشید. به جای دیدگاه همه یا هیچ، شکست را به عنوان یک فرصت برای رشد و بهبود تلقی کنید.",
        color: "#DB162F", // قرمز
      };
    if (val > 5 && val <= 10)
      return {
        text:
          "احساسات منفی را بپذیرید و به آنها اجازه دهید تا بیان شوند. به توانایی‌های خود ایمان داشته باشید و بر نقاط قوت خود تمرکز کنید. از دوستان، خانواده یا مربیان کمک بگیرید تا احساسات منفی خود را مدیریت کنید.",
        color: "#FF8C00", // نارنجی
      };
    if (val > 10 && val <= 15)
      return {
        text:
          "عملکرد خود را به دقت تحلیل کنید و اشتباهات خود را شناسایی کنید. اهداف واقع‌بینانه و قابل دستیابی برای بهبود عملکرد خود تعیین کنید. در صورت لزوم، استراتژی‌های تمرینی و مسابقه‌ای خود را تغییر دهید.",
        color: "#90C290", // سبز کم‌رنگ
      };
    if (val > 15 && val <= 20)
      return {
        text:
          "نگرش مثبت و امیدوارانه‌ای نسبت به آینده داشته باشید. از تجربیات سایر ورزشکاران که با شکست روبه‌رو شده‌اند، درس بگیرید. روال‌های روزانه‌ای را ایجاد کنید که به شما کمک کند تا با چالش‌ها بهتر کنار بیایید.",
        color: "#007E33", // سبز پررنگ
      };
    return "";
  };

  const feedback = getFeedback();

     const getFeedback2 = () => {
     const val = parseInt(score2);
     if (isNaN(val)) return "";
     if (val >= 0 && val <= 5)
       return {
         text: "شرکت در گفتگوها و بحث‌های گروهی در مورد اخلاق ورزشی و اهمیت رعایت آن و انتخاب ورزشکاران و مربیانی که به عنوان الگوهای اخلاقی شناخته می‌شوند و تلاش برای تقلید از رفتارهای آنها",
         color: "#DB162F",
       };
     if (val > 5 && val <= 10)
       return {
         text: "شناسایی شرایطی که باعث می‌شود به قوانین و مقررات بازی پایبند نباشید. تحلیل رفتارهای خود در حین مسابقه و شناسایی نقاط ضعف.",
         color: "#FF8C00",
       };
     if (val > 10 && val <= 15)
       return {
         text: "تمرین مداوم رفتارهای اخلاقی در همه جنبه‌های زندگی. توسعه حس مسئولیت‌پذیری نسبت به رفتارهای خود.",
         color: "#90C290",
       };
     if (val > 15 && val <= 20)
       return {
         text: "مشارکت در فعالیت‌های اجتماعی برای ترویج اهمیت اخلاق در ورزش. حمایت از سازمان‌هایی که برای ارتقای اخلاق در ورزش تلاش می‌کنند.",
         color: "#007E33",
       };
     return "";
   };

      const getFeedback3 = () => {
     const val = parseInt(score3);
     if (isNaN(val)) return "";
     if (val >= 0 && val <= 5)
       return {
         text: 'بازی جوانمردانه به ایجاد یک فضای سالم و رقابتی کمک می‌کند و به رشد شخصیتی شما نیز کمک می‌کند پس در ارتقا آن کوشا باش	',													
						 color: "#DB162F",								
														

       };
     if (val > 5 && val <= 10)
       return {
         text: "رفتارهای جوانمردانه را در دیگر دانش آموزان شناسایی کن و سعی کن در مورد آنها فکر کنی	",
         color: "#FF8C00",
       };
     if (val > 10 && val <= 15)
       return {
         text: 'از دوستان و ورزشکاران جوانمرد الگوبرداری کن و آنها را الگوی خود قرار بده.',
         color: "#90C290",
       };
     if (val > 15 && val <= 20)
       return {
         text: "به رفتار خود ادامه بده و سعی من همیشه با اخلاق و جوانمرد باشی	",
         color: "#007E33",
       };
     return "";
   };

 const getFeedback4 = () => {
     const val = parseInt(score4);
     if (isNaN(val)) return "";
     if (val >= 0 && val <= 5)
       return {
         text: ' گوش دادن به صحبت‌های دیگران بدون قطع کردن و بیان نظرات پس از اتمام صحبت‌ها	',													
						 color: "#DB162F",								
														

       };
     if (val > 5 && val <= 10)
       return {
         text: "توجه کنید که هر فرد در گروه نقشی دارد و باید به نقش دیگران احترام بگذارند	",
         color: "#FF8C00",
       };
     if (val > 10 && val <= 15)
       return {
         text: "پذیرفتن مسئولیت‌های خود در گروه و انجام به موقع وظایف	",
         color: "#90C290",
       };
     if (val > 15 && val <= 20)
       return {
         text: "انعطاف‌پذیری در مواجهه با تغییرات و چالش‌های گروهی",
         color: "#007E33",
       };
     return "";
   };

    const getFeedback5 = () => {
     const val = parseInt(score5);
     if (isNaN(val)) return "";
     if (val >= 0 && val <= 5)
       return {
         text: 'باید بیشتر تمرین و تلاش کنید و سعی کنید اشتباهات خود را اصلاح کنید از معلم و همکلاسی های خود کمک بگیرید',													
						 color: "#DB162F",								
														

       };
     if (val > 5 && val <= 10)
       return {
      text:" می توانید بهتر عمل کنید و به نتایج بهتری دست پیدا کنید با انگیزه به تلاش خود ادامه دهید شما بهترین هستید	",
         color: "#FF8C00",
       };
     if (val > 10 && val <= 15)
       return {
         text: "خیلی خوب بودید اما باید دقت خود را افزایش دهید و بیشتر تلاش کنید",
         color: "#90C290",
       };
     if (val > 15 && val <= 20)
       return {
         text: "خیلی خوب بودید به تلاش خود ادامه دهید",
         color: "#007E33",
       };
     return "";
   };

    const getFeedback10 = () => {
     const val = parseInt(score3);
     if (isNaN(val)) return "";
     if (val >= 0 && val <= 5)
       return {
         text:'',													
						 color: "#DB162F",								
														

       };
     if (val > 5 && val <= 10)
       return {
         text: "",
         color: "#FF8C00",
       };
     if (val > 10 && val <= 15)
       return {
         text:  '',
         color: "#90C290",
       };
     if (val > 15 && val <= 20)
       return {
         text: "",
         color: "#007E33",
       };
     return "";
   };//

   

    const getFeedback6 = () => {
     const val = parseInt(score6);
     if (isNaN(val)) return "";
     if (val >= 0 && val <= 5)
       return {
         text:'باید بیشتر تمرین و تلاش کنید و سعی کنید اشتباهات خود را اصلاح کنید از معلم و همکلاسی های خود کمک بگیرید',													
						 color: "#DB162F",								
														

       };
     if (val > 5 && val <= 10)
       return {
         text: " می توانید بهتر عمل کنید و به نتایج بهتری دست پیدا کنید با انگیزه به تلاش خود ادامه دهید شما بهترین هستید	",
         color: "#FF8C00",
       };
     if (val > 10 && val <= 15)
       return {
         text:  'خیلی خوب بودید به تلاش خود ادامه دهید ',
         color: "#90C290",
       };
     if (val > 15 && val <= 20)
       return {
         text: "خیلی خوب بودید به تلاش خود ادامه دهید ",
         color: "#007E33",
       };
     return "";
   };//

    const getFeedback7 = () => {
     const val = parseInt(score7);
     if (isNaN(val)) return "";
     if (val >= 0 && val <= 5)
       return {
             text:'باید بیشتر تمرین و تلاش کنید و سعی کنید اشتباهات خود را اصلاح کنید از معلم و همکلاسی های خود کمک بگیرید',													
						 color: "#DB162F",																					
						 color: "#DB162F",								
														

       };
     if (val > 5 && val <= 10)
       return {
        text: " می توانید بهتر عمل کنید و به نتایج بهتری دست پیدا کنید با انگیزه به تلاش خود ادامه دهید شما بهترین هستید	",
         color: "#FF8C00",
       };
     if (val > 10 && val <= 15)
       return {
         text:  'خیلی خوب بودید اما باید دقت خود را افزایش دهید و بیشتر تلاش کنید	',
         color: "#90C290",
       };
     if (val > 15 && val <= 20)
       return {
         text: "خیلی خوب بودید به تلاش خود ادامه دهید ",
         color: "#007E33",
       };
     return "";
   };//

 const getFeedback8 = () => {
     const val = parseInt(score8);
     if (isNaN(val)) return "";
     if (val >= 0 && val <= 5)
       return {
           text: 'باید بیشتر تمرین و تلاش کنید و سعی کنید اشتباهات خود را اصلاح کنید از معلم و همکلاسی های خود کمک بگیرید',																		
						 color: "#DB162F",								
														

       };
     if (val > 5 && val <= 10)
       return {
          text: " می توانید بهتر عمل کنید و به نتایج بهتری دست پیدا کنید با انگیزه به تلاش خود ادامه دهید شما بهترین هستید	",
         color: "#FF8C00",
       };
     if (val > 10 && val <= 15)
       return {
        text:  'خیلی خوب بودید اما باید دقت خود را افزایش دهید و بیشتر تلاش کنید	',
         color: "#90C290",
       };
     if (val > 15 && val <= 20)
       return {
             text: "خیلی خوب بودید به تلاش خود ادامه دهید ",
         color: "#007E33",
       };
     return "";
   };//
  const getFeedback9 = () => {
     const val = parseInt(score9);
     if (isNaN(val)) return "";
     if (val >= 0 && val <= 5)
       return {
             text: 'باید بیشتر تمرین و تلاش کنید و سعی کنید اشتباهات خود را اصلاح کنید از معلم و همکلاسی های خود کمک بگیرید',																				
						 color: "#DB162F",								
														

       };
     if (val > 5 && val <= 10)
       return {
        text: " می توانید بهتر عمل کنید و به نتایج بهتری دست پیدا کنید با انگیزه به تلاش خود ادامه دهید شما بهترین هستید	",
         color: "#FF8C00",
       };
     if (val > 10 && val <= 15)
       return {
          text:  'خیلی خوب بودید اما باید دقت خود را افزایش دهید و بیشتر تلاش کنید	',
         color: "#90C290",
       };
     if (val > 15 && val <= 20)
       return {
          text: "خیلی خوب بودید به تلاش خود ادامه دهید ",
         color: "#007E33",
       };
     return "";
   };//
  return (
     <div className="student-evaluation-page">
      {/* 🟢 بخش اطلاعات دانش‌آموز */}
      {student && (
        <div className="student-info-banner">
          <div className="student-info-content">
            <h3>ارزشیابی دانش‌آموز</h3>
            <div className="student-details-row">
              <p><strong>نام:</strong> {student.name}</p>
              <p><strong>نام خانوادگی:</strong> {student.lastName}</p>
              <p><strong>پایه:</strong> {student.grade}</p>
              <p><strong>درس:</strong> {student.subject}</p>
            </div>
          </div>
        </div>
      )}
    <section className="evaluation-section">
    <h3 className="evaluation-subtitle">
  ارزشیابی و آموزش مستمر در طول سال تحصیلی
</h3>

      <h2 className="section-title">مهارت‌های عاطفی و اجتماعی</h2>

      <table className="evaluation-table">
        <thead>
          <tr>
            <th>معیارها</th>
            <th>نمره از ۲۰</th>
            <th>بازخورد برای بهبود عملکرد در طول سال تحصیلی</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>پذیرش شکست</td>
            <td><input  type="number"
                min="0"
                max="20"
                placeholder="۰ تا ۲۰"
                value={score}
                onChange={(e) => setScore(e.target.value)}/></td>
             <td style={{ color: feedback.color }}>
              {feedback.text || ""}
            </td>
          </tr>

         <tr>
            <td>عدم انجام رفتارهای غیراخلاقی حین بازی
 و مسابقه</td>
           <td>
       <input
         type="number"
         min="0"
         max="20"
         placeholder="۰ تا ۲۰"
         value={score2}
         onChange={(e) => setScore2(e.target.value)}
       />
     </td>
     <td style={{ color: getFeedback2().color, fontSize: "0.8rem" }}>
       {getFeedback2().text || ""}
     </td>
   </tr>
        

          <tr>
            <td>بازی جوانمردانه</td>
            
          <td>
            <input  type="number"
                min="0"
                max="20"
                placeholder="۰ تا ۲۰"
                value={score3}
                onChange={(e) => setScore3(e.target.value)}/>
                </td>
            
              <td style={{ color: getFeedback3().color, fontSize: "0.8rem" }}>
       {getFeedback3().text || ""}
     </td>
          </tr>

          
          <tr>
            <td>همکاری و تعامل با دوستان در کار گروهی</td>
             <td>
            <input  type="number"
                min="0"
                max="20"
                placeholder="۰ تا ۲۰"
                value={score4}
                onChange={(e) => setScore4(e.target.value)}/>
                </td>
            
              <td style={{ color: getFeedback4().color, fontSize: "0.8rem" }}>
       {getFeedback4().text || ""}
     </td>
          </tr>
        </tbody>
 </table>
        <h2 className="section-title">بازی ها و سرگرمی ها </h2>

      <table className="evaluation-table">
        <thead>
          <tr>
            <th>معیارها</th>
            <th>نمره از ۲۰</th>
            <th>بازخورد برای بهبود عملکرد در طول سال تحصیلی</th>
          </tr>
        </thead>
   <tbody>
          <tr>
            <td>بازی داستان های دنباله دار
			
</td>

            <td><input  type="number"
                min="0"
                max="20"
                placeholder="۰ تا ۲۰"
                value={score5}
                onChange={(e) => setScore5(e.target.value)}/></td>
             <td style={{ color: getFeedback5().color }}>
              {getFeedback5().text || ""}
            </td>
          </tr>

   
        
        <tr>
            <td>بازی های بومی-محلی</td>
           <td>
       <input
         type="number"
         min="0"
         max="20"
         placeholder="۰ تا ۲۰"
         value={score6}
         onChange={(e) => setScore6(e.target.value)}
       />
     </td>
     <td style={{ color: getFeedback6().color, fontSize: "0.8rem" }}>
       {getFeedback6().text || ""}
     </td>
   </tr>
          <tr>
            <td>بازی سفر به مدرسه</td>
            
          <td>
            <input  type="number"
                min="0"
                max="20"
                placeholder="۰ تا ۲۰"
                value={score7}
                onChange={(e) => setScore7(e.target.value)}/>
                </td>
            
              <td style={{ color: getFeedback7().color, fontSize: "0.8rem" }}>
       {getFeedback7().text || ""}
     </td>
          </tr>

          
      
        </tbody>
        </table>

   <h2 className="section-title">آمادگی جسمانی و حرکات پایه	</h2>
     <table className="evaluation-table">
        <thead>
          <tr>
            <th>معیارها</th>
            <th>نمره از ۲۰</th>
            <th>بازخورد برای بهبود عملکرد در طول سال تحصیلی</th>
          </tr>
        </thead>
   <tbody>
          <tr>
            <td>مدارهای تناسب اندام سرگرم کننده	
			
</td>

            <td><input  type="number"
                min="0"
                max="20"
                placeholder="۰ تا ۲۰"
                value={score8}
                onChange={(e) => setScore8(e.target.value)}/></td>
             <td style={{ color: getFeedback8().color }}>
              {getFeedback8().text || ""}
            </td>
          </tr>

   
        
        <tr>
            <td>بازی لانه و خرگوش			
			
			
</td>
           <td>
       <input
         type="number"
         min="0"
         max="20"
         placeholder="۰ تا ۲۰"
         value={score9}
         onChange={(e) => setScore9(e.target.value)}
       />
     </td>
     <td style={{ color: getFeedback9().color, fontSize: "0.8rem" }}>
       {getFeedback9().text || ""}
     </td>
   </tr>
        
        </tbody>
        </table>
        
       <h2 className="section-title">مهارت های شناختی																				
</h2>
     <table className="evaluation-table">
        <thead>
          <tr>
            <th>معیارها</th>
            <th>نمره از ۲۰</th>
            <th>بازخورد برای بهبود عملکرد در طول سال تحصیلی</th>
          </tr>
        </thead>
   <tbody>
          <tr>
            <td>شرکت در کلاس انتخاب غذای سالم			
			
</td>

            <td><input  type="number"
                min="0"
                max="20"
                placeholder="۰ تا ۲۰"
                value={score8}
                onChange={(e) => setScore8(e.target.value)}/></td>
             <td style={{ color: getFeedback10().color }}>
              {getFeedback10().text || ""}
            </td>
          </tr>

   
        
        <tr>
            <td>شرکت در کلاس آموزش بهداشت شخصی			
			
			
</td>
           <td>
       <input
         type="number"
         min="0"
         max="20"
         placeholder="۰ تا ۲۰"
         value={score9}
         onChange={(e) => setScore9(e.target.value)}
       />
     </td>
     <td style={{ color: getFeedback10().color, fontSize: "0.8rem" }}>
       {getFeedback10().text || ""}
     </td>
   </tr>
        
         <tr>
            <td>شرکت در کلاس مهارت های مرتبط با زندگی سالم			
			
			
</td>
           <td>
       <input
         type="number"
         min="0"
         max="20"
         placeholder="۰ تا ۲۰"
         value={score9}
         onChange={(e) => setScore9(e.target.value)}
       />
     </td>
     <td style={{ color: getFeedback9().color, fontSize: "0.8rem" }}>
       {getFeedback9().text || ""}
     </td>
   </tr>
        </tbody>
        </table>
  
     
       <h2 className="section-title">مهارت های رشته های ورزشی																					
</h2>
     <table className="evaluation-table">
        <thead>
          <tr>
            <th>معیارها</th>
            <th>نمره از ۲۰</th>
            <th>بازخورد برای بهبود عملکرد در طول سال تحصیلی</th>
          </tr>
        </thead>
   <tbody>
          <tr>
            <td>	سکوی ماهیگیری دریاچه متیس
			
</td>

            <td><input  type="number"
                min="0"
                max="20"
                placeholder="۰ تا ۲۰"
                value={score8}
                onChange={(e) => setScore8(e.target.value)}/></td>
             <td style={{ color: getFeedback10().color }}>
              {getFeedback10().text || ""}
            </td>
          </tr>
</tbody>
</table>  

 <h2 className="section-title">رویدادها و مسابقات ورزشـــی																				
																			
</h2>
     <table className="evaluation-table">
        <thead>
          <tr>
            <th>معیارها</th>
            <th>نمره از ۲۰</th>
            <th>بازخورد برای بهبود عملکرد در طول سال تحصیلی</th>
          </tr>
        </thead>
   <tbody>
          <tr>
            <td>	مسابقات فوتبال المپیاد درون مدرسه ای			
			
</td>

            <td><input  type="number"
                min="0"
                max="20"
                placeholder="۰ تا ۲۰"
                value={score8}
                onChange={(e) => setScore8(e.target.value)}/></td>
             <td style={{ color: getFeedback10().color }}>
              {getFeedback10().text || ""}
            </td>
          </tr>
</tbody>
</table>  
 <h3 className="evaluation-subtitle">
 ارزشـیـابـــــی پـایـانــــی																				

</h3> 
 <h2 className="section-title">	آمادگی جسمانی																				
																				

																			
</h2>
  <table className="evaluation-table">
        <thead>
          <tr>
            <th>معیارها</th>
            <th>نمرات اصلی </th>
            <th>نمره از ۲۰</th>
            <th>بازخورد برای بهبود عملکرد در طول سال تحصیلی</th>
          </tr>
        </thead>
   <tbody>
    
          <tr>
            
            <td>استقامت و قدرت عضلانی(پلانگ با دست)
0 الی 200 ثانیه				
			
</td>
<td><input /></td>
            <td><input  type="number"
                min="0"
                max="20"
                placeholder="۰ تا ۲۰"
                value={score8}
                onChange={(e) => setScore8(e.target.value)}/></td>
             <td style={{ color: getFeedback10().color }}>
              {getFeedback10().text || ""}
            </td>

          </tr>
<tr>
 
     <td>	استقامت قلبی-تنفسی (پله)
20 الی 200 بار
			
</td>

 <td><input /></td>
  
            <td><input  type="number"
                min="0"
                max="20"
                placeholder="۰ تا ۲۰"
                value={score8}
                onChange={(e) => setScore8(e.target.value)}/></td>
             <td style={{ color: getFeedback10().color }}>
              {getFeedback10().text || ""}
            </td>
          </tr>

   <tr>
         <td>انعطاف پذیری(رساندن دست ها به پاها در وضعیت نشسته)
1 الی 4		
			
			
</td>
<td>
    <input />
  </td>

            <td><input  type="number"
                min="0"
                max="20"
                placeholder="۰ تا ۲۰"
                value={score8}
                onChange={(e) => setScore8(e.target.value)}/></td>
             <td style={{ color: getFeedback10().color }}>
              {getFeedback10().text || ""}
            </td>
          </tr>
<tr>
            <td>تعادل پویا(لی لی)
0 تا 5		
	
			
</td>
<td>
    <input />
  </td>

            <td><input  type="number"
                min="0"
                max="20"
                placeholder="۰ تا ۲۰"
                value={score8}
                onChange={(e) => setScore8(e.target.value)}/></td>
             <td style={{ color: getFeedback10().color }}>
              {getFeedback10().text || ""}
            </td>
          </tr>
<tr>
    <td>چابکی(4*9)
تا 30 ثانیه						
			
</td>

  <td>
    <input />
  </td>


            <td><input  type="number"
                min="0"
                max="20"
                placeholder="۰ تا ۲۰"
                value={score8}
                onChange={(e) => setScore8(e.target.value)}/></td>
             <td style={{ color: getFeedback10().color }}>
              {getFeedback10().text || ""}
            </td>
        </tr>
        </tbody>
        </table>
        {/* بخش حرکات پایه */}
        <h2 className="section-title">	حرکات پایه																			
																				

																			
</h2>
<section className="evaluation-section">
 

  {/* 🔷 حرکات انتقالی */}
  <h4 className="movement-subtitle">الف) حرکات انتقالی</h4>
  <table className="evaluation-table">
    <thead>
      <tr>
        <th>مهارت</th>
        <th>نمره از 20</th>
        <th>بازخورد های توصیفی</th>
      </tr>
    </thead>
    <tbody>
      {/* لی‌لی کردن */}
      <tr>
        <td>لی‌لی کردن</td>
        <td>
          <input
            type="number"
            min="0"
            max="20"
            placeholder="۰ تا ۲۰"
            value={scoreHarkat1}
            onChange={(e) => setScoreHarkat1(e.target.value)}
          />
        </td>
        <td style={{ color: getFeedbackHarkat1().color }}>
          {getFeedbackHarkat1().text}
        </td>
      </tr>

      {/* شناخت مفاهیم از طریق حرکت */}
      <tr>
        <td>شناخت مفاهیم از طریق حرکت</td>
        <td>
          <input
            type="number"
            min="0"
            max="20"
            placeholder="۰ تا ۲۰"
            value={scoreHarkat2}
            onChange={(e) => setScoreHarkat2(e.target.value)}
          />
        </td>
        <td style={{ color: getFeedbackHarkat2().color }}>
          {getFeedbackHarkat2().text}
        </td>
      </tr>
    </tbody>
  </table>

  {/* 🔷 حرکات کنترلی */}
  <h4 className="movement-subtitle">ب) حرکات کنترلی</h4>
  <table className="evaluation-table">
    <tbody>
      <tr>
        <td>مهارت در ضربه زدن با دست</td>
        <td>
          <input
            type="number"
            min="0"
            max="20"
            value={scoreHarkat3}
            onChange={(e) => setScoreHarkat3(e.target.value)}
          />
        </td>
        <td style={{ color: getFeedbackHarkat3().color }}>
          {getFeedbackHarkat3().text}
        </td>
      </tr>

      <tr>
        <td>مهارت در ضربه زدن با پا</td>
        <td>
          <input
            type="number"
            min="0"
            max="20"
            value={scoreHarkat4}
            onChange={(e) => setScoreHarkat4(e.target.value)}
          />
        </td>
        <td style={{ color: getFeedbackHarkat4().color }}>
          {getFeedbackHarkat4().text}
        </td>
      </tr>
    </tbody>
  </table>

  {/* 🔷 حرکات غیرانتقالی */}
  <h4 className="movement-subtitle">پ) حرکات غیرانتقالی</h4>
  <table className="evaluation-table">
    <tbody>
      <tr>
        <td>هل دادن</td>
        <td>
          <input
            type="number"
            min="0"
            max="20"
            value={scoreHarkat5}
            onChange={(e) => setScoreHarkat5(e.target.value)}
          />
        </td>
        <td style={{ color: getFeedbackHarkat5().color }}>
          {getFeedbackHarkat5().text}
        </td>
      </tr>

      <tr>
        <td>تاب خوردن</td>
        <td>
          <input
            type="number"
            min="0"
            max="20"
            value={scoreHarkat6}
            onChange={(e) => setScoreHarkat6(e.target.value)}
          />
        </td>
        <td style={{ color: getFeedbackHarkat6().color }}>
          {getFeedbackHarkat6().text}
        </td>
      </tr>
    </tbody>
  </table>
</section>

    </section> 
    </div>

    
  );
};

export default StudentEvaluation;
