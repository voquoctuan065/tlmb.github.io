import axios from 'axios';

import { createContext, useEffect, useState } from 'react';

const Context = createContext();

export const ContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')) || null);

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

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(currentUser));
    }, [currentUser]);

    return <Context.Provider value={{ currentUser, login, logout }}>{children}</Context.Provider>;
};

export default Context;
