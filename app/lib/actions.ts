'use server'
// import { signIn } from '@/auth'
import { AuthError } from 'next-auth'
import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'
import { permanentRedirect, redirect } from 'next/navigation'
import { login } from './fetch/login'
import { accessTokenRegExp, refreshTokenRegExp } from './regExp/tokensRegexp'
import { parseCookie } from './utils/parseCookies'
export async function navigateToDashboard() {
	redirect(`/dashboard`)
}
export async function navigateToDashboardPermanent() {
	permanentRedirect(`/dashboard`)
}
export async function navigateToLogin() {
	redirect(`/login`)
}

export async function revalidatePathAction(path: string) {
	revalidatePath(path)
}

export async function authenticate(
	prevState: string | undefined,
	formData: FormData
) {
	try {
		// await signIn('credentials', formData)
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
	cookie.delete('accessToken')
	cookie.delete('refreshToken')
}

export async function register(
	prevState: string | undefined,
	formData: FormData
) {
	const username = formData.get('username')
	const email = formData.get('email')
	const name = formData.get('name')
	const password = formData.get('password')

	try {
		const response = await fetch('http://localhost:3000/api/auth/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username,
				email,
				name,
				password,
			}),
			// cache: 'no-store',
		})

		if (response.ok) {
			return navigateToLogin()
		} else {
			const { message } = await response.json()
			throw new Error(message)
		}
	} catch (error: any) {
		if (error) {
			return error.message
		}
		throw error
	}
}
export async function formLogin(
	prevState: string | undefined,
	formData: FormData
) {
	const email = formData.get('email') as string
	const password = formData.get('password') as string

	try {
		const response = await login({ email, password })
		const cookiesList = cookies()
		const setCookieHeader = response.headers.get('set-cookie')
		const refreshToken = setCookieHeader?.match(
			refreshTokenRegExp
		) as unknown as string
		const accessToken = setCookieHeader?.match(
			accessTokenRegExp
		) as unknown as string

		const parsedAccessCookies = parseCookie(accessToken[0])
		const parsedRefreshCookies = parseCookie(refreshToken[0])

		if (parsedAccessCookies.accessToken && parsedRefreshCookies.refreshToken) {
			cookiesList.delete('accessToken')
			cookiesList.delete('refreshToken')

			cookiesList.set({
				name: 'accessToken',
				value: parsedAccessCookies.accessToken,
				secure: true,
				httpOnly: true,
				path: '/',
				sameSite: 'strict',
				maxAge: parsedAccessCookies['Max-Age'],
			})

			cookiesList.set({
				name: 'refreshToken',
				value: parsedRefreshCookies.refreshToken,
				secure: true,
				httpOnly: true,
				path: '/',
				sameSite: 'strict',
				maxAge: parsedRefreshCookies['Max-Age'],
			})

			return navigateToDashboard()
		}
	} catch (error: any) {
		return error.message
	}
}
