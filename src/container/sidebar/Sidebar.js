import 'bootstrap/dist/css/bootstrap.min.css';

import './sidebar.css';

function Sidebar() {
    return (
        <nav className="col-3 sidebar">
            <div className="sidebar-bg">
                <div className="sidebar-bg-title">
                    <h3>DANH MỤC SẢN PHẨM</h3>
                </div>
                <div className="menu-list">
                    <ul>
                        <li className="border-dashed">
                            <i className="fa-solid fa-mobile"></i>
                            <a href="/Mobile">Điện thoại</a>
                        </li>
                        <li className="border-dashed">
                            <i className="fa-solid fa-tablet"></i>
                            <a href="/tablet">Máy tính bảng</a>
                        </li>
                        <li className="border-dashed">
                            <i className="fa-solid fa-headphones"></i>
                            <a href="/accessory">Phụ kiện</a>
                        </li>
                        <li>
                            <i className="fa-solid fa-phone"></i>
                            <a href="/oldmobile">Máy cũ</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="sidebar-bg">
                <div className="sidebar-bg-title">
                    <h3>GIÁ</h3>
                </div>
                <div className="menu-list">
                    <ul>
                        <li>
                            <a href="/">Giá từ thấp đến cao</a>
                        </li>
                        <li>
                            <a href="/">Giá từ cao đến thấp</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="sidebar-bg">
                <div className="sidebar-bg-title">
                    <h3>NHÀ CUNG CẤP</h3>
                </div>
                <div className="menu-list">
                    <ul>
                        <li>
                            <a href="/">Apple</a>
                        </li>
                        <li>
                            <a href="/">Samsung</a>
                        </li>
                        <li>
                            <a href="/">Nokia</a>
                        </li>
                        <li>
                            <a href="/">Lenovo</a>
                        </li>
                        <li>
                            <a href="/">HTC</a>
                        </li>
                        <li>
                            <a href="/">Oppo</a>
                        </li>
                        <li>
                            <a href="/">Sony</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Sidebar;
