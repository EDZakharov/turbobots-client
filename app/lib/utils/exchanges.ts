import { RestClientV5 } from 'bybit-api';

export interface IRestClientOptions {
    key?: string;
    secret?: string;
    testnet?: boolean;
    recv_window?: number;
    enable_time_sync?: boolean;
    baseUrl?: string;
}

export const exchanges = {
    bybit: 'https://bybit.com/',
    binance: 'https://binance.com/',
};

const apiUrls = {
    bybit: 'https://api.bybit.com/',
};

interface IConnectExchange {
    longName: string;
    isPublicApi: boolean;
}

export function connectToBybit(
    key: string,
    secret: string,
    apiUrl: string,
    publicApi: boolean
): RestClientV5 | undefined {
    const restClientOptions: IRestClientOptions = {
        testnet: false,
        key: !publicApi ? key : undefined,
        secret: !publicApi ? secret : undefined,
        enable_time_sync: true,
        recv_window: 5000,
        baseUrl: apiUrl,
    };

    try {
        const restClientV5 = new RestClientV5(restClientOptions);
        if (restClientV5) {
            return new RestClientV5(restClientOptions);
        } else {
            return;
        }
    } catch (error: any) {
        console.log(error);
        return;
    }
}

export function connectToExchange({ longName, isPublicApi }: IConnectExchange) {
    switch (longName) {
        case 'bybit': {
            const key = process.env.BYBIT_KEY || '';
            const secret = process.env.BYBIT_SECRET || '';
            try {
                const restClient = connectToBybit(
                    key,
                    secret,
                    apiUrls.bybit,
                    isPublicApi
                );
                if (!restClient) {
                    throw new Error('Unable to connect with bybit api service');
                }
                return restClient;
            } catch (error) {
                console.log(error);
                return;
            }
        }
    }
}

// export const calculate24Volume;
