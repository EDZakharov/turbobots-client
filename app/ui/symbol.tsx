import bitcoinSVG from '@/public/bitcoin.svg'
import coinPlaceholderSVG from '@/public/coin-placeholder.svg'
import kaspaSVG from '@/public/kaspa.svg'
import liteCoinSVG from '@/public/litecoin.svg'
import uniswapSVG from '@/public/uniswap.svg'
import Image from 'next/image'

interface ICryptoSymbolSVGProps {
	symbol: string
	width: number
}

export function CryptoSymbolSVG({
	symbol,
	width,
}: ICryptoSymbolSVGProps): JSX.Element {
	if (symbol === 'KASUSDT')
		return <Image src={kaspaSVG} alt='kaspa-logo' width={width} />
	if (symbol === 'BTCUSDT')
		return <Image src={bitcoinSVG} alt='bitcoin-logo' width={width} />
	if (symbol === 'UNIUSDT')
		return <Image src={uniswapSVG} alt='uniswap-logo' width={width} />
	if (symbol === 'LTCUSDT')
		return <Image src={liteCoinSVG} alt='uniswap-logo' width={width} />

	return <Image src={coinPlaceholderSVG} alt='coin-logo' width={width} />
}
