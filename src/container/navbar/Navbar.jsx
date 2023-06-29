import React, { useContext } from 'react';
import Tippy from '@tippyjs/react/headless';

import './navbar.css';
import Notify from '~/component/Notify/Notify';
import Context from '~/store/Context';

const Navbar = () => {
    const { currentUser, logout, user, logoutGoogle } = useContext(Context);

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
                        interactive={true}
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

                    {/*  */}
                    {currentUser ? (
                        <Tippy
                            interactive={true}
                            placement="bottom-end"
                            render={(attrs) => (
                                <div className="user-box" tabIndex="-1" {...attrs}>
                                    <a className="navbar-account-drawer__button navbar-user-link" href="/user/account">
                                        <span>Tài khoản của tôi</span>
                                    </a>
                                    <a
                                        className="navbar-account-drawer__button navbar-user-link"
                                        href="/user/purchase/"
                                    >
                                        <span>Đơn Mua</span>
                                    </a>
                                    <button
                                        onClick={logout}
                                        className="navbar-account-drawer__button reset-button-style"
                                    >
                                        Đăng xuất
                                    </button>
                                </div>
                            )}
                        >
                            <div className="navbar__link--account__container">
                                <div className="navbar__username">{currentUser.username}</div>
                            </div>
                        </Tippy>
                    ) : user ? (
                        <Tippy
                            interactive={true}
                            placement="bottom-end"
                            render={(attrs) => (
                                <div className="user-box" tabIndex="-1" {...attrs}>
                                    <a className="navbar-account-drawer__button navbar-user-link" href="/user/account">
                                        <span>Tài khoản của tôi</span>
                                    </a>
                                    <a
                                        className="navbar-account-drawer__button navbar-user-link"
                                        href="/user/purchase/"
                                    >
                                        <span>Đơn Mua</span>
                                    </a>
                                    <button
                                        onClick={logoutGoogle}
                                        className="navbar-account-drawer__button reset-button-style"
                                    >
                                        Đăng xuất
                                    </button>
                                </div>
                            )}
                        >
                            <div className="navbar__link--account__container">
                                <div className="navbar__username">{user.displayName}</div>
                            </div>
                        </Tippy>
                    ) : (
                        <div className="Navbar__right-action">
                            <a href="/register" className="Navbar__right-regist">
                                Đăng ký
                            </a>
                            <a href="/login" className="Navbar__right-login">
                                Đăng nhập
                            </a>
                        </div>
                    )}
                    {/*  */}
                    {/*  */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
