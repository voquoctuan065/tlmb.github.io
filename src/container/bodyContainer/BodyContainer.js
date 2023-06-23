import 'bootstrap/dist/css/bootstrap.min.css';

import Banner from '~/component/Banner/Banner';
import Sidebar from '../sidebar/Sidebar';
import './bodycontainer.css';

function BorderContainer() {
    return (
        <div className="container">
            <div className="grid wide">
                <div className="row sm-gutter body-first-component">
                    <Sidebar />
                    <Banner />
                </div>

                <div className="body-second-component">
                    <h2 className="heading-bar-title">
                        <a href="/mobile">Điện thoại nổi bật nhất</a>
                        <div className="heading-bar-right"></div>
                    </h2>

                    <div className="homproduct">
                        <div className="row sm-gutter">
                            {/* item1 */}
                            <div className="col-6 col-md-3 home-product-item">
                                <a href="/">
                                    <div
                                        className="home-product-item__img"
                                        style={{
                                            backgroundImage:
                                                'url(' +
                                                'https://bizweb.dktcdn.net/thumb/medium/100/441/086/products/iphone-xi-do-600x600.jpg?v=1639878154720' +
                                                ')',
                                        }}
                                    ></div>
                                    <span className="home-product-item__name">iPhone XR</span>
                                </a>

                                <div className="home-product-item__price">
                                    <span className="home-product-item__price-current">14.990.000đ</span>
                                    <button>
                                        <i className="fa-solid fa-circle-plus"></i>
                                    </button>
                                </div>

                                <div className="home-product-item__favourite">
                                    <span>Trả góp 0%</span>
                                </div>
                            </div>

                            {/* item2 */}
                            <div className="col-6 col-md-3 home-product-item">
                                <a href="/">
                                    <div
                                        className="home-product-item__img"
                                        style={{
                                            backgroundImage:
                                                'url(' +
                                                'https://bizweb.dktcdn.net/thumb/medium/100/441/086/products/1121544672-jpeg.jpg?v=1639816055390' +
                                                ')',
                                        }}
                                    ></div>
                                    <h4 className="home-product-item__name">Samsung Galaxy Z Fold3</h4>
                                </a>
                                <div className="home-product-item__price">
                                    <span className="home-product-item__price-current">41.999.000đ</span>
                                    <button>
                                        <i className="fa-solid fa-circle-plus"></i>
                                    </button>
                                </div>
                                <div className="home-product-item__favourite">
                                    <span>Trả góp 0%</span>
                                </div>
                            </div>

                            {/* item3 */}
                            <div className="col-6 col-md-3 home-product-item">
                                <a href="/">
                                    <div
                                        className="home-product-item__img"
                                        style={{
                                            backgroundImage:
                                                'url(' +
                                                'https://bizweb.dktcdn.net/thumb/medium/100/441/086/products/1061131762-jpeg.jpg?v=1639817915377' +
                                                ')',
                                        }}
                                    ></div>
                                    <h4 className="home-product-item__name">Điện thoại Oppo A95</h4>
                                </a>
                                <div className="home-product-item__price">
                                    <span className="home-product-item__price-current">6.999.000đ</span>
                                    <button>
                                        <i className="fa-solid fa-circle-plus"></i>
                                    </button>
                                </div>
                                <div className="home-product-item__favourite">
                                    <i className="fas fa-check"></i>
                                    <span>Trả góp 0%</span>
                                </div>
                            </div>

                            {/* item4 */}
                            <div className="col-6 col-md-3 home-product-item">
                                <a href="/">
                                    <div
                                        className="home-product-item__img"
                                        style={{
                                            backgroundImage:
                                                'url(' +
                                                'https://bizweb.dktcdn.net/thumb/medium/100/441/086/products/1907192133-jpeg.jpg?v=1639817401933' +
                                                ')',
                                        }}
                                    ></div>
                                    <h4 className="home-product-item__name">Samsung Galaxy A32 5G</h4>
                                </a>
                                <div className="home-product-item__price">
                                    <span className="home-product-item__price-current">6.090.000đ</span>
                                    <button>
                                        <i className="fa-solid fa-circle-plus"></i>
                                    </button>
                                </div>
                                <div className="home-product-item__favourite">
                                    <i className="fas fa-check"></i>
                                    <span>Trả góp 0%</span>
                                </div>
                            </div>

                            <div className="text-center mt-5 col-12">
                                <a href="/dien-thoai" title="Xem tất cả" className="see-btn seebtn-product">
                                    Xem tất cả
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="row text-center justify-content-md-center justify-content-start advertisement">
                        <div className="item col-8 col-md-4">
                            <a className="advert-banner" href="/">
                                <picture>
                                    <img
                                        className="img-fluid"
                                        src="//bizweb.dktcdn.net/100/441/086/themes/896335/assets/banner_coll_1_1.jpg?1684913368794"
                                        alt="banner_coll_1_1_title"
                                        width="380"
                                        height="204"
                                    />
                                </picture>
                            </a>
                        </div>
                        <div className="item col-8 col-md-4">
                            <a className="advert-banner" href="/">
                                <picture>
                                    <img
                                        className="img-fluid"
                                        src="//bizweb.dktcdn.net/100/441/086/themes/896335/assets/banner_coll_1_1.jpg?1684913368794"
                                        alt="banner_coll_1_1_title"
                                        width="380"
                                        height="204"
                                    />
                                </picture>
                            </a>
                        </div>
                        <div className="item col-8 col-md-4">
                            <a className="advert-banner" href="/">
                                <picture>
                                    <img
                                        className="img-fluid"
                                        src="//bizweb.dktcdn.net/100/441/086/themes/896335/assets/banner_coll_1_1.jpg?1684913368794"
                                        alt="banner_coll_1_1_title"
                                        width="380"
                                        height="204"
                                    />
                                </picture>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="body-third-component">
                    <h2 className="heading-bar-title">
                        <a href="/mobile">Máy tính bảng</a>
                        <div className="heading-bar-right"></div>
                    </h2>

                    <div className="homproduct">
                        <div className="row sm-gutter">
                            <div className="col-lg-3 col-12">
                                <div className="col">
                                    <a className="advert-banner" href="/">
                                        <picture>
                                            <img
                                                className="img-fluid"
                                                src="https://bizweb.dktcdn.net/100/441/086/themes/896335/assets/section_product_tag_1_banner.jpg?1684913368794"
                                                alt="banner_coll_1_1_title"
                                            />
                                        </picture>
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-9 col-12">
                                <div className="row">
                                    {/* item1 */}
                                    <div className="col-6 col-md-3 home-product-item">
                                        <a href="/">
                                            <div
                                                className="home-product-item__img"
                                                style={{
                                                    backgroundImage:
                                                        'url(' +
                                                        'https://bizweb.dktcdn.net/thumb/medium/100/441/086/products/iphone-xi-do-600x600.jpg?v=1639878154720' +
                                                        ')',
                                                }}
                                            ></div>
                                            <span className="home-product-item__name">iPhone XR</span>
                                        </a>
                                        <div className="home-product-item__price">
                                            <span className="home-product-item__price-current">14.990.000đ</span>
                                            <button>
                                                <i className="fa-solid fa-circle-plus"></i>
                                            </button>
                                        </div>
                                        <div className="home-product-item__favourite">
                                            <span>Trả góp 0%</span>
                                        </div>
                                    </div>
                                    {/* item2 */}
                                    <div className="col-6 col-md-3  home-product-item">
                                        <a href="/">
                                            <div
                                                className="home-product-item__img"
                                                style={{
                                                    backgroundImage:
                                                        'url(' +
                                                        'https://bizweb.dktcdn.net/thumb/medium/100/441/086/products/1121544672-jpeg.jpg?v=1639816055390' +
                                                        ')',
                                                }}
                                            ></div>
                                            <h4 className="home-product-item__name">Samsung Galaxy Z Fold3</h4>
                                        </a>
                                        <div className="home-product-item__price">
                                            <span className="home-product-item__price-current">41.999.000đ</span>
                                            <button>
                                                <i className="fa-solid fa-circle-plus"></i>
                                            </button>
                                        </div>
                                        <div className="home-product-item__favourite">
                                            <span>Trả góp 0%</span>
                                        </div>
                                    </div>
                                    {/* item3 */}
                                    <div className="col-6 col-md-3 home-product-item">
                                        <a href="/">
                                            <div
                                                className="home-product-item__img"
                                                style={{
                                                    backgroundImage:
                                                        'url(' +
                                                        'https://bizweb.dktcdn.net/thumb/medium/100/441/086/products/1061131762-jpeg.jpg?v=1639817915377' +
                                                        ')',
                                                }}
                                            ></div>
                                            <h4 className="home-product-item__name">Điện thoại Oppo A95</h4>
                                        </a>
                                        <div className="home-product-item__price">
                                            <span className="home-product-item__price-current">6.999.000đ</span>
                                            <button>
                                                <i className="fa-solid fa-circle-plus"></i>
                                            </button>
                                        </div>
                                        <div className="home-product-item__favourite">
                                            <i className="fas fa-check"></i>
                                            <span>Trả góp 0%</span>
                                        </div>
                                    </div>
                                    {/* item4 */}
                                    <div className="col-6 col-md-3 home-product-item">
                                        <a href="/">
                                            <div
                                                className="home-product-item__img"
                                                style={{
                                                    backgroundImage:
                                                        'url(' +
                                                        'https://bizweb.dktcdn.net/thumb/medium/100/441/086/products/1907192133-jpeg.jpg?v=1639817401933' +
                                                        ')',
                                                }}
                                            ></div>
                                            <h4 className="home-product-item__name">Samsung Galaxy A32 5G</h4>
                                        </a>
                                        <div className="home-product-item__price">
                                            <span className="home-product-item__price-current">6.090.000đ</span>
                                            <button>
                                                <i className="fa-solid fa-circle-plus"></i>
                                            </button>
                                        </div>
                                        <div className="home-product-item__favourite">
                                            <i className="fas fa-check"></i>
                                            <span>Trả góp 0%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section_brand">
                    <div className="container card border-0">
                        <div className="title_module_main">
                            <h2 className="heading--title">THƯƠNG HIỆU SẢN PHẨM</h2>
                        </div>
                    </div>

                    <div className="row mx-0 hrz-scroll text-center flex-nowrap js-slider justify-content-around">
                        <div className="item ">
                            <a
                                href="/collections/all"
                                className="brand-item pos-relative d-flex align-items-center aspect-ratio "
                                title="Sony"
                            >
                                <img
                                    className="img-fluid m-auto object-contain mh-100 w-auto"
                                    src="//bizweb.dktcdn.net/100/441/086/themes/896335/assets/brand_1.jpg?1684913368794"
                                    alt="brand_1_title"
                                    width="157"
                                    height="67"
                                />
                            </a>
                        </div>
                        <div className="item ">
                            <a
                                href="/collections/all"
                                className="brand-item pos-relative d-flex align-items-center aspect-ratio "
                                title="Xiaomi"
                            >
                                <img
                                    className="img-fluid m-auto object-contain mh-100 w-auto"
                                    src="//bizweb.dktcdn.net/100/441/086/themes/896335/assets/brand_2.jpg?1684913368794"
                                    alt="brand_2_title"
                                    width="157"
                                    height="67"
                                />
                            </a>
                        </div>

                        <div className="item ">
                            <a
                                href="/collections/all"
                                className="brand-item pos-relative d-flex align-items-center aspect-ratio "
                                title="Oppo"
                            >
                                <img
                                    className="img-fluid m-auto object-contain mh-100 w-auto"
                                    src="//bizweb.dktcdn.net/100/441/086/themes/896335/assets/brand_3.jpg?1684913368794"
                                    alt="brand_3_title"
                                    width="157"
                                    height="67"
                                />
                            </a>
                        </div>

                        <div className="item ">
                            <a
                                href="/collections/all"
                                className="brand-item pos-relative d-flex align-items-center aspect-ratio "
                                title="Asus"
                            >
                                <img
                                    className="img-fluid m-auto object-contain mh-100 w-auto"
                                    src="//bizweb.dktcdn.net/100/441/086/themes/896335/assets/brand_4.jpg?1684913368794"
                                    alt="brand_4_title"
                                    width="157"
                                    height="67"
                                />
                            </a>
                        </div>

                        <div className="item ">
                            <a
                                href="/collections/all"
                                className="brand-item pos-relative d-flex align-items-center aspect-ratio "
                                title="JBL"
                            >
                                <img
                                    className="img-fluid m-auto object-contain mh-100 w-auto"
                                    src="//bizweb.dktcdn.net/100/441/086/themes/896335/assets/brand_5.jpg?1684913368794"
                                    alt="brand_5_title"
                                    width="157"
                                    height="67"
                                />
                            </a>
                        </div>

                        <div className="item ">
                            <a
                                href="/collections/all"
                                className="brand-item pos-relative d-flex align-items-center aspect-ratio "
                                title="Anker"
                            >
                                <img
                                    className="img-fluid m-auto object-contain mh-100 w-auto"
                                    src="//bizweb.dktcdn.net/100/441/086/themes/896335/assets/brand_6.jpg?1684913368794"
                                    alt="brand_6_title"
                                    width="157"
                                    height="67"
                                />
                            </a>
                        </div>

                        <div className="item ">
                            <a
                                href="/collections/all"
                                className="brand-item pos-relative d-flex align-items-center aspect-ratio "
                                title="Hoco"
                            >
                                <img
                                    className="img-fluid m-auto object-contain mh-100 w-auto"
                                    src="//bizweb.dktcdn.net/100/441/086/themes/896335/assets/brand_7.jpg?1684913368794"
                                    alt="brand_7_title"
                                    width="157"
                                    height="67"
                                />
                            </a>
                        </div>

                        <div className="item ">
                            <a
                                href="/collections/all"
                                className="brand-item pos-relative d-flex align-items-center aspect-ratio "
                                title="Apple"
                            >
                                <img
                                    className="img-fluid m-auto object-contain mh-100 w-auto"
                                    src="//bizweb.dktcdn.net/100/441/086/themes/896335/assets/brand_8.jpg?1684913368794"
                                    alt="brand_8_title"
                                    width="157"
                                    height="67"
                                />
                            </a>
                        </div>

                        <div className="item ">
                            <a
                                href="/collections/all"
                                className="brand-item pos-relative d-flex align-items-center aspect-ratio "
                                title="LG"
                            >
                                <img
                                    className="img-fluid m-auto object-contain mh-100 w-auto"
                                    src="//bizweb.dktcdn.net/100/441/086/themes/896335/assets/brand_9.jpg?1684913368794"
                                    alt="brand_9_title"
                                    width="157"
                                    height="67"
                                />
                            </a>
                        </div>

                        <div className="item ">
                            <a
                                href="/collections/all"
                                className="brand-item pos-relative d-flex align-items-center aspect-ratio "
                                title="Sam sung"
                            >
                                <img
                                    className="img-fluid m-auto object-contain mh-100 w-auto"
                                    src="//bizweb.dktcdn.net/100/441/086/themes/896335/assets/brand_10.jpg?1684913368794"
                                    alt="brand_10_title"
                                    width="157"
                                    height="67"
                                />
                            </a>
                        </div>

                        <div className="item ">
                            <a
                                href="/collections/all"
                                className="brand-item pos-relative d-flex align-items-center aspect-ratio "
                                title="Realme"
                            >
                                <img
                                    className="img-fluid m-auto object-contain mh-100 w-auto"
                                    src="//bizweb.dktcdn.net/100/441/086/themes/896335/assets/brand_11.jpg?1684913368794"
                                    alt="brand_11_title"
                                    width="157"
                                    height="67"
                                />
                            </a>
                        </div>

                        <div className="item ">
                            <a
                                href="/collections/all"
                                className="brand-item pos-relative d-flex align-items-center aspect-ratio "
                                title="BackBerry"
                            >
                                <img
                                    className="img-fluid m-auto object-contain mh-100 w-auto"
                                    src="//bizweb.dktcdn.net/100/441/086/themes/896335/assets/brand_12.jpg?1684913368794"
                                    alt="brand_12_title"
                                    width="157"
                                    height="67"
                                />
                            </a>
                        </div>

                        <div className="item ">
                            <a
                                href="/collections/all"
                                className="brand-item pos-relative d-flex align-items-center aspect-ratio "
                                title="Huawei"
                            >
                                <img
                                    className="img-fluid m-auto object-contain mh-100 w-auto"
                                    src="//bizweb.dktcdn.net/100/441/086/themes/896335/assets/brand_13.jpg?1684913368794"
                                    alt="brand_13_title"
                                    width="157"
                                    height="67"
                                />
                            </a>
                        </div>

                        <div className="item ">
                            <a
                                href="/collections/all"
                                className="brand-item pos-relative d-flex align-items-center aspect-ratio "
                                title="Lenovo"
                            >
                                <img
                                    className="img-fluid m-auto object-contain mh-100 w-auto"
                                    src="//bizweb.dktcdn.net/100/441/086/themes/896335/assets/brand_14.jpg?1684913368794"
                                    alt="brand_14_title"
                                    width="157"
                                    height="67"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BorderContainer;