import { CryptoSymbolSVG } from '@/app/ui/symbol'

export default async function Page() {
	return (
		<div className='grid '>
			<div>
				<CryptoSymbolSVG symbol={'BTCUSDT'} width={30} />
			</div>
			<div className=''>
				<CryptoSymbolSVG symbol={'KASUSDT'} width={30} />
			</div>
			<div className=''>
				{' '}
				<CryptoSymbolSVG symbol={'UNIUSDT'} width={30} />
			</div>
			<div className=''>123</div>
		</div>
	)
}
