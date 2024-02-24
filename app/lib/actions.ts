'use server'
import { signIn } from '@/auth'
import { AuthError } from 'next-auth'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
export async function navigateToDashboard() {
	redirect(`/dashboard`)
}
export async function navigateToLogin() {
	redirect(`/login`)
}

export async function authenticate(
	prevState: string | undefined,
	formData: FormData
) {
	try {
		await signIn('credentials', formData)
	} catch (error) {
		if (error instanceof AuthError) {
			switch (error.type) {
				case 'CredentialsSignin':
					return 'Invalid credentials.'
				default:
					return 'Something went wrong.'
			}
		}
		throw error
	}
}

export async function clearCookies() {
	const cookie = cookies()
	cookie.delete('authjs.session-token')
}
