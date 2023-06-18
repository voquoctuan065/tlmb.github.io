import "./notify.css"

function Notify() {
    return (
        <div className="Notify-container">
            <div className="Notify-heading">
                <div className="Notify-heading-img"></div>
                <div className="Notify-heading-message">Đăng nhập để xem thông báo</div>
            </div>
            <div className="Notify-footing">
                <button tabindex="-1" className="Notify__login">Đăng nhập</button>
                <button tabindex="-1" className="Notify__regis">Đăng ký</button>
            </div>
        </div>
    );
}

export default Notify;
