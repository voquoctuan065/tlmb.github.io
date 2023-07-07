import 'bootstrap/dist/css/bootstrap.min.css';

import './sidebar.css';

function Sidebar() {
    return (
        <nav className="col-3 sidebar">
            <div className="sidebar-bg">
                <div className="sidebar-bg-title">
                    <i className="fa-solid fa-bars"></i>
                    <h3>DANH MỤC SẢN PHẨM</h3>
                </div>
                <div className="menu-list">
                    <ul className="navigation">
                        <li className="menu-item list-group-item">
                            <i className="fa-solid fa-mobile"></i>
                            <a href="/mobile">Điện thoại</a>
                        </li>
                        <li className="menu-item list-group-item">
                            <i className="fa-solid fa-tablet"></i>
                            <a href="/tablet">Máy tính bảng</a>
                        </li>
                        <li className="menu-item list-group-item">
                            <i className="fa-solid fa-headphones"></i>
                            <a href="/headphone">Tai nghe</a>
                        </li>
                        <li className="menu-item list-group-item">
                            <i className="fa-solid fa-bolt"></i>
                            <a href="/backupcharger">sạc dự phòng</a>
                        </li>
                        <li className="menu-item list-group-item">
                            <i className="fa-sharp fa-solid fa-charging-station"></i>
                            <a href="/charger">Củ sạc</a>
                        </li>
                        <li className="menu-item list-group-item">
                            <i className="fa-solid fa-code-compare"></i>
                            <a href="/chargingcord">Cáp sạc</a>
                        </li>
                        <li className="menu-item list-group-item">
                            <i className="fa-solid fa-microscope"></i>
                            <a href="/accessory">Phụ kiện</a>
                        </li>
                        <li className="menu-item list-group-item borderBottomNone ">
                            <i className="fa-sharp fa-solid fa-mobile"></i>
                            <a href="/oldmobile">Máy cũ</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Sidebar;
