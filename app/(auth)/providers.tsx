'use client'

import axiosInterceptorInstance from '@/axios/instance'
import { AxiosError } from 'axios'
import { createContext, useContext, useEffect, useState } from 'react'
import { clearCookies } from '../lib/actions'

// Create context
const AuthContext = createContext({
	isSuccess: false,
	user: undefined,
})

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [user, setStateUser] = useState<null | any>(null)

	const [isSuccess, setIsSuccess] = useState<boolean>(false)
	// const router = useRouter()

	useEffect(() => {
		;(async () => {
			const { userData, error } = await getMe()

			if (error) {
				await clearCookies()
				return
			}
			setStateUser(userData.data)
			setIsSuccess(true)
		})()
	}, [isSuccess])

	// const login = (userData: any) => {
	// 	// Logout logic (API request ...)
	// 	setUser(userData)
	// }

	// const logout = () => {
	// 	// Logout logic
	// 	setUser(null)
	// }

	return (
		<AuthContext.Provider value={{ isSuccess, user }}>
			{children}
		</AuthContext.Provider>
	)
}

async function getMe() {
	try {
		const data = await axiosInterceptorInstance.get('auth/me', {
			withCredentials: true,
			headers: {
				accept: 'application/json',
			},
			data: {},
		})

		return {
			userData: data,
			error: null,
		}
	} catch (e) {
		const error = e as AxiosError
		return {
			userData: null,
			error,
		}
	}
}

// custom hook fot AuthContext
export const useAuth = () => {
	console.log('checkauth')

	return useContext(AuthContext)
}
