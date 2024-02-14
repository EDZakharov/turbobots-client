export default async function Page() {
	return (
		<main className='w-full'>
			<div className='h-screen w-full p-[20px] '>
				<h1 className='text-4xl'>Welcome to Dashboard</h1>
				<div className='grid grid-cols-2 grid-rows-3'>
					<div className='w-[200px] border h-[100px]'>1</div>
					<div className='w-[200px] border h-[100px]'>2</div>
					<div className='w-[200px] border h-[100px]'>3</div>
					<div className='w-[200px] border h-[100px]'>4</div>
					<div className='w-[200px] border h-[100px]'>5</div>
				</div>
			</div>
		</main>
	)
}
