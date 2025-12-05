import React from "react";
import "../../style/Footer.css";
import photoMap from  "../../style/image/qaemshahr-loc.jpg"

export default function Footer() {
  return (
    <footer className="z-footer">
      
      <div className="footer-grid">
        
        {/* موقعیت مکانی */}
       <div className="footer-location">
  <a 
    href="https://maps.app.goo.gl/uC6UVjF2iZDjgNuL9"
    target="_blank"
    className="location-link"
  >
    <img 
      src={photoMap}
      alt="Qaemshahr Location" 
      className="location-map-img"
    />

    <div className="location-text">
      <h4>قائم‌شهر، مازندران</h4>
      <p>مشاهده در نقشه</p>
    </div>
  </a>
</div>


        {/* ساعات کاری */}
        <div className="footer-box">
          <h3 className="footer-title">ساعات کاری</h3>

          <p className="footer-text">شنبه تا چهارشنبه: 7:30 الی 14:00</p>
          <p className="footer-text">پنج‌شنبه: 7:30 الی 12:00</p>
          <p className="footer-text">جمعه: تعطیل</p>
              <h3 className="footer-socialText">شبکه های اجتماعی </h3>
          <div className="footer-social">
          
            <a href="#"><i className="fab fa-whatsapp"></i></a>
            <a href="#"><i className="fab fa-telegram"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>

        {/* اطلاعات تماس */}
        <div className="footer-box">
          <h3 className="footer-title">اطلاعات تماس</h3>

          <p className="footer-text">📞 ۰۲۴-۳۳۴۴۵۶۷۸</p>
          <p className="footer-text">📱 09123334455</p>
          <p className="footer-text">📧 zanjani-school@gmail.com</p>

          <h4 className="footer-subtitle">خبرنامه</h4>
          <div className="newsletter">
            <input type="email" placeholder="ایمیل خود را وارد کنید" />
            <button>
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>

      </div>

      <div className="footer-copy">
        تمامی حقوق این وب‌سایت متعلق به مدرسه زنده‌یاد زنجانی می‌باشد © 1404
      </div>
    </footer>
  );
}
