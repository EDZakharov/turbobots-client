import { NextRequest } from 'next/server'
// import { authConfig } from './auth.config'

// export default NextAuth(authConfig).auth

export function middleware(request: NextRequest) {
	// console.log(request.url)
	const tokenA = request.cookies.get('accessToken')?.value
	// console.log(tokenA)
}

export const config = {
	// https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
	// matcher: ['/dashboard/'],
	matcher: ['/'],
}
