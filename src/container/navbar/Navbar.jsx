import React from 'react';
import Tippy from '@tippyjs/react/headless';

import './navbar.css';
import Notify from '~/component/Notify/Notify';

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
                    <Tippy
                        interactive = {true}
                        placement="bottom-end"
                        render={(attrs) => (
                            <div className="Notify-box" tabIndex="-1" {...attrs}>
                                <Notify />
                            </div>
                        )}
                    >
                        <div className="Navbar__right-new">
                            <a href="/news">
                                <i className="fa-solid fa-bell"></i>
                                Thông báo
                            </a>
                        </div>
                    </Tippy>

                    <div className="Navbar__right-help">
                        <a href="/">
                            <i className="fa-solid fa-circle-question"></i>
                            Trợ giúp
                        </a>
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
