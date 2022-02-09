import React, {createContext, useCallback, useState} from 'react';

export const NetworkContext = createContext({});

export const NetworkProvider = ({ children }) => {
    const [count, setCount] = useState(0);
    const networkCallBegin = useCallback(() => {
        setCount(cnt => cnt + 1);
    }, []);

    const networkCallEnd = useCallback(() => {
        console.log('end');
        setCount(cnt => cnt - 1);
    }, []);


    return <NetworkContext.Provider value={{count, networkCallBegin, networkCallEnd}}>{children}</NetworkContext.Provider>;

};

export default NetworkProvider;
