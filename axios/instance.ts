// import axios, { AxiosError } from 'axios';

// const instance = axios.create({
//     baseURL: 'http://localhost:3000/api/',
//     withCredentials: true,
//     headers: {
//         'Content-Type': 'application/json',
//         Accept: 'application/json',
//     },
// });

// const maxRetries = 1;
// let currentRetry = 0;

// instance.interceptors.request.use(
//     async (config) => {
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );

// instance.interceptors.response.use(
//     async (response) => {
//         currentRetry = 0;
//         return response;
//     },
//     async (error: AxiosError) => {
//         if (error.response && error.response.status === 401 && error.config) {
//             // console.log('headers ', error.config.headers);
//             // console.log(currentRetry);

//             try {
//                 if (currentRetry >= maxRetries) {
//                     throw new Error();
//                 }

//                 currentRetry += 1;

//                 // const response = await instance.put('auth/refresh');

//                 // const cookie = response.headers['Set-cookie'];
//                 const originalRequest = error.config;

//                 // originalRequest.headers.cookies = cookie;

//                 // requestData = originalRequest;
//                 return instance(originalRequest);
//             } catch (error) {
//                 // console.log(error);
//                 //TODO Error refreshing token
//             }
//         }

//         if (error.response && error.response.status === 404 && error.config) {
//             //TODO
//             // console.log('404');
//         }
//         if (error.response && error.response.status === 400 && error.config) {
//             //TODO
//         }

//         return Promise.reject(error);
//     }
// );

// export default instance;
