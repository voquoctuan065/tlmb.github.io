import { useContext } from 'react';
import './cartdrawer.css';
import Context from '~/store/Context';

function CartDrawer() {
    const { VND, currentUser, user, cartProduct, removeItem } = useContext(Context);

    return (
        <div>
            {currentUser || user ? (
                <div className="header__cart-list">
                    <h4 className="header__cart-heading">Sản phẩm đã thêm</h4>
                    <ul className="header__cart-list-item">
                        {cartProduct.map((current) =>
                            current.map((item, index) => (
                                <li className="header__cart-item" key={index}>
                                    <div
                                        className="header__cart-img"
                                        style={{
                                            backgroundImage: `url(${item.image_link})`,
                                        }}
                                    ></div>
                                    <div className="header__cart-item-info">
                                        <div className="header__cart-item-head">
                                            <h5 className="header__cart-item-name">{item.productName}</h5>
                                            <div className="header__cart-item-price-wrap">
                                                <span className="header__cart-item-price">
                                                    {VND.format(item.price)}
                                                </span>
                                            </div>
                                            <button onClick={() => removeItem(item.productId)} className="remove-btn">
                                                xóa
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            )),
                        )}
                    </ul>
                    <a className="header__cart-view-cart btn--primary" href="/">
                        Xem giỏ hàng
                    </a>
                </div>
            ) : (
                <div className="CartDrawer-contain">
                    <div className="CartDrawer-contain-img"></div>
                    <div className="CartDrawer-contain-message">Chưa Có Sản Phẩm Nào</div>
                </div>
            )}
        </div>
    );
}

export default CartDrawer;
