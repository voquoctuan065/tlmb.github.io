import React from 'react';
import './navbar.css';

const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="Navbar-wrapper Container-wrapper">
                <div className="Navbar__left">
                    <span>Chào mừng bạn đến với TLmobiles</span>
                    <span>Tương tác</span>
                    <div>
                        <a href="https://www.facebook.com/voquoctuan.065/">
                            <i className="fa-brands fa-facebook"></i>
                        </a>
                        <a href="https://www.instagram.com/voquoctuan.065/">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a href="https://www.tiktok.com/@quoctuan.vo">
                            <i className="fa-brands fa-tiktok"></i>
                        </a>
                    </div>
                </div>
                <div className="Navbar__right">
                    <div className="Navbar__right-new">
                        <i class="fa-solid fa-bell"></i>
                        <a href="/news">Thông báo</a>
                    </div>

                    <div className="Navbar__right-help">
                        <i class="fa-solid fa-circle-question"></i>
                        <a href="/">Trợ giúp</a>
                    </div>
                    <div className="Navbar__right-action">
                        <a href="/register" className="Navbar__right-regist">
                            Đăng ký
                        </a>
                        <a href="/login" className="Navbar__right-login">
                            Đăng nhập
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
