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
		return (
			<div className='flex justify-center m-1'>
				<Image src={kaspaSVG} alt='kaspa-logo' width={width} />
			</div>
		)

	if (symbol === 'BTCUSDT')
		return (
			<div className='flex justify-center m-1'>
				<Image src={bitcoinSVG} alt='bitcoin-logo' width={width} />
			</div>
		)
	if (symbol === 'UNIUSDT')
		return (
			<div className='flex justify-center m-1'>
				<Image src={uniswapSVG} alt='uniswap-logo' width={width} />
			</div>
		)
	if (symbol === 'LTCUSDT')
		return (
			<div className='flex justify-center m-1'>
				<Image src={liteCoinSVG} alt='uniswap-logo' width={width} />
			</div>
		)

	return (
		<div className='flex justify-center m-1'>
			<Image src={coinPlaceholderSVG} alt='coin-logo' width={width} />
		</div>
	)
}
