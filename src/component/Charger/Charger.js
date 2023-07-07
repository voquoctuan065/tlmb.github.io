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

function Charger() {
    const { VND, product, addToCart } = useContext(Context);
    let count = 0;
    for (let pro of product) if (pro.catalog_id === 55) count += 1;

    return (
        <ProductPage>
            <nav className="bread-crumb">
                <ul className="breadcrumb">
                    <li className="home">
                        <a href="/">Trang chủ</a>
                    </li>
                    <div className="slash">/</div>
                    <li className="active">Củ sạc</li>
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
                                            dataText="Apple"
                                            dataOperator="OR"
                                            value="Apple"
                                            title="Apple"
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
                                            dataText="Nokia"
                                            dataOperator="OR"
                                            value="Nokia"
                                            title="Nokia"
                                        />
                                        <LI
                                            filter="filter-realme"
                                            type="checkbox"
                                            dataGroup="Hãng"
                                            dataField="vendor"
                                            dataText="Realme"
                                            dataOperator="OR"
                                            value="Realme"
                                            title="Realme"
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
                                            filter="filter-duoi2-000-000d"
                                            type="checkbox"
                                            dataGroup="Khoảng giá"
                                            dataField="price_min"
                                            dataText="Dưới 2.000.000đ"
                                            dataOperator="OR"
                                            value="<2000000"
                                            title="Dưới 2.000.000đ"
                                        />
                                        <LI
                                            filter="filter-2-000-000d-4-000-000d"
                                            type="checkbox"
                                            dataGroup="Khoảng giá"
                                            dataField="price_min"
                                            dataText="2.000.000đ - 4.000.000đ"
                                            dataOperator="OR"
                                            value=">=2000000 AND <= 4000000"
                                            title="2.000.000đ - 4.000.000đ"
                                        />
                                        <LI
                                            filter="filter-4-000-000d-6-000-000d"
                                            type="checkbox"
                                            dataGroup="Khoảng giá"
                                            dataField="price_min"
                                            dataText="4.000.000đ - 6.000.000đ"
                                            dataOperator="OR"
                                            value=">=4000000 AND <= 6000000"
                                            title="4.000.000đ - 6.000.000đ"
                                        />
                                        <LI
                                            filter="filter-6-000-000d-10-000-000d"
                                            type="checkbox"
                                            dataGroup="Khoảng giá"
                                            dataField="price_min"
                                            dataText="6.000.000đ - 10.000.000đ"
                                            dataOperator="OR"
                                            value=">=6000000 AND <= 10000000"
                                            title="6.000.000đ - 10.000.000đ"
                                        />
                                        <LI
                                            filter="filter-tren10-000-000d"
                                            type="checkbox"
                                            dataGroup="Khoảng giá"
                                            dataField="price_min"
                                            dataText="Trên 10.000.000đ"
                                            dataOperator="OR"
                                            value=">10000000"
                                            title="Trên 10.000.000đ"
                                        />
                                    </ul>
                                </div>
                            </aside>
                        </div>
                    </div>

                    <div className="collection-container col-9 right">
                        <div className="title-module padding-0 margin-bottom-15">
                            <h1>Củ sạc</h1>
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

                                <span className="coll-count">{count + ' sản phẩm'}</span>
                            </div>
                            <div className="section-product">
                                <div className="row sm-gutter">
                                    {product.map((currentMobile) =>
                                        currentMobile.catalog_id === 55 ? (
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
                                                    <span>{currentMobile.screenSize}</span>
                                                    <span>{currentMobile.resolution}</span>
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
                                                    <button onClick={() => addToCart(currentMobile.productId)}>
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
export default Charger;
