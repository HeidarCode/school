import React, { useState, useEffect } from 'react';
import { FiHome } from 'react-icons/fi';
import { HiOutlineIdentification } from 'react-icons/hi';
import { BiLogIn } from 'react-icons/bi';
import { useNavigate, useLocation } from 'react-router-dom';
import "../../style/Header.css";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // بستن منو هنگام تغییر مسیر
  useEffect(() => setOpen(false), [location.pathname]);

  const go = (path) => navigate(path);

  return (
    <header className={`header-glass ${scrolled ? 'scrolled' : ''}`} dir="rtl">
      <div className="header-inner">
        {/* لوگو و نام مدرسه */}
        <div className="brand" onClick={() => go('/home')}>
          <div className="brand-logo">Z</div>
          <div className="brand-text">
            <span className="brand-name">مدرسه زنده یاد زنجانی</span>
            <small className="brand-sub">Zanjani School</small>
          </div>
        </div>

        {/* منوی اصلی */}
        <nav className={`nav-links ${open ? 'open' : ''}`}>
          <button
            className={`nav-item ${location.pathname === '/home' ? 'active' : ''}`}
            onClick={() => go('/home')}
          >
            <FiHome />
            <span>صفحه اصلی</span>
          </button>

          <button
            className={`nav-item ${location.pathname === '/student-dashboard' ? 'active' : ''}`}
            onClick={() => go('/student-dashboard')}
          >
            <HiOutlineIdentification />
            <span>کارت دانش‌آموزی</span>
          </button>

          <button
            className={`nav-item main ${location.pathname === '/' ? 'active' : ''}`}
            onClick={() => go('/')}
          >
            <BiLogIn />
            <span>ورود / ثبت‌نام</span>
          </button>
        </nav>

        {/* دکمه منوی موبایل */}
        <div
          className={`menu-toggle ${open ? 'open' : ''}`}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </div>
      </div>
    </header>
  );
}
