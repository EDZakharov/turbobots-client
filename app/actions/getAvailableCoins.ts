'use server';
import { Coin } from '../lib/mongodb/models/coinsModel';

export async function getAvailableCoins() {
    try {
        const coins = await Coin.find({}, 'symbol');
        return coins.map((coin) => coin.symbol);
    } catch (error) {
        console.error('Failed to fetch available coins:', error);
        return [];
    }
}
