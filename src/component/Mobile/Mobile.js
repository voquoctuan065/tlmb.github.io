import { useContext } from 'react';
import ProductPage from '../../pages/ProductPage/ProductPage';
import Context from '~/store/Context';

function LIST({ cln, btnTitle, func }) {
    return (
        <li className={cln}>
            <button onClick={func}>{btnTitle}</button>
        </li>
    );
}

function Mobile() {
    const {
        VND,
        product,
        addToCart,
        getMApple,
        getMSamsung,
        getMXiaomi,
        getMRealme,
        getMVivo,
        getMPriceFirst,
        getMPriceSecond,
        getMPriceThird,
        getMPriceFourth,
        getMPriceLast,
        getMScreenU5,
        getMScreenU6,
        getMScreen6,
        getMScreenG,
        getMNameAZ,
        getMNameZA,
        getMPriceAsc,
        getMPriceDesc,
    } = useContext(Context);
    let count = 0;
    for (let pro of product) if (pro.catalog_id === 11) count += 1;

    return (
        <ProductPage>
            <nav className="bread-crumb">
                <ul className="breadcrumb">
                    <li className="home">
                        <a href="/">Trang chủ</a>
                    </li>
                    <div className="slash">/</div>
                    <li className="active">Điện thoại</li>
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
                                <div className="aside-content filter-group d-flex flex-column">
                                    <button
                                        onClick={getMApple}
                                        className="btn btn-secondary mb-3"
                                        style={{ width: '50%', fontSize: '12px', marginLeft: '10px', opacity: '.8' }}
                                    >
                                        Apple
                                    </button>
                                    <button
                                        onClick={getMSamsung}
                                        className="btn btn-secondary mb-3"
                                        style={{ width: '50%', fontSize: '12px', marginLeft: '10px', opacity: '.8' }}
                                    >
                                        Samsung
                                    </button>
                                    <button
                                        onClick={getMXiaomi}
                                        className="btn btn-secondary mb-3"
                                        style={{ width: '50%', fontSize: '12px', marginLeft: '10px', opacity: '.8' }}
                                    >
                                        Xiaomi
                                    </button>
                                    <button
                                        onClick={getMRealme}
                                        className="btn btn-secondary mb-3"
                                        style={{ width: '50%', fontSize: '12px', marginLeft: '10px', opacity: '.8' }}
                                    >
                                        Realme
                                    </button>
                                    <button
                                        onClick={getMVivo}
                                        className="btn btn-secondary mb-3"
                                        style={{ width: '50%', fontSize: '12px', marginLeft: '10px', opacity: '.8' }}
                                    >
                                        Vivo
                                    </button>
                                </div>
                            </aside>

                            {/* Loc theo gia */}
                            <aside className="aside-item filter-vendor margin-bottom-10">
                                <div className="aside-title">Theo mức giá</div>
                                <div className="aside-content filter-group">
                                    <button
                                        onClick={getMPriceFirst}
                                        className="btn btn-secondary text-white mb-3"
                                        style={{ width: '70%', fontSize: '12px', marginLeft: '10px', opacity: '.8' }}
                                    >
                                        Dưới 2.000.000đ
                                    </button>
                                    <button
                                        onClick={getMPriceSecond}
                                        className="btn btn-secondary text-white mb-3"
                                        style={{ width: '70%', fontSize: '12px', marginLeft: '10px', opacity: '.8' }}
                                    >
                                        Từ 2.000.000đ - 4.000.000đ
                                    </button>
                                    <button
                                        onClick={getMPriceThird}
                                        className="btn btn-secondary text-white mb-3"
                                        style={{ width: '70%', fontSize: '12px', marginLeft: '10px', opacity: '.8' }}
                                    >
                                        Từ 4.000.000đ - 6.000.000đ
                                    </button>
                                    <button
                                        onClick={getMPriceFourth}
                                        className="btn btn-secondary text-white mb-3"
                                        style={{ width: '70%', fontSize: '12px', marginLeft: '10px', opacity: '.8' }}
                                    >
                                        Từ 6.000.000đ - 10.000.000đ
                                    </button>
                                    <button
                                        onClick={getMPriceLast}
                                        className="btn btn-secondary text-white mb-3"
                                        style={{ width: '70%', fontSize: '12px', marginLeft: '10px', opacity: '.8' }}
                                    >
                                        Trên 10.000.000đ
                                    </button>
                                </div>
                            </aside>

                            {/* Loc theo man hinh */}
                            <aside className="aside-item filter-vendor margin-bottom-10">
                                <div className="aside-title">Màn hình</div>
                                <div className="aside-content filter-group">
                                    <button
                                        onClick={getMScreenU5}
                                        className="btn btn-secondary text-white mb-3"
                                        style={{ width: '70%', fontSize: '12px', marginLeft: '10px', opacity: '.8' }}
                                    >
                                        Màn hình nhỏ: dưới 5 inch
                                    </button>
                                    <button
                                        onClick={getMScreenU6}
                                        className="btn btn-secondary text-white mb-3"
                                        style={{ width: '70%', fontSize: '12px', marginLeft: '10px', opacity: '.8' }}
                                    >
                                        Nhỏ gọn vừa tay: dưới 6 inch
                                    </button>
                                    <button
                                        onClick={getMScreen6}
                                        className="btn btn-secondary text-white mb-3"
                                        style={{ width: '70%', fontSize: '12px', marginLeft: '10px', opacity: '.8' }}
                                    >
                                        Trên 6 inch
                                    </button>
                                    <button
                                        onClick={getMScreenG}
                                        className="btn btn-secondary text-white mb-3"
                                        style={{ width: '70%', fontSize: '12px', marginLeft: '10px', opacity: '.8' }}
                                    >
                                        Màn hình gập
                                    </button>
                                </div>
                            </aside>
                        </div>
                    </div>

                    <div className="collection-container col-9 right">
                        <div className="title-module padding-0 margin-bottom-15">
                            <h1>Điện thoại</h1>
                        </div>
                        <div className="row category-product product">
                            <div className="sort-cate-left d-flex align-center bg-white margin-bottom-20 padding-15">
                                <div className="sort-cate d-flex align-center position-relative">
                                    <span className="sort-title margin-right-10">Sắp xếp:</span>
                                    <ul>
                                        <LIST cln={['btn-quick-sort sort-default default']} btnTitle="Mặc định" />
                                        <LIST cln={['btn-quick-sort alpha-asc']} btnTitle="Tên A-Z" func={getMNameAZ} />
                                        <LIST
                                            cln={['btn-quick-sort alpha-desc']}
                                            btnTitle="Tên Z-A"
                                            func={getMNameZA}
                                        />
                                        <LIST
                                            cln={['btn-quick-sort price-asc']}
                                            btnTitle="Giá tăng dần"
                                            func={getMPriceAsc}
                                        />
                                        <LIST
                                            cln={['btn-quick-sort price-desc']}
                                            btnTitle="Giá giảm dần"
                                            func={getMPriceDesc}
                                        />
                                    </ul>
                                </div>

                                <span className="coll-count">{count + ' sản phẩm'}</span>
                            </div>
                            <div className="section-product">
                                <div className="row sm-gutter">
                                    {product.map((currentMobile) =>
                                        currentMobile.catalog_id === 11 ? (
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
export default Mobile;
