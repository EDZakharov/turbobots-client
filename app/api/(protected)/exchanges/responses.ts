import { NextResponse } from 'next/server'

export async function showStandardCustomResponse(message: string) {
	return NextResponse.json(
		{ message },
		{
			headers: {
				'Content-Type': `application/json`,
			},
			status: 200,
		}
	)
}

export async function showCreatedCustomResponse(message: string) {
	return NextResponse.json(
		{ message },
		{
			headers: {
				'Content-Type': `application/json`,
			},
			status: 201,
		}
	)
}
