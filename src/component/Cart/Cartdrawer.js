import { useContext } from 'react';
import './cartdrawer.css';
import Context from '~/store/Context';

const productItem = [
    {
        url: 'https://down-vn.img.susercontent.com/file/b4a2bd138f078704fa1846857f3eb80e_tn',
        productName: 'Bàn phím cơ DAREU EK880 led RGB (RGB, Blue/ Brown/ Red D switch)',
        productPrice: '3.000.000',
    },
    {
        url: 'https://down-vn.img.susercontent.com/file/b4a2bd138f078704fa1846857f3eb80e_tn',
        productName: 'Bàn phím cơ DAREU EK880 led RGB (RGB, Blue/ Brown/ Red D switch)',
        productPrice: '3.000.000',
    },
    {
        url: 'https://down-vn.img.susercontent.com/file/b4a2bd138f078704fa1846857f3eb80e_tn',
        productName: 'Bàn phím cơ DAREU EK880 led RGB (RGB, Blue/ Brown/ Red D switch)',
        productPrice: '4.000.000',
    },
    {
        url: 'https://down-vn.img.susercontent.com/file/b4a2bd138f078704fa1846857f3eb80e_tn',
        productName: 'Bàn phím cơ DAREU EK880 led RGB (RGB, Blue/ Brown/ Red D switch)',
        productPrice: '4.000.000',
    },
    {
        url: 'https://down-vn.img.susercontent.com/file/b4a2bd138f078704fa1846857f3eb80e_tn',
        productName: 'Bàn phím cơ DAREU EK880 led RGB (RGB, Blue/ Brown/ Red D switch)',
        productPrice: '4.000.000',
    },
];

function CartDrawer() {
    const { currentUser, user } = useContext(Context);
    return (
        <div>
            {currentUser || user ? (
                <div className="header__cart-list">
                    <h4 class="header__cart-heading">Sản phẩm đã thêm</h4>
                    <ul class="header__cart-list-item">
                        {productItem.map((currentProduct, index) => (
                            <li class="header__cart-item" key={index}>
                                <div
                                    class="header__cart-img"
                                    style={{
                                        backgroundImage: `url(${currentProduct.url})`,
                                    }}
                                ></div>
                                <div class="header__cart-item-info">
                                    <div class="header__cart-item-head">
                                        <h5 class="header__cart-item-name">{currentProduct.productName}</h5>
                                        <div class="header__cart-item-price-wrap">
                                            <span class="header__cart-item-price">{currentProduct.productPrice}đ</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <a class="header__cart-view-cart btn--primary" href="/">
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
