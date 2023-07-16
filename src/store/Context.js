import axios from 'axios';

import { createContext, useEffect, useState } from 'react';

const Context = createContext();

export const ContextProvider = ({ children }) => {
    // Login logout logic
    const [user, setUser] = useState(null);
    const [product, setProduct] = useState([]);
    const [cartProduct, setCartProduct] = useState([]);
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')) || null);

    // add Feature to Cart
    const addToCart = async (id) => {
        if (!currentUser && !user) window.alert('Bạn phải đăng nhập!');
        const res = await axios.get(`http://localhost:8800/api/product/${id}`);
        setCartProduct((prev) => [...prev, res.data]);
    };

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartProduct));
    }, [cartProduct]);

    const removeItem = (id) => {
        let cart = [];
        let newCart = [];
        let storage = localStorage.getItem('cart');
        if (storage) setCartProduct(JSON.parse(storage));
        // cart = cart.filter((cartItem) => cartItem.filter((item) => item.productId != id));
        cart = cartProduct.map((item) => item.filter((i) => i.productId !== id));
        newCart = cart.filter((cartitem) => cartitem.length !== 0);
        localStorage.setItem('cart', JSON.stringify(setCartProduct(newCart)));
    };

    // format VietNam currency
    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });

    //login logic by input form
    const login = async (inputs) => {
        const res = await axios.post('/auth/login', inputs);
        setCurrentUser(res.data);
    };

    //logout logic
    const logout = async (inputs) => {
        await axios
            .post('/auth/logout', inputs)
            .then((res) => {
                // eslint-disable-next-line no-restricted-globals
                location.reload(true);
            })
            .catch((err) => console.log(err));
        setCurrentUser(null);
    };

    //login logic by Socials

    const google = () => {
        window.open('http://localhost:8800/api/auth/google', '_self');
    };

    const logoutGoogle = () => {
        window.open('http://localhost:8800/api/auth/logoutgoogle', '_self');
    };

    const facebook = () => {
        window.open('http://localhost:8800/api/auth/facebook', '_self');
    };

    // get User in Social
    useEffect(() => {
        const getUser = () => {
            fetch('http://localhost:8800/api/auth/success', {
                method: 'GET',
                credentials: 'include',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Credential': true,
                },
            })
                .then((response) => {
                    if (response.status === 200) return response.json();
                    throw new Error('authentication has been failed !');
                })
                .then((resObject) => {
                    setUser(resObject.user);
                })
                .catch((err) => {
                    console.log(err);
                });
        };
        getUser();
    }, []);

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(currentUser));
    }, [currentUser]);

    //Get all product
    useEffect(() => {
        const getAllProduct = async () => {
            const res = await axios.post('/product');
            setProduct(res.data);
        };

        getAllProduct();
    }, []);

    //Get mobile brand apple
    const getMApple = async () => {
        const res = await axios.get('/filter/mapple');
        setProduct(res.data);
    };

    //Get mobile brand samsung
    const getMSamsung = async () => {
        const res = await axios.get('/filter/msamsung');
        setProduct(res.data);
    };

    //Get mobile brand xiaomi
    const getMXiaomi = async () => {
        const res = await axios.get('/filter/mxiaomi');
        setProduct(res.data);
    };

    //Get mobile brand realme
    const getMRealme = async () => {
        const res = await axios.get('/filter/mrealme');
        setProduct(res.data);
    };

    //Get mobile brand vivo
    const getMVivo = async () => {
        const res = await axios.get('/filter/mvivo');
        setProduct(res.data);
    };

    //get mobile price <2000000
    const getMPriceFirst = async () => {
        const res = await axios.get('/filter/mpricefirst');
        setProduct(res.data);
    };

    //get mobile price 2000000-4000000
    const getMPriceSecond = async () => {
        const res = await axios.get('/filter/mpricesecond');
        setProduct(res.data);
    };

    // get mobile price 4000000-6000000
    const getMPriceThird = async () => {
        const res = await axios.get('/filter/mpricethird');
        setProduct(res.data);
    };

    // get mobile price 6000000-10000000
    const getMPriceFourth = async () => {
        const res = await axios.get('/filter/mpricefourth');
        setProduct(res.data);
    };
    // get mobile price > 10000000
    const getMPriceLast = async () => {
        const res = await axios.get('/filter/mpricelast');
        setProduct(res.data);
    };

    // get mobile screen under 5 inch
    const getMScreenU5 = async () => {
        const res = await axios.get('/filter/mscreenu5');
        setProduct(res.data);
    };

    // get mobile screen under 6 inch
    const getMScreenU6 = async () => {
        const res = await axios.get('/filter/mscreenu6');
        setProduct(res.data);
    };

    // get mobile screen upper 6 inch
    const getMScreen6 = async () => {
        const res = await axios.get('/filter/mscreen6');
        setProduct(res.data);
    };

    // get mobile screen man hinh gap
    const getMScreenG = async () => {
        const res = await axios.get('/filter/mscreengap');
        setProduct(res.data);
    };

    const getMNameAZ = async () => {
        const res = await axios.get('/filter/mnameaz');
        setProduct(res.data);
    };

    const getMNameZA = async () => {
        const res = await axios.get('/filter/mnameza');
        setProduct(res.data);
    };

    const getMPriceAsc = async () => {
        const res = await axios.get('/filter/mpriceasc');
        setProduct(res.data);
    };

    const getMPriceDesc = async () => {
        const res = await axios.get('/filter/mpricedesc');
        setProduct(res.data);
    };
    return (
        <Context.Provider
            value={{
                currentUser,
                login,
                logout,
                user,
                logoutGoogle,
                google,
                facebook,
                VND,
                product,
                cartProduct,
                setCartProduct,
                addToCart,
                removeItem,
                getMApple,
                getMSamsung,
                getMRealme,
                getMXiaomi,
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
            }}
        >
            {children}
        </Context.Provider>
    );
};

export default Context;
