import { exchanges } from '../../../lib/utils/exchanges';
import {
    BinanceSvg,
    BybitSvg,
    QuestionSvg,
} from '../svg-components/svg-components';

interface IExchange {
    name?: string;
    size?: string;
    width?: string;
    height?: string;
    linkStyle?: string;
}

export default function ExchangeLogo({
    name,
    size,
    linkStyle,
    width,
    height,
}: IExchange) {
    exchanges;

    if (name === 'bybit') {
        return (
            <div className="w-min h-min">
                <BybitSvg width={width} height={height} />
            </div>
        );
    }

    if (name === 'binance') {
        return (
            <div className="size-min">
                <a href={exchanges[name]} className={linkStyle} target="_blank">
                    <BinanceSvg size={size} />
                </a>
            </div>
        );
    }

    return (
        <div className="size-min">
            <a href={'#'} className={linkStyle} target="_blank">
                <QuestionSvg size={size} />
            </a>
        </div>
    );
}
