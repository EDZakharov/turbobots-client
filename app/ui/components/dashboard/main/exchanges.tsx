import { getExchangesInfo } from '@/app/actions/getExchanges';
import Exchange from './exchange';

export default async function Exchanges() {
    const availableExchange = [
        { longName: 'bybit', isPublicApi: true },
        { longName: 'bybit', isPublicApi: true },
        { longName: 'bybit', isPublicApi: true },
    ];
    const exchangesData = await getExchangesInfo({
        exchanges: availableExchange,
    });

    return (
        <>
            {exchangesData &&
                exchangesData.map((exchData) => {
                    const tradeVolume24 = exchData?.data.map(
                        (el) => +el.turnover24h
                    );
                    const availablePairs = tradeVolume24?.length;

                    let tradeVolume24Total = tradeVolume24?.reduce(
                        (total, el) => total + el,
                        0
                    );

                    tradeVolume24Total = parseFloat(
                        tradeVolume24Total?.toFixed(0) as string
                    );
                    let formattedNumber =
                        '$ ' + tradeVolume24Total?.toLocaleString('en-US');
                    return (
                        <Exchange
                            key={exchData?.name}
                            name={exchData?.name}
                            formattedNumber={formattedNumber}
                            availablePairs={availablePairs}
                        />
                    );
                })}
        </>
    );
}
