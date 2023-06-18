import './widenav.css'

function WideNave() {
    return ( 
        <div className="wide-nav">
            <a className='mg-right' href="/">Trang chủ</a>
            <a className='mg-right' href="/">Giới thiệu</a>
            <div className='mg-right wide-nav-list'>
                <a href="/">Danh mục sản phẩm</a>
                <i className="fa-solid fa-angle-down"></i>
            </div>
            <a className='mg-right' href="/">Tin tức</a>
            <a className='mg-right' href="/">Tuyển dụng</a>
            <span className='hotline'>Hotline: <b>19001065</b></span>
        </div>
    );
}

export default WideNave;