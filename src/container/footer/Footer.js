import './footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="footer__start">
                <div className="about__us">
                    <h5 className="footer__start--title">VỀ CHÚNG TÔI</h5>
                    <ul className="footer__start-content">
                        <li className="footer__start-content-item">
                            <a href="/" className="footer__content-item-link">
                                Điều khoản sử dụng
                            </a>
                        </li>
                        <li className="footer__start-content-item">
                            <a href="/" className="footer__content-item-link">
                                Chính sách bảo mật
                            </a>
                        </li>
                        <li className="footer__start-content-item">
                            <a href="/" className="footer__content-item-link">
                                Chính sách mua hàng
                            </a>
                        </li>
                        <li className="footer__start-content-item">
                            <a href="/" className="footer__content-item-link">
                                Chính sách bảo hành
                            </a>
                        </li>
                        <li className="footer__start-content-item">
                            <a href="/" className="footer__content-item-link">
                                Chính sách đổi trả
                            </a>
                        </li>
                        <li className="footer__start-content-item">
                            <a href="/" className="footer__content-item-link">
                                Flash Sales
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="cskh">
                    <h5 className="footer__start--title">CHĂM SÓC KHÁCH HÀNG</h5>
                    <ul className="footer__start-content">
                        <li className="footer__start-content-item">
                            <a href="/" className="footer__content-item-link">
                                Trung tâm trợ giúp & chăm sóc khách hàng
                            </a>
                        </li>
                        <li className="footer__start-content-item">
                            <a href="/" className="footer__content-item-link">
                                Hướng dẫn mua hàng
                            </a>
                        </li>
                        <li className="footer__start-content-item">
                            <a href="/" className="footer__content-item-link">
                                Trả hàng & hoàn tiền
                            </a>
                        </li>
                        <li className="footer__start-content-item">
                            <a href="/" className="footer__content-item-link">
                                Thanh toán
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="followUs">
                    <h5 className="footer__start--title">THEO DÕI CHÚNG TÔI TRÊN</h5>
                    <ul className="footer__start-content">
                        <li className="footer__start-content-item">
                            <i className="fa-brands fa-facebook footer__content-item-icon"></i>
                            <a href=" https://www.facebook.com/voquoctuan.065/ " className="footer__content-item-link">
                                facebook
                            </a>
                        </li>
                        <li className="footer__start-content-item">
                            <i className="fa-brands fa-instagram footer__content-item-icon"></i>
                            <a href="https://www.instagram.com/voquoctuan.065/" className="footer__content-item-link">
                                instagram
                            </a>
                        </li>
                        <li className="footer__start-content-item">
                            <i className="fa-brands fa-tiktok footer__content-item-icon"></i>
                            <a href="https://www.tiktok.com/@quoctuan.vo" className="footer__content-item-link">
                                tiktok
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="regis__notifications">
                    <h5 className="footer__start--title">ĐĂNG KÝ NHẬN THÔNG BÁO SẢN PHẨM MỚI</h5>
                    <input
                        type="email"
                        defaultValue=""
                        placeholder="Nhập email của bạn"
                        className="footer__start-contact"
                    />
                    <button className="btn">Gửi đi</button>
                </div>
            </div>
            <div className="footer__end">
                <p className="footer__end-content">
                    Địa chỉ: số nhà 53, ngõ 8, kiệt 8, Hồ Đắc Di, Phường An Cựu, Thành phố Huế, Tỉnh Thừa Thiên - Huế.
                    Tổng đài hỗ trợ: 19001065 - Email: cskhtuanlong@gmail.com
                </p>
                <p className="footer__end-content">
                    Chịu Trách Nhiệm Quản Lý nội dung: Võ Quốc Tuấn - Điện thoại liên hệ: 0367268440
                </p>
                <p className="footer__end-content">©2023 - Bản quyền thuộc về TuanLong Mobiles</p>
            </div>
        </div>
    );
}

export default Footer;
