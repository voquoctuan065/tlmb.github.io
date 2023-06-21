import Tippy from '@tippyjs/react/headless';
import React, { useEffect, useState } from 'react';

import '../../container/header/header.css';
import SearchProductItem from './SearchProductItem';

function Search() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    return (
        <div className="header-with-search__search-section">
            <div className="tlmb-searchbar">
                <Tippy
                    placement="bottom"
                    interactive={true}
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className="search-result" tabIndex="-1" {...attrs}>
                            <SearchProductItem />
                        </div>
                    )}
                >
                    <div className="tlmb-search__main" style={{ position: 'relative' }}>
                        <form role="search" className="tlmb-searchbar-input" autoComplete="off">
                            <input
                                aria-label="Đăng ký để nhận ưu đãi từ shop"
                                className="tlmb-searchbar-input__input"
                                maxLength="128"
                                placeholder="Đăng ký để nhận ưu đãi từ shop"
                                autoComplete="off"
                                aria-autocomplete="list"
                                aria-controls="tlmb-searchbar-listbox"
                                aria-expanded="false"
                                role="combobox"
                                defaultValue=""
                            />
                        </form>
                    </div>
                </Tippy>

                <button type="button" className="btn btn-solid-primary">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>
        </div>
    );
}

export default Search;
