import axios, { AxiosError, AxiosRequestConfig } from 'axios';

const axiosInterceptorInstance = axios.create({
    baseURL: 'http://localhost:3000/api/',
    withCredentials: true,
    headers: {
        Accept: 'application/json',
    },
});

const maxRetries = 1;
let currentRetry = 0;
let requestData: AxiosRequestConfig<any> | null = null;

axiosInterceptorInstance.interceptors.request.use(
    async (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInterceptorInstance.interceptors.response.use(
    async (response) => {
        currentRetry = 0;
        requestData = null;
        return response;
    },
    async (error: AxiosError) => {
        console.log(requestData);

        if (error.response && error.response.status === 401 && error.config) {
            try {
                if (currentRetry >= maxRetries) {
                    throw new Error();
                }

                currentRetry += 1;

                const response = await axiosInterceptorInstance.put(
                    'auth/refresh'
                );
                const cookies = response.headers['Set-cookie'];
                const originalRequest = error.config;

                originalRequest.headers.cookies = cookies;
                requestData = originalRequest;
                return axiosInterceptorInstance(requestData);
            } catch (error) {
                //TODO Error refreshing token
            }
        }

        if (error.response && error.response.status === 404 && error.config) {
            //TODO
        }
        if (error.response && error.response.status === 400 && error.config) {
            //TODO
        }

        return Promise.reject(error);
    }
);

export default axiosInterceptorInstance;
