import axios from 'axios';

import { createContext, useEffect, useState } from 'react';

const Context = createContext();

export const ContextProvider = ({ children }) => {
    // Login logout logic
    const [user, setUser] = useState(null);
    const [mobile, setMobile] = useState([]);
    const [outstandingMobile, setOutStandingMobile] = useState([]);
    const [tablet, setTablet] = useState([]);
    const [outstandingTablet, setOutStandingTablet] = useState([]);

    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')) || null);

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

    // get All mobile in database
    useEffect(() => {
        const getMobile = async () => {
            const res = await axios.get('/mobile');
            setMobile(res.data);
        };

        getMobile();
    }, []);

    // Get outstandingMobile Mobile
    useEffect(() => {
        const getMostMobile = async () => {
            const res = await axios.get('/mobile/mostmobile');
            setOutStandingMobile(res.data);
        };

        getMostMobile();
    }, []);

    // get All tablet from database
    useEffect(() => {
        const getTablet = async () => {
            const res = await axios.get('/tablet');
            setTablet(res.data);
        };

        getTablet();
    }, []);

    //get Outstanding Tablet
    useEffect(() => {
        const getMostTablet = async () => {
            const res = await axios.get('/tablet/mosttablet');
            setOutStandingTablet(res.data);
        };

        getMostTablet();
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
                mobile,
                outstandingMobile,
                tablet,
                outstandingTablet,
            }}
        >
            {children}
        </Context.Provider>
    );
};

export default Context;
