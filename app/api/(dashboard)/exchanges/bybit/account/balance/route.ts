import { connectToBybit } from '@/app/lib/exchanges';
import { ApiKeys } from '@/mongodb/models/apiKeysModule';
import { TokenModel } from '@/mongodb/models/tokenModel';
import { dbConnect } from '@/mongodb/mongodb';
import { JwtPayload, verify } from 'jsonwebtoken';
import { cookies } from 'next/headers';
import { NextRequest } from 'next/server';
import * as url from 'url';
import {
    showConnectionFailedError,
    showStandardCustomError,
    showUnauthorizedError,
} from '../../../errors';
import { showStandardCustomResponse } from '../../../responses';

interface IGetWalletQuery {
    symbol?: string;
    id?: string;
}

export async function GET(request: NextRequest) {
    try {
        const queryParams = url.parse(request.url, true).query;
        const { symbol }: IGetWalletQuery = queryParams;

        if (!symbol) {
            return showStandardCustomError('Symbol miss');
        }

        const secretRefresh = process.env.APP_DB_SECRET_REFRESH_TOKEN || '';
        const cookiesList = cookies();
        const refreshToken = cookiesList.get('refreshToken')?.value as string;
        const { id } = verify(refreshToken, secretRefresh) as JwtPayload;

        if (!id || id.length !== 24) {
            return showStandardCustomError('Id must be 24 hex string');
        }

        await dbConnect();
        const exists = await TokenModel.findOne({ userId: id, refreshToken });

        if (!exists) {
            return showUnauthorizedError();
        }

        const { apiKey, apiSecretKey } = await ApiKeys.findOne({
            id,
            exchange: 'bybit',
        });

        const bybit = connectToBybit(apiKey, apiSecretKey);

        if (!bybit) {
            return showConnectionFailedError();
        }

        const result = await bybit.getCoinBalance({
            coin: symbol,
            accountType: 'UNIFIED',
        });

        if (result && !result.result.balance) {
            throw new Error(result.retMsg);
        }

        const { walletBalance } = result.result.balance;
        return showStandardCustomResponse(walletBalance);
    } catch (error: any) {
        const message = error?.message as string;

        if (message.includes('invalid')) {
            return showStandardCustomError('Invalid api keys');
        }
        return showStandardCustomError('Unable to get balance');
    }
}
