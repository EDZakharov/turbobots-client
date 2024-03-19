import {
    BitcoinSvg,
    CardanoSvg,
    DogeCoinSvg,
    KaspaSvg,
    LinkSvg,
    LitecoinSvg,
    PolkadotSvg,
    PolygonSvg,
    RavenCoinSvg,
    RippleSvg,
    SolanaSvg,
    SushiSvg,
    TronSvg,
    TrustWalletTokenSvg,
    UniswapSvg,
} from '../svg-components/svg-coins';

interface ICryptoSymbolSVGProps {
    coinName: string;
    size: string;
}

export function Coin({ coinName, size }: ICryptoSymbolSVGProps) {
    if (coinName === 'BTCUSDT') return <BitcoinSvg size={size} />;
    if (coinName === 'KASUSDT') return <KaspaSvg size={size} />;
    if (coinName === 'LTCUSDT') return <LitecoinSvg size={size} />;
    if (coinName === 'DOGEUSDT') return <DogeCoinSvg size={size} />;
    if (coinName === 'UNIUSDT') return <UniswapSvg size={size} />;
    if (coinName === 'DOTUSDT') return <PolkadotSvg size={size} />;
    if (coinName === 'ADAUSDT') return <CardanoSvg size={size} />;
    if (coinName === 'MATICUSDT') return <PolygonSvg size={size} />;
    if (coinName === 'SOLUSDT') return <SolanaSvg size={size} />;
    if (coinName === 'TRXUSDT') return <TronSvg size={size} />;
    if (coinName === 'XRPUSDT') return <RippleSvg size={size} />;
    if (coinName === 'RVNUSDT') return <RavenCoinSvg size={size} />;
    if (coinName === 'TWTUSDT') return <TrustWalletTokenSvg size={size} />;
    if (coinName === 'SUSHIUSDT') return <SushiSvg size={size} />;
    if (coinName === 'LINKUSDT') return <LinkSvg size={size} />;
    return <span className="text-[8px]">{coinName}</span>;
}
