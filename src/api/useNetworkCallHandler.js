import {useContext, useEffect} from "react";
import {NetworkContext} from "./NetworkProvider";
import ajax from "./ajax";

const useNetworkCallHandler = () => {
    const {count, networkCallBegin, networkCallEnd} = useContext(NetworkContext);

    useEffect(() => {
        const onRequest = (config) => {
            networkCallBegin();
            return config;
        };

        const onResponse = (response) => {
            networkCallEnd();
            return response;
        };

        const onError = (error) => {
            networkCallEnd();
            return Promise.reject(error);
        };
        const requestInterceptor = ajax.interceptors.request.use(onRequest, onError);
        const responseInterceptor = ajax.interceptors.response.use(onResponse, onError);

        return () => {
            ajax.interceptors.request.eject(requestInterceptor);
            ajax.interceptors.response.eject(responseInterceptor);
        };
    });

    return {
        networkState: {count},
    };
};

export default useNetworkCallHandler;