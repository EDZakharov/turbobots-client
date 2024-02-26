import { cookies } from 'next/headers'
import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
	if (request.url.includes('/auth')) {
		console.log('@api')
		return NextResponse.next()
	}

	const currentPath = request.nextUrl.pathname
	const cookieList = cookies()

	const accessToken = cookieList.get('accessToken')?.value
	const refreshToken = cookieList.get('refreshToken')?.value

	if (
		!currentPath.includes('/login') &&
		!currentPath.includes('/register') &&
		!accessToken &&
		!refreshToken
	) {
		return NextResponse.redirect(new URL('/login', request.url))
	}
}

export const config = {
	matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}
