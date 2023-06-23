import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';

import './banner.css';

const slideImage = [
    {
        url: 'https://bizweb.dktcdn.net/100/441/086/themes/896335/assets/slider_2.jpg?1684913368794',
    },
    {
        url: 'https://bizweb.dktcdn.net/thumb/large/100/441/086/themes/896335/assets/slider_1.jpg?1684913368794',
    },
];

function Banner() {
    return (
        <div className="col-9 banner">
            <div className="banner-heading">
                <div className="banner-heading__item">
                    <i className="fa-solid fa-piggy-bank"></i>
                    <span>Ưu đãi ngập tràn</span>
                </div>
                <div className="banner-heading__item">
                    <i className="fa-solid fa-truck-fast"></i>
                    <span>Giao hàng nhanh chóng</span>
                </div>

                <a href="/" className="banner-heading__item">
                    <i className="fa-sharp fa-solid fa-cart-shopping"></i>
                    <span className="banner-heading__item-hover">Hướng dẫn mua online</span>
                </a>
            </div>
            <Slide duration={3000} arrows={false}>
                {slideImage.map((image, index) => (
                    <div key={index}>
                        <div className="banner-img" style={{ backgroundImage: `url(${image.url})` }}></div>
                    </div>
                ))}
            </Slide>
        </div>
    );
}

export default Banner;
