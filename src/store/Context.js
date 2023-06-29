import axios from 'axios';

import { createContext, useEffect, useState } from 'react';

const Context = createContext();

export const ContextProvider = ({ children }) => {
    // Login logout logic
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')) || null);
    const [user, setUser] = useState(null);

    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });

    const login = async (inputs) => {
        const res = await axios.post('/auth/login', inputs);
        setCurrentUser(res.data);
    };

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

    const logoutGoogle = () => {
        window.open('http://localhost:8800/api/auth/logoutgoogle', '_self');
    };

    const google = () => {
        window.open('http://localhost:8800/api/auth/google', '_self');
    };

    const facebook = () => {
        window.open('http://localhost:8800/api/auth/facebook', '_self');
    };
    // Get the best product
    const [product, setProduct] = useState([]);

    useEffect(() => {
        async function fetchProductItem(url = '', data = {}) {
            const response = await fetch(url, {
                method: 'GET',
                credentials: 'include',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Credential': true,
                },
            });
            return response.json();
        }

        fetchProductItem('http://localhost:8800/api/product').then((data) => {
            setProduct(data);
        });
    }, []);

    // get User in Social
    useEffect(() => {
        const getUser = () => {
            fetch('http://localhost:8800/api/auth/login/success', {
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

    // get mobile in database
    const [mobile, setMobile] = useState([]);

    useEffect(() => {
        const getMobile = async () => {
            const res = await axios.get('/mobile');
            setMobile(res.data);
        };

        getMobile();
    }, []);

    return (
        <Context.Provider
            value={{ currentUser, login, logout, user, logoutGoogle, google, facebook, product, VND, mobile }}
        >
            {children}
        </Context.Provider>
    );
};

export default Context;
