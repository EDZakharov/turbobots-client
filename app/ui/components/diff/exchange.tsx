import { exchanges } from '../../../lib/utils/exchanges';
import {
    BinanceSvg,
    BybitSvg,
    QuestionSvg,
} from '../svg-components/svg-components';

interface IExchange {
    name: string;
    className?: string;
    linkStyle?: string;
}

export default function Exchange({ name, className, linkStyle }: IExchange) {
    exchanges;

    if (name === 'bybit') {
        return (
            <div className="size-min">
                <a
                    href={exchanges[name]}
                    className={linkStyle}
                    target="_blank
"
                >
                    <BybitSvg className={className} />
                </a>
            </div>
        );
    }

    if (name === 'binance') {
        return (
            <div className="size-min">
                <a href={exchanges[name]} className={linkStyle} target="_blank">
                    <BinanceSvg className={className} />
                </a>
            </div>
        );
    }

    return (
        <div className="size-min">
            <a href={'#'} className={linkStyle} target="_blank">
                <QuestionSvg className={className} />
            </a>
        </div>
    );
}
