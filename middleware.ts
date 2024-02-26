import { cookies } from 'next/headers'
import { NextResponse, type NextRequest } from 'next/server'
// import { authConfig } from './auth.config'

// export default NextAuth(authConfig).auth

export function middleware(request: NextRequest) {
	// console.log(request.url)

	if (request.url.includes('/api')) {
		console.log('@api')
		return NextResponse.next()
	}

	const cookieList = cookies()
	const accessToken = cookieList.get('accessToken')?.value
	const refreshToken = cookieList.get('refreshToken')?.value

	// console.log(!!accessToken && !!refreshToken)
	console.log(accessToken)
	console.log(refreshToken)

	if (!request.url.includes('/login') && !accessToken && !refreshToken) {
		return NextResponse.redirect(new URL('/login', request.url))
	}

	// console.log(tokenA)
}

export const config = {
	// https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
	// matcher: ['/dashboard/'],
	matcher: ['/login', '/dashboard'],
}
