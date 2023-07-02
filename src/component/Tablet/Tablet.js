import { useContext } from 'react';
import ProductPage from '../../pages/ProductPage/ProductPage';
import Context from '~/store/Context';

function LI({ filter, type, dataGroup, dataField, dataText, value, dataOperator, title }) {
    return (
        <li className="filter-item filter-item--check-box filter-item--green vendorxxx">
            <span>
                <label htmlFor={filter}>
                    <input
                        type={type}
                        data-group={dataGroup}
                        data-field={dataField}
                        data-text={dataText}
                        value={`(${value})`}
                        data-operator={dataOperator}
                    />
                    <i className="fa"></i>
                    <span>{title}</span>
                </label>
            </span>
        </li>
    );
}

function LIST({ cln, btnTitle }) {
    return (
        <li className={cln}>
            <button>{btnTitle}</button>
        </li>
    );
}

function Tablet() {
    const { VND, product } = useContext(Context);
    let count = 0;
    for (let pro of product) if (pro.catalog_id === 22) count += 1;
    return (
        <ProductPage>
            <nav className="bread-crumb">
                <ul className="breadcrumb">
                    <li className="home">
                        <a href="/">Trang chủ</a>
                    </li>
                    <div className="slash">/</div>
                    <li className="active">Máy tính bảng</li>
                </ul>
            </nav>

            <div className="section collection-page">
                <div className="row">
                    <div className="filter-content aside-filter col-3 left">
                        <div className="module-filter border-radius-10">
                            Lọc sản phẩm<span className="d-block">Tìm kiếm dễ dàng chính xác</span>
                        </div>
                        <div className="filter-container">
                            {/* Loc theo thuong hieu */}
                            <aside className="aside-item filter-vendor margin-bottom-10">
                                <div className="aside-title">Thương hiệu</div>
                                <div className="aside-content filter-group">
                                    <ul>
                                        <LI
                                            filter="filter-apple"
                                            type="checkbox"
                                            dataGroup="Hãng"
                                            dataField="vendor"
                                            dataText="iPad"
                                            dataOperator="OR"
                                            value="iPad"
                                            title="iPad"
                                        />
                                        <LI
                                            filter="filter-samsung"
                                            type="checkbox"
                                            dataGroup="Hãng"
                                            dataField="vendor"
                                            dataText="Samsung"
                                            dataOperator="OR"
                                            value="Samsung"
                                            title="Samsung"
                                        />
                                        <LI
                                            filter="filter-xiaomi"
                                            type="checkbox"
                                            dataGroup="Hãng"
                                            dataField="vendor"
                                            dataText="Xiaomi"
                                            dataOperator="OR"
                                            value="Xiaomi"
                                            title="Xiaomi"
                                        />
                                        <LI
                                            filter="filter-nokia"
                                            type="checkbox"
                                            dataGroup="Hãng"
                                            dataField="vendor"
                                            dataText="Oppo"
                                            dataOperator="OR"
                                            value="Oppo"
                                            title="Oppo"
                                        />
                                        <LI
                                            filter="filter-realme"
                                            type="checkbox"
                                            dataGroup="Hãng"
                                            dataField="vendor"
                                            dataText="Lenovo"
                                            dataOperator="OR"
                                            value="Lenovo"
                                            title="Lenovo"
                                        />
                                        <LI
                                            filter="filter-realme"
                                            type="checkbox"
                                            dataGroup="Hãng"
                                            dataField="vendor"
                                            dataText="Mastel"
                                            dataOperator="OR"
                                            value="Mastel"
                                            title="Mastel"
                                        />
                                    </ul>
                                </div>
                            </aside>

                            {/* Loc theo gia */}
                            <aside className="aside-item filter-vendor margin-bottom-10">
                                <div className="aside-title">Theo mức giá</div>
                                <div className="aside-content filter-group">
                                    <ul>
                                        <LI
                                            filter="filter-duoi3-000-000d"
                                            type="checkbox"
                                            dataGroup="Khoảng giá"
                                            dataField="price_min"
                                            dataText="Dưới 3.000.000đ"
                                            dataOperator="OR"
                                            value="<3000000"
                                            title="Dưới 3.000.000đ"
                                        />
                                        <LI
                                            filter="filter-3-000-000d-8-000-000d"
                                            type="checkbox"
                                            dataGroup="Khoảng giá"
                                            dataField="price_min"
                                            dataText="3.000.000đ - 8.000.000đ"
                                            dataOperator="OR"
                                            value=">=3000000 AND <= 8000000"
                                            title="3.000.000đ - 8.000.000đ"
                                        />
                                        <LI
                                            filter="filter-8-000-000d-15-000-000d"
                                            type="checkbox"
                                            dataGroup="Khoảng giá"
                                            dataField="price_min"
                                            dataText="8.000.000đ - 15.000.000đ"
                                            dataOperator="OR"
                                            value=">=8000000 AND <= 15000000"
                                            title="8.000.000đ - 15.000.000đ"
                                        />
                                        <LI
                                            filter="filter-tren15-000-000d"
                                            type="checkbox"
                                            dataGroup="Khoảng giá"
                                            dataField="price_min"
                                            dataText="Trên 15.000.000đ"
                                            dataOperator="OR"
                                            value=">15000000"
                                            title="Trên 15.000.000đ"
                                        />
                                    </ul>
                                </div>
                            </aside>

                            {/* Loc theo man hinh */}
                            <aside className="aside-item filter-vendor margin-bottom-10">
                                <div className="aside-title">Màn hình</div>
                                <div className="aside-content filter-group">
                                    <ul>
                                        <LI
                                            filter="filter-khoang-7-8-inch"
                                            type="checkbox"
                                            dataGroup="Màn hình"
                                            dataField="screen"
                                            dataText="Dưới 5 inch"
                                            dataOperator="OR"
                                            value="<5"
                                            title="Khoảng 7 - 8 inch"
                                        />
                                        <LI
                                            filter="filter-khoang-9-inch"
                                            type="checkbox"
                                            dataGroup="Màn hình"
                                            dataField="screen"
                                            dataText="Khoảng 9 inch"
                                            dataOperator="OR"
                                            value="<6"
                                            title="Khoảng 9 inch"
                                        />
                                        <LI
                                            filter="filter-khoang-10-11-inch"
                                            type="checkbox"
                                            dataGroup="Màn hình"
                                            dataField="screen"
                                            dataText="Khoảng 10 - 11 inch"
                                            dataOperator="OR"
                                            value=">6"
                                            title="Khoảng 10 - 11 inch"
                                        />
                                        <LI
                                            filter="filter-khoang-tren-12-inch"
                                            type="checkbox"
                                            dataGroup="Màn hình"
                                            dataField="screen"
                                            dataText="Khoảng 12 inch trở lên"
                                            dataOperator="OR"
                                            value="Màn hình gập"
                                            title="Khoảng 12 inch trở lên"
                                        />
                                    </ul>
                                </div>
                            </aside>
                        </div>
                    </div>

                    <div className="collection-container col-9 right">
                        <div className="title-module padding-0 margin-bottom-15">
                            <h1>Máy tính bảng</h1>
                        </div>
                        <div className="row category-product product">
                            <div className="sort-cate-left d-flex align-center bg-white margin-bottom-20 padding-15">
                                <div className="sort-cate d-flex align-center position-relative">
                                    <span className="sort-title margin-right-10">Sắp xếp:</span>
                                    <ul>
                                        <LIST cln={['btn-quick-sort sort-default default']} btnTitle="Mặc định" />
                                        <LIST cln={['btn-quick-sort alpha-asc']} btnTitle="Tên A-Z" />
                                        <LIST cln={['btn-quick-sort alpha-desc']} btnTitle="Tên Z-A" />
                                        <LIST cln={['btn-quick-sort price-asc']} btnTitle="Giá tăng dần" />
                                        <LIST cln={['btn-quick-sort price-desc']} btnTitle="Giá giảm dần" />
                                        <LIST cln={['btn-quick-sort created-desc']} btnTitle="Mới nhất" />
                                        <LIST cln={['btn-quick-sort created-asc']} btnTitle="Cũ nhất" />
                                    </ul>
                                </div>
                                <span className="coll-count">{count + ' Sản phẩm'}</span>
                            </div>
                            <div className="section-product">
                                <div className="row sm-gutter">
                                    {product.map((currentMobile) =>
                                        currentMobile.catalog_id === 22 ? (
                                            <div
                                                className="col-3 col-md-3 home-product-item"
                                                key={currentMobile.productId}
                                            >
                                                <a href="/">
                                                    <div
                                                        className="home-product-item__img"
                                                        style={{
                                                            backgroundImage: `url(${currentMobile.image_link})`,
                                                        }}
                                                    ></div>
                                                    <h3 className="product-name">{currentMobile.productName}</h3>
                                                </a>
                                                <div className="item-compare gray-bg">
                                                    <span>{currentMobile.resolution}</span>
                                                    <span>{currentMobile.screenSize}</span>
                                                </div>
                                                {currentMobile.discount > 0 ? (
                                                    <div className="box-p">
                                                        <p className="price-old black">
                                                            {VND.format(currentMobile.price)}
                                                        </p>
                                                        <span className="percent">{currentMobile.discount + '%'}</span>
                                                    </div>
                                                ) : (
                                                    ''
                                                )}
                                                <div className="home-product-item__price">
                                                    <span className="home-product-item__price-current">
                                                        {VND.format(
                                                            currentMobile.price -
                                                                currentMobile.price * (currentMobile.discount / 100),
                                                        )}
                                                    </span>
                                                    <button>
                                                        <i className="fa-solid fa-circle-plus"></i>
                                                    </button>
                                                </div>

                                                <div className="home-product-item__favourite">
                                                    <span>Trả góp 0%</span>
                                                </div>
                                            </div>
                                        ) : (
                                            ''
                                        ),
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ProductPage>
    );
}
export default Tablet;
