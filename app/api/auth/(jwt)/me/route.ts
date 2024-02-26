import { verify } from 'jsonwebtoken'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
	const cookiesList = cookies()
	const accessToken = cookiesList.get('accessToken')?.value as string
	if (!accessToken) {
		return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
	}

	const secret = process.env.APP_DB_SECRET_ACCESS_TOKEN || ''

	try {
		verify(accessToken, secret)
		return NextResponse.json({ message: 'Auth success!' }, { status: 200 })
	} catch (error) {
		return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
	}
}
