import axios from 'axios';

import { createContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
        cart = cartProduct.map((item) => item.filter((i) => i.productId != id));
        newCart = cart.filter((cartitem) => cartitem.length != 0);
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
            }}
        >
            {children}
        </Context.Provider>
    );
};

export default Context;
