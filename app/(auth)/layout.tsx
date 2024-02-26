'use client'

import axiosInterceptorInstance from '@/axios/instance'
import { AxiosError } from 'axios'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { clearCookies } from '../lib/actions'

export default function WithAuthLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const [isSuccess, setIsSuccess] = useState<boolean>(false)
	const router = useRouter()

	useEffect(() => {
		;(async () => {
			const { user, error } = await isAuth()

			if (error) {
				await clearCookies()
				return
			}

			setIsSuccess(true)
		})()
	}, [router])

	// if (!isSuccess) {
	// 	return <>Loading...</>
	// }

	return <>{children}</>
}

async function isAuth() {
	try {
		const data = await axiosInterceptorInstance.get('auth/me', {
			withCredentials: true,
			headers: {
				accept: 'application/json',
			},
			data: {},
		})

		return {
			user: data,
			error: null,
		}
	} catch (e) {
		const error = e as AxiosError
		return {
			user: null,
			error,
		}
	}
}
