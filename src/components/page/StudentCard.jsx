import React from "react";
import "../../style/StudentCard.css";
import logo1 from "../../style/photo22304757183.jpg";
import logo2 from "../../style/photo22304922864.jpg";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function StudentCard({
  name,
  fatherName,
  grade,
  major,
  continuousScore,
  finalScore,
  profileImg,
}) 
{
  // ---------------- PDF MAKER ----------------
  const downloadCardPdf = () => {
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4"
    });

    let y = 20;

    pdf.setFont("Helvetica", "bold");
    pdf.setFontSize(20);
    pdf.text("کارت دانش‌آموزی", 105, y, { align: "center" });
    y += 20;

    // عکس دانش‌آموز (BASE64)
    if (profileImg) {
      pdf.addImage(profileImg, "JPEG", 80, y, 50, 50);
      y += 60;
    }

    pdf.setFont("Helvetica", "normal");
    pdf.setFontSize(14);

    pdf.text(`نام: ${name || "—"}`, 20, y); y += 10;
    pdf.text(`نام پدر: ${fatherName || "—"}`, 20, y); y += 10;
    pdf.text(`پایه: ${grade || "—"}`, 20, y); y += 10;
    pdf.text(`رشته: ${major || "—"}`, 20, y); y += 10;
    pdf.text(`مستمر: ${continuousScore || "—"}`, 20, y); y += 10;
    pdf.text(`پایانی: ${finalScore || "—"}`, 20, y); y += 15;

    // لوگوها
    pdf.addImage(logo1, "JPEG", 20, y, 40, 30);
    pdf.addImage(logo2, "JPEG", 150, y, 40, 30);

    pdf.save("student-card.pdf");
  };


const downloadAsJPG = () => {
  const card = document.querySelector(".student-card");

  if (!card) return;

  html2canvas(card, {
    scale: 3,         // کیفیت بالا
    useCORS: true,    // برای لوگوهای import شده
    logging: false
  }).then(canvas => {
    const dataURL = canvas.toDataURL("image/jpeg", 0.95);

    const link = document.createElement("a");
    link.href = dataURL;
    link.download = "student-card.jpg";
    link.click();
  });
};

  // ---------------- UI ----------------
  return (
    <div className="student-card">

      <div className="student-card-header">
        <img
          src={profileImg || "/default-avatar.png"}
          alt="student"
          className="student-avatar"
        />
        <h3>{name || "نام دانش‌آموز"}</h3>
        <span className="card-subtitle">کارت دانش‌آموزی</span>
      </div>

      <div className="student-card-body">
        <p><strong>نام پدر:</strong> {fatherName || "—"}</p>
        <p><strong>پایه:</strong> {grade || "—"}</p>
        <p><strong>رشته:</strong> {major || "—"}</p>
        <p><strong>مستمر:</strong> {continuousScore || "—"}</p>
        <p><strong>پایانی:</strong> {finalScore || "—"}</p>
      </div>

      <div className="student-card-footer">
        <img src={logo1} alt="logo1" className="footer-logo" />
        <img src={logo2} alt="logo2" className="footer-logo" />
      </div>

<button onClick={downloadAsJPG} className="print-btn">
  دانلود کارت (JPG)
</button>

     

    </div>
  );
}

export default StudentCard;
