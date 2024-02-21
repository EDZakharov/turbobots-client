import { Coin } from '@/mongodb/models/coinsModel'
import dbConnect from '@/mongodb/mongodb'
import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
	try {
		await dbConnect()
		const validCoins = await Coin.find({})
		const serializeResponse = validCoins.map((el, index) => ({
			id: index,
			symbol: el.symbol,
		}))
		return NextResponse.json(
			{ ...serializeResponse },
			{
				status: 200,
			}
		)
	} catch (error) {
		return NextResponse.json(
			{ message: 'Error fetching data' },
			{
				status: 500,
			}
		)
	}
}

export async function POST(request: NextRequest) {
	try {
		await dbConnect()
		const { symbol } = await request.json()
		if (!symbol) {
			return NextResponse.json(
				{ message: 'Invalid coin symbol' },
				{
					status: 400,
				}
			)
		}

		const existingCoin = await Coin.findOne({ symbol })

		if (existingCoin) {
			return NextResponse.json(
				{ message: 'Coin already exists!' },
				{
					status: 409,
				}
			)
		}

		await Coin.create({ symbol })
		return NextResponse.json(
			{ message: `Coin ${symbol} successfully added!` },
			{
				status: 201,
			}
		)
	} catch (error) {
		return NextResponse.json(
			{ message: 'Unable to add coin' + error },
			{
				status: 500,
			}
		)
	}
}

export async function DELETE(request: NextRequest) {
	try {
		await dbConnect()
		const { symbol } = await request.json()
		if (!symbol) {
			return NextResponse.json(
				{ message: 'Invalid coin symbol' },
				{
					status: 400,
				}
			)
		}

		const deleteResult = await Coin.findOneAndDelete({ symbol })

		if (!deleteResult) {
			return NextResponse.json(
				{ message: 'Coin not found!' },
				{
					status: 404,
				}
			)
		}

		return NextResponse.json(
			{ ...deleteResult },
			{
				status: 200,
			}
		)
	} catch (error) {
		return NextResponse.json(
			{ message: 'Unable to delete coin' + error },
			{
				status: 500,
			}
		)
	}
}
