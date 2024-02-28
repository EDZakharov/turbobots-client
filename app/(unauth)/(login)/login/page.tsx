'use client'

import { useAuth } from '@/app/(auth)/providers'
import { navigateToDashboardPermanent } from '@/app/lib/actions'
import { useEffect, useState } from 'react'
import LoginForm from '../components/login-form'

export default function LoginPage() {
	const { user } = useAuth()
	const [isUser, setUser] = useState<boolean>(false)
	useEffect(() => {
		if (user) {
			setUser(true)
		}

		return () => {
			if (isUser) {
				navigateToDashboardPermanent()
			}
		}
	})

	return (
		<main className='flex items-center justify-center md:h-screen w-screen'>
			<div className='relative mx-auto flex max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32 bg-gray-200 rounded-xl'>
				<div className='flex h-20 w-full items-end rounded-lg bg-gray-500 p-3 md:h-36 shadow-main'>
					<div className='w-32 text-white md:w-36'>Logo</div>
				</div>
				<div className='shadow-main rounded-lg'>
					<LoginForm />
				</div>
			</div>
		</main>
	)
}
