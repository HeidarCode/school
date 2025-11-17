import React, { useState } from "react";
import "./../../style/StudentHealthInfo.css";

const StudentHealthInfo = () => {
  const [formData, setFormData] = useState({
    height: "",
    weight: "",
    bmi: "",
    dentalStatus: "",
    gumInflamed: "",
    skinHairIssues: "",
    specialNeeds: "",
    visionRight: "",
    visionLeft: "",
    walkingStatus: "",
    immunization: "",
    specialCareNeeded: "",
    colorVision: "",
    visionResult: "",
    handMovement: "",
    spine: "",
    careNeeded: "",
    hearingRight: "",
    hearingLeft: "",
    speechTest: "",
    sportExemption: "",
    specialistReferral: "",
    healthForm: null,
    vaccineForm: null,
  });

  // محاسبه BMI (قد به متر)
  const calculateBMI = () => {
    const { height, weight } = formData;
    if (height && weight) {
      const bmi = (weight / (height / 100) ** 2).toFixed(1);
      setFormData({ ...formData, bmi });
    }
  };

  return (
    <div className="health-info-page">
      <h2 className="health-title">🩺 اطلاعات تکمیلی سلامت دانش‌آموز</h2>

      <div className="health-form">
        <label>قد (سانتی‌متر)</label>
        <input
          type="number"
          value={formData.height}
          onChange={(e) =>
            setFormData({ ...formData, height: e.target.value })
          }
          onBlur={calculateBMI}
        />

        <label>وزن (کیلوگرم)</label>
        <input
          type="number"
          value={formData.weight}
          onChange={(e) =>
            setFormData({ ...formData, weight: e.target.value })
          }
          onBlur={calculateBMI}
        />

        <label>BMI (شاخص توده بدنی)</label>
        <input type="text" value={formData.bmi} readOnly />

        <label>وضعیت دندان</label>
        <input
          type="text"
          placeholder="مثلاً: سالم / پوسیدگی دارد"
          value={formData.dentalStatus}
          onChange={(e) =>
            setFormData({ ...formData, dentalStatus: e.target.value })
          }
        />

        <label>لثه ملتهب</label>
        <input
          type="text"
          value={formData.gumInflamed}
          onChange={(e) =>
            setFormData({ ...formData, gumInflamed: e.target.value })
          }
        />

        <label>اختلال پوست و مو</label>
        <input
          type="text"
          value={formData.skinHairIssues}
          onChange={(e) =>
            setFormData({ ...formData, skinHairIssues: e.target.value })
          }
        />

        <label>بیماری‌ها یا نیازهای ویژه</label>
        <input
          type="text"
          value={formData.specialNeeds}
          onChange={(e) =>
            setFormData({ ...formData, specialNeeds: e.target.value })
          }
        />

        <label>سنجش بینایی چشم راست</label>
        <input
          type="text"
          value={formData.visionRight}
          onChange={(e) =>
            setFormData({ ...formData, visionRight: e.target.value })
          }
        />

        <label>سنجش بینایی چشم چپ</label>
        <input
          type="text"
          value={formData.visionLeft}
          onChange={(e) =>
            setFormData({ ...formData, visionLeft: e.target.value })
          }
        />

        <label>وضعیت راه رفتن</label>
        <input
          type="text"
          value={formData.walkingStatus}
          onChange={(e) =>
            setFormData({ ...formData, walkingStatus: e.target.value })
          }
        />

        <label>وضعیت ایمن‌سازی (واکسیناسیون)</label>
        <input
          type="text"
          value={formData.immunization}
          onChange={(e) =>
            setFormData({ ...formData, immunization: e.target.value })
          }
        />

        <label>نیاز به مراقبت‌های ویژه</label>
        <input
          type="text"
          value={formData.specialCareNeeded}
          onChange={(e) =>
            setFormData({ ...formData, specialCareNeeded: e.target.value })
          }
        />

        <label>نتیجه دید رنگ</label>
        <input
          type="text"
          value={formData.colorVision}
          onChange={(e) =>
            setFormData({ ...formData, colorVision: e.target.value })
          }
        />

        <label>نتیجه سنجش بینایی</label>
        <input
          type="text"
          value={formData.visionResult}
          onChange={(e) =>
            setFormData({ ...formData, visionResult: e.target.value })
          }
        />

        <label>اختلال حرکتی دست</label>
        <input
          type="text"
          value={formData.handMovement}
          onChange={(e) =>
            setFormData({ ...formData, handMovement: e.target.value })
          }
        />

        <label>وضعیت ستون فقرات</label>
        <input
          type="text"
          value={formData.spine}
          onChange={(e) =>
            setFormData({ ...formData, spine: e.target.value })
          }
        />

        <label>مراقبت مورد نیاز</label>
        <input
          type="text"
          value={formData.careNeeded}
          onChange={(e) =>
            setFormData({ ...formData, careNeeded: e.target.value })
          }
        />

        <label>سنجش گوش راست</label>
        <input
          type="text"
          value={formData.hearingRight}
          onChange={(e) =>
            setFormData({ ...formData, hearingRight: e.target.value })
          }
        />

        <label>سنجش گوش چپ</label>
        <input
          type="text"
          value={formData.hearingLeft}
          onChange={(e) =>
            setFormData({ ...formData, hearingLeft: e.target.value })
          }
        />

        <label>نتیجه تست گفتار</label>
        <input
          type="text"
          value={formData.speechTest}
          onChange={(e) =>
            setFormData({ ...formData, speechTest: e.target.value })
          }
        />

        <label>معافیت‌های ورزشی</label>
        <input
          type="text"
          value={formData.sportExemption}
          onChange={(e) =>
            setFormData({ ...formData, sportExemption: e.target.value })
          }
        />

        <label>نیاز به ارجاع تخصصی</label>
        <input
          type="text"
          value={formData.specialistReferral}
          onChange={(e) =>
            setFormData({ ...formData, specialistReferral: e.target.value })
          }
        />

        {/* 📎 بارگذاری فایل‌ها */}
        <label>فرم مراقبت دوره‌ای سلامت خود را بارگذاری کنید:</label>
        <input
          type="file"
          accept="image/*,.pdf"
          onChange={(e) =>
            setFormData({ ...formData, healthForm: e.target.files[0] })
          }
        />

        <label>فرم واکسیناسیون خود را بارگذاری فرمایید:</label>
        <input
          type="file"
          accept="image/*,.pdf"
          onChange={(e) =>
            setFormData({ ...formData, vaccineForm: e.target.files[0] })
          }
        />

        <button className="submit-btn">ذخیره اطلاعات</button>
      </div>
    </div>
  );
};

export default StudentHealthInfo;
