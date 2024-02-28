import axios, { AxiosError } from 'axios'

const axiosInterceptorInstance = axios.create({
	baseURL: 'http://localhost:3000/api/',
	withCredentials: true,
})

const maxRetries = 1
let currentRetry = 0

axiosInterceptorInstance.interceptors.request.use(
	async (config) => {
		return config
	},
	(error) => {
		return Promise.reject(error)
	}
)

axiosInterceptorInstance.interceptors.response.use(
	async (response) => {
		// console.log(response)
		currentRetry = 0
		return response
	},
	async (error: AxiosError) => {
		// console.log(error)
		if (error.response && error.response.status === 401 && error.config) {
			try {
				if (currentRetry >= maxRetries) {
					throw new Error()
				}

				currentRetry += 1

				const response = await axiosInterceptorInstance.put(
					'auth/refresh',
					{},
					{
						headers: {
							accept: 'application/json',
						},
						data: {},
					}
				)
				const cookies = response.headers['set-cookie']
				const originalRequest = error.config

				originalRequest.headers.cookies = cookies

				return axiosInterceptorInstance(originalRequest)
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

		return Promise.reject(error)
	}
)

export default axiosInterceptorInstance
