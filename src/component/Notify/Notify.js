import { useContext } from 'react';
import './notify.css';
import Context from '~/store/Context';

const NotifyList = [
    {
        url: 'https://down-vn.img.susercontent.com/file/sg-11134004-7qvdw-licmfvd3e7ara3_tn',
        title: '9H HỐT MÃ 600.000Đ SĂN DEAL 25.6',
        message:
            ' 🌟 Gian hàng độc quyền sale lương về 💍 Vòng tay HUAWEI 1TR090 &gt;&gt; 990.000Đ 🍳 Nồi chiên không dầu GAABOR 1TR &gt;&gt; 599.000Đ 👔 Áo blazer tay ngắn 290.000Đ &gt;&gt; 180.000Đ',
    },
    {
        url: 'https://down-vn.img.susercontent.com/file/sg-11134004-7qvfr-licu2iqyhc3z46_tn',
        title: '25.6 MUA GÌ CÓ MÃ 80.000Đ',
        message: '🌐 Hàng điện tử, đời sống, quốc tế 💸 Mã có trong ví, không dùng là phí',
    },
    {
        url: 'https://down-vn.img.susercontent.com/file/sg-11134004-7qve4-lictyv3l20sv19_tn',
        title: 'LƯU LỊCH SĂN SALE 25.6 NGAY TẠI ĐÂY',
        message:
            '⏰ 0H - 9H: Mã hot đến 100.000Đ ⏰ 9H - 12H: Deal độc quyền 50% ⏰ 12H - 15H: Voucher Xtra đến 200.000Đ ⏰ 15H - 18H: Sale 50% shop xu hướng ⏰ 18H - 21H: Mua gì cũng Freeship',
    },
];
function Notify() {
    const { currentUser, user } = useContext(Context);

    return (
        <div>
            {currentUser || user ? (
                <div className="Notify-container">
                    <div className="notify-title">Thông báo mới nhận</div>
                    {NotifyList.map((currentValue, index) => (
                        <div className="notify-content" key={index}>
                            <div className="notify-content-heading">
                                <div className="notify-content-heading__img">
                                    <div
                                        className="notify_img"
                                        style={{
                                            backgroundImage: `url(${currentValue.url})`,
                                        }}
                                    ></div>
                                </div>
                            </div>
                            <div className="notify-content-body">
                                <div className="notify-content-body__title">{currentValue.title}</div>
                                <div className="notify-content-body__message">{currentValue.message}</div>
                            </div>
                        </div>
                    ))}
                    <a className="notify-all" href="/user/notifications/order">
                        <span>Xem tất cả</span>
                    </a>
                </div>
            ) : (
                <div className="Notify-container">
                    <div className="Notify-heading">
                        <div className="Notify-heading-img"></div>
                        <div className="Notify-heading-message">Đăng nhập để xem thông báo</div>
                    </div>
                    <div className="Notify-footing">
                        <button tabIndex="-1" className="Notify__login">
                            <a href="/login">Đăng nhập</a>
                        </button>
                        <button tabIndex="-1" className="Notify__regis">
                            <a href="/register">Đăng ký</a>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Notify;
