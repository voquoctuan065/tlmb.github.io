import 'bootstrap/dist/css/bootstrap.min.css';

import { Sidebar } from '~/container';
import './content.css';

function Content() {
    return (
        <div className="container content-container">
            <div className="grid wide">
                <div className="row sm-gutter product-content">
                    <Sidebar />

                    <div className="col-9">
                        <div className="home-filter  hide-on-mobile-tablet">
                            <span className="home-filter__label">Sắp xếp theo</span>
                            <button className="home-filter__btn btn">Phổ biến</button>
                            <button className="home-filter__btn btn btn--primary">Mới nhất</button>
                            <button className="home-filter__btn  btn">Bán chạy</button>

                            <div className="select-input">
                                <span className="select-input__lable">Giá</span>
                                <i className="select-input__icon fas fa-angle-down"></i>
                                {/* <ul className="select-input__list">
                                    <li className="select-input__item">
                                        <button className="select-input__link">Giá: Thấp đến cao</button>
                                    </li>
                                    <li className="select-input__item">
                                        <button className="select-input__link">Giá: Cao đến thấp</button>
                                    </li>
                                </ul> */}
                            </div>

                            <div className="home-filter__page">
                                <span className="home-filter__page-num">
                                    <span className="home-filter__page-current">1</span>/14
                                </span>
                                <div className="home-filter__page-control">
                                    <button href="" className="home-filter__page-btn home-filter__page-btn--disable">
                                        <i className="home-filter__page-icon fas fa-angle-left"></i>
                                    </button>
                                    <button href="" className="home-filter__page-btn">
                                        <i className="home-filter__page-icon fas fa-angle-right"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Product item 1--> */}
                        <div className="home-product">
                            <div className="row">
                                <div className="col-3">
                                    <div className="home-product-item">
                                        <a href="/">
                                            <div
                                                className="home-product-item__img"
                                                style={{
                                                    backgroundImage:
                                                        'url(' +
                                                        'https://cf.shopee.vn/file/0a82d7cc998f02e028d985e57f277640_tn' +
                                                        ')',
                                                }}
                                            ></div>
                                            <h4 className="home-product-item__name">
                                                Switch Gateron Milky (KS3X1) - Milky Yellow và Milky Black - Gateron
                                                KS3X1 - Switch dùng cho bàn phím cơ
                                            </h4>
                                        </a>
                                        <div className="home-product-item__price">
                                            <span className="home-product-item__price-old">1.200.000đ</span>
                                            <span className="home-product-item__price-current">999.000đ</span>
                                        </div>
                                        <div className="home-product-item__favourite">
                                            <i className="fas fa-check"></i>
                                            <span>Yêu thích</span>
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <span className="home-product-item__sale-of-lable">GIẢM</span>
                                            <span className="home-product-item__sale-of-percent">43%</span>
                                        </div>

                                        <div className="wrap-add-cart d-md-flex">
                                            <div className="quantity">
                                                <button className="btn-minusProduct">
                                                    <i className="fa fa-minus" aria-hidden="true"></i>
                                                </button>
                                                <input
                                                    className="quantityProduct"
                                                    defaultValue="1"
                                                    type="number"
                                                    min="1"
                                                    data-id="37741045"
                                                    max="100"
                                                    disabled=""
                                                />
                                                <button className="btn-plusProduct">
                                                    <i className="fa fa-plus" aria-hidden="true"></i>
                                                </button>
                                            </div>
                                            <button className="btn-buyNow ">
                                                <i className="fa fa-cart-plus" aria-hidden="true"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Product item 2 --> */}
                                <div className="col-3">
                                    <div className="home-product-item">
                                        <a href="/">
                                            <div
                                                className="home-product-item__img"
                                                style={{
                                                    backgroundImage:
                                                        'url(' +
                                                        'https://cf.shopee.vn/file/0a82d7cc998f02e028d985e57f277640_tn' +
                                                        ')',
                                                }}
                                            ></div>
                                            <h4 className="home-product-item__name">
                                                Tấm lót chuột chất liệu da PU chống nước chất lượng cao cho máy tính
                                                A027
                                            </h4>
                                        </a>
                                        <div className="home-product-item__price">
                                            <span className="home-product-item__price-old">2.230.992đ</span>
                                            <span className="home-product-item__price-current">1.150.000đ</span>
                                        </div>
                                        <div className="home-product-item__favourite">
                                            <i className="fas fa-check"></i>
                                            <span>Yêu thích</span>
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <span className="home-product-item__sale-of-lable">GIẢM</span>
                                            <span className="home-product-item__sale-of-percent">38%</span>
                                        </div>

                                        <div className="wrap-add-cart d-md-flex">
                                            <div className="quantity">
                                                <button className="btn-minusProduct">
                                                    <i className="fa fa-minus" aria-hidden="true"></i>
                                                </button>
                                                <input
                                                    className="quantityProduct"
                                                    defaultValue="1"
                                                    type="number"
                                                    min="1"
                                                    data-id="37741045"
                                                    max="100"
                                                    disabled=""
                                                />
                                                <button className="btn-plusProduct">
                                                    <i className="fa fa-plus" aria-hidden="true"></i>
                                                </button>
                                            </div>
                                            <button className="btn-buyNow ">
                                                <i className="fa fa-cart-plus" aria-hidden="true"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Product item 3 --> */}
                                <div className="col-3">
                                    <div className="home-product-item">
                                        <div
                                            className="home-product-item__img"
                                            style={{
                                                backgroundImage:
                                                    'url(' +
                                                    'https://cf.shopee.vn/file/0a82d7cc998f02e028d985e57f277640_tn' +
                                                    ')',
                                            }}
                                        ></div>
                                        <h4 className="home-product-item__name">
                                            Bếp nướng dã ngoại ngoài trời, bếp nướng sân vườn,bếp nướng BBQ 3 chân, bếp
                                            nướng BBQ 3 chân Lanmand
                                        </h4>
                                        <div className="home-product-item__price">
                                            <span className="home-product-item__price-old">1.580.000đ</span>
                                            <span className="home-product-item__price-current">1.343.000đ</span>
                                        </div>

                                        <div className="home-product-item__favourite">
                                            <i className="fas fa-check"></i>
                                            <span>Yêu thích</span>
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <span className="home-product-item__sale-of-lable">GIẢM</span>
                                            <span className="home-product-item__sale-of-percent">15%</span>
                                        </div>

                                        <div className="wrap-add-cart d-md-flex">
                                            <div className="quantity">
                                                <button className="btn-minusProduct">
                                                    <i className="fa fa-minus" aria-hidden="true"></i>
                                                </button>
                                                <input
                                                    className="quantityProduct"
                                                    defaultValue="1"
                                                    type="number"
                                                    min="1"
                                                    data-id="37741045"
                                                    max="100"
                                                    disabled=""
                                                />
                                                <button className="btn-plusProduct">
                                                    <i className="fa fa-plus" aria-hidden="true"></i>
                                                </button>
                                            </div>
                                            <button className="btn-buyNow ">
                                                <i className="fa fa-cart-plus" aria-hidden="true"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Product item 4 --> */}
                                <div className="col-3">
                                    <div className="home-product-item">
                                        <a href="/">
                                            <div
                                                className="home-product-item__img"
                                                style={{
                                                    backgroundImage:
                                                        'url(' +
                                                        'https://cf.shopee.vn/file/0a82d7cc998f02e028d985e57f277640_tn' +
                                                        ')',
                                                }}
                                            ></div>
                                            <h4 className="home-product-item__name">
                                                Dây chuyền Mặt Hình Bướm Đính Đá Thời Trang Độc Đáo
                                            </h4>
                                        </a>
                                        <div className="home-product-item__price">
                                            <span className="home-product-item__price-old">2.320.000đ</span>
                                            <span className="home-product-item__price-current">1.912.000đ</span>
                                        </div>

                                        <div className="home-product-item__favourite">
                                            <i className="fas fa-check"></i>
                                            <span>Yêu thích</span>
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <span className="home-product-item__sale-of-lable">GIẢM</span>
                                            <span className="home-product-item__sale-of-percent">40%</span>
                                        </div>
                                        <div className="wrap-add-cart d-md-flex">
                                            <div className="quantity">
                                                <button className="btn-minusProduct">
                                                    <i className="fa fa-minus" aria-hidden="true"></i>
                                                </button>
                                                <input
                                                    className="quantityProduct"
                                                    defaultValue="1"
                                                    type="number"
                                                    min="1"
                                                    data-id="37741045"
                                                    max="100"
                                                    disabled=""
                                                />
                                                <button className="btn-plusProduct">
                                                    <i className="fa fa-plus" aria-hidden="true"></i>
                                                </button>
                                            </div>
                                            <button className="btn-buyNow ">
                                                <i className="fa fa-cart-plus" aria-hidden="true"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Product item 5 --> */}
                                <div className="col-3">
                                    <div className="home-product-item">
                                        <a href="/">
                                            <div
                                                className="home-product-item__img"
                                                style={{
                                                    backgroundImage:
                                                        'url(' +
                                                        'https://cf.shopee.vn/file/0a82d7cc998f02e028d985e57f277640_tn' +
                                                        ')',
                                                }}
                                            ></div>
                                            <h4 className="home-product-item__name">
                                                Điện thoại iphone 5 32/16gb Qte chính hãng - tặng kèm phụ kiện - bảo
                                                hành toàn quốc
                                            </h4>
                                        </a>
                                        <div className="home-product-item__price">
                                            <span className="home-product-item__price-old">1.200.000đ</span>
                                            <span className="home-product-item__price-current">750.000đ</span>
                                        </div>

                                        <div className="home-product-item__favourite">
                                            <i className="fas fa-check"></i>
                                            <span>Yêu thích</span>
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <span className="home-product-item__sale-of-lable">GIẢM</span>
                                            <span className="home-product-item__sale-of-percent">38%</span>
                                        </div>

                                        <div className="wrap-add-cart d-md-flex">
                                            <div className="quantity">
                                                <button className="btn-minusProduct">
                                                    <i className="fa fa-minus" aria-hidden="true"></i>
                                                </button>
                                                <input
                                                    className="quantityProduct"
                                                    defaultValue="1"
                                                    type="number"
                                                    min="1"
                                                    data-id="37741045"
                                                    max="100"
                                                    disabled=""
                                                />
                                                <button className="btn-plusProduct">
                                                    <i className="fa fa-plus" aria-hidden="true"></i>
                                                </button>
                                            </div>
                                            <button className="btn-buyNow ">
                                                <i className="fa fa-cart-plus" aria-hidden="true"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Product item 6--> */}
                                <div className="col-3">
                                    <div className="home-product-item">
                                        <a href="/">
                                            <div
                                                className="home-product-item__img"
                                                style={{
                                                    backgroundImage:
                                                        'url(' +
                                                        'https://cf.shopee.vn/file/0a82d7cc998f02e028d985e57f277640_tn' +
                                                        ')',
                                                }}
                                            ></div>
                                            <h4 className="home-product-item__name">
                                                Switch Gateron Milky (KS3X1) - Milky Yellow và Milky Black - Gateron
                                                KS3X1 - Switch dùng cho bàn phím cơ
                                            </h4>
                                        </a>
                                        <div className="home-product-item__price">
                                            <span className="home-product-item__price-old">1.200.000đ</span>
                                            <span className="home-product-item__price-current">999.000đ</span>
                                        </div>

                                        <div className="home-product-item__favourite">
                                            <i className="fas fa-check"></i>
                                            <span>Yêu thích</span>
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <span className="home-product-item__sale-of-lable">GIẢM</span>
                                            <span className="home-product-item__sale-of-percent">43%</span>
                                        </div>

                                        <div className="wrap-add-cart d-md-flex">
                                            <div className="quantity">
                                                <button className="btn-minusProduct">
                                                    <i className="fa fa-minus" aria-hidden="true"></i>
                                                </button>
                                                <input
                                                    className="quantityProduct"
                                                    defaultValue="1"
                                                    type="number"
                                                    min="1"
                                                    data-id="37741045"
                                                    max="100"
                                                    disabled=""
                                                />
                                                <button className="btn-plusProduct">
                                                    <i className="fa fa-plus" aria-hidden="true"></i>
                                                </button>
                                            </div>
                                            <button className="btn-buyNow ">
                                                <i className="fa fa-cart-plus" aria-hidden="true"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Product item 7--> */}
                                <div className="col-3">
                                    <div className="home-product-item">
                                        <a href="/">
                                            <div
                                                className="home-product-item__img"
                                                style={{
                                                    backgroundImage:
                                                        'url(' +
                                                        'https://cf.shopee.vn/file/0a82d7cc998f02e028d985e57f277640_tn' +
                                                        ')',
                                                }}
                                            ></div>
                                            <h4 className="home-product-item__name">
                                                Switch Gateron Milky (KS3X1) - Milky Yellow và Milky Black - Gateron
                                                KS3X1 - Switch dùng cho bàn phím cơ
                                            </h4>
                                        </a>
                                        <div className="home-product-item__price">
                                            <span className="home-product-item__price-old">1.200.000đ</span>
                                            <span className="home-product-item__price-current">999.000đ</span>
                                        </div>

                                        <div className="home-product-item__favourite">
                                            <i className="fas fa-check"></i>
                                            <span>Yêu thích</span>
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <span className="home-product-item__sale-of-lable">GIẢM</span>
                                            <span className="home-product-item__sale-of-percent">43%</span>
                                        </div>

                                        <div className="wrap-add-cart d-md-flex">
                                            <div className="quantity">
                                                <button className="btn-minusProduct">
                                                    <i className="fa fa-minus" aria-hidden="true"></i>
                                                </button>
                                                <input
                                                    className="quantityProduct"
                                                    defaultValue="1"
                                                    type="number"
                                                    min="1"
                                                    data-id="37741045"
                                                    max="100"
                                                    disabled=""
                                                />
                                                <button className="btn-plusProduct">
                                                    <i className="fa fa-plus" aria-hidden="true"></i>
                                                </button>
                                            </div>
                                            <button className="btn-buyNow ">
                                                <i className="fa fa-cart-plus" aria-hidden="true"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Product item 8--> */}
                                <div className="col-3">
                                    <div className="home-product-item">
                                        <a href="/">
                                            <div
                                                className="home-product-item__img"
                                                style={{
                                                    backgroundImage:
                                                        'url(' +
                                                        'https://cf.shopee.vn/file/0a82d7cc998f02e028d985e57f277640_tn' +
                                                        ')',
                                                }}
                                            ></div>
                                            <h4 className="home-product-item__name">
                                                Switch Gateron Milky (KS3X1) - Milky Yellow và Milky Black - Gateron
                                                KS3X1 - Switch dùng cho bàn phím cơ
                                            </h4>
                                        </a>
                                        <div className="home-product-item__price">
                                            <span className="home-product-item__price-old">1.200.000đ</span>
                                            <span className="home-product-item__price-current">999.000đ</span>
                                        </div>

                                        <div className="home-product-item__favourite">
                                            <i className="fas fa-check"></i>
                                            <span>Yêu thích</span>
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <span className="home-product-item__sale-of-lable">GIẢM</span>
                                            <span className="home-product-item__sale-of-percent">43%</span>
                                        </div>

                                        <div className="wrap-add-cart d-md-flex">
                                            <div className="quantity">
                                                <button className="btn-minusProduct">
                                                    <i className="fa fa-minus" aria-hidden="true"></i>
                                                </button>
                                                <input
                                                    className="quantityProduct"
                                                    defaultValue="1"
                                                    type="number"
                                                    min="1"
                                                    data-id="37741045"
                                                    max="100"
                                                    disabled=""
                                                />
                                                <button className="btn-plusProduct">
                                                    <i className="fa fa-plus" aria-hidden="true"></i>
                                                </button>
                                            </div>
                                            <button className="btn-buyNow ">
                                                <i className="fa fa-cart-plus" aria-hidden="true"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;
