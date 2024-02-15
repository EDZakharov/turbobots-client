import type { NextRequest } from 'next/server'

export async function GET(req: NextRequest) {
	const response = Response.json({}, { status: 200 })

	// getCookie('test', { res, req })
	// getCookies({ res, req })
	// // deleteCookie('test', { res, req })
	// hasCookie('test', { req, res })

	// // provide cookies fn
	// setCookie('test1', 'value', { cookies })
	// getCookie('test1', { cookies })
	// getCookies({ cookies })
	// // deleteCookie('test1', { cookies })
	// hasCookie('test1', { cookies })
	console.log(response)

	return response
}
