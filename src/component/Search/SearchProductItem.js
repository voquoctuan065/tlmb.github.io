import classNames from 'classnames/bind';
import styles from './searchproductitem.module.css';

const cx = classNames.bind(styles);

function SearchProductItem({ productName }) {
    return (
        <div className={cx('search-wrapper')}>
            <a className={cx('tlmb-search__hint')} href="/">
                <span>{productName}</span>
            </a>
        </div>
    );
}

export default SearchProductItem;
