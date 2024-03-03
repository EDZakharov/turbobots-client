import { NextResponse } from 'next/server'

export async function showStandardCustomError(message: string) {
	return NextResponse.json(
		{ message: message },
		{
			headers: {
				'Content-Type': `application/json`,
			},
			status: 400,
		}
	)
}

export async function showStandardNotFoundError(message: string) {
	return NextResponse.json(
		{ message: message },
		{
			headers: {
				'Content-Type': `application/json`,
			},
			status: 404,
		}
	)
}

export async function showUnauthorizedError() {
	return NextResponse.json(
		{ message: 'Unauthorized' },
		{
			headers: {
				'Content-Type': `application/json`,
			},
			status: 401,
		}
	)
}

export async function showConnectionFailedError() {
	return NextResponse.json(
		{ message: 'Connection failed' },
		{
			headers: {
				'Content-Type': `application/json`,
			},
			status: 506,
		}
	)
}
