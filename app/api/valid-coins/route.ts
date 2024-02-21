import dbConnect from '@/app/mongodb'
import { Coin } from '@/models/coinsModel'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
	try {
		await dbConnect()

		const validCoins = await Coin.find({})
		return new NextResponse(JSON.stringify(validCoins), { status: 200 })
	} catch (error) {
		return new NextResponse('Error fetching data' + error, { status: 500 })
	}
}
