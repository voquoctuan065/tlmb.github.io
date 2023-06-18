import classNames from "classnames/bind";
import styles from './searchproductitem.module.css'

const cx = classNames.bind(styles);

function SearchProductItem() {
    return (
        <div className={cx('search-wrapper')}>
            <a className={cx('tlmb-search__hint')} href="/">
                <span>Iphone </span>
                <span>11 Pro Max</span>
            </a>
            <a className={cx('tlmb-search__hint')}  href="/">
                <span>Samsung </span>
                <span>Z flip</span>
            </a>
            <a className={cx('tlmb-search__hint')}  href="/">
                <span>Samsung </span>
                <span>Z flip</span>
            </a>
            <a className={cx('tlmb-search__hint')}  href="/">
                <span>Samsung </span>
                <span>Z flip</span>
            </a>
        </div>
    );
}

export default SearchProductItem;