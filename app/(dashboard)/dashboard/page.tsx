import Exchange from '@/app/components/exchange'

export default async function Page() {
	return (
		<div className='flex flex-col gap-2'>
			<h2 className='text-[16px]'>Dashboard</h2>
			<div className='flex flex-col gap-9 text-sm'>
				<div className='flex w-full h-[300px]  shadow-main p-5 dark:bg-cards-color'>
					<div className='flex-1 bg-gray-600 rounded-l-md'>CHART</div>
					<div className='flex-initial bg-gray-400'>Exchange balance</div>
					<div className='flex-initial bg-gray-500 rounded-r-md'>
						Profit last 7 days
					</div>
				</div>
				<div className='h-full grid grid-cols-3-custom grid-rows-2 gap-4 shadow-main p-5 dark:bg-cards-back-color'>
					<label className='col-span-1 row-start-1 row-end-2 text-[10px] rounded-md shadow-main text-center dark:bg-cards-color'>
						<span className='relative top-4'>Available exchanges:</span>
						<div className='flex '>
							<div className='flex gap-2 flex-wrap p-8'>
								<Exchange
									name='bybit'
									className='w-[40px] h-[15px] hover:scale-110 transition-all'
								/>
								<Exchange
									name='binance'
									className='w-[40px] h-[15px] hover:scale-110 transition-all'
								/>
							</div>
						</div>
					</label>
				</div>

				<div className=' w-full h-full rounded-sm shadow-main p-5'>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
					reprehenderit, omnis earum natus illum a? Ipsa, saepe in, ea voluptate
					nulla voluptates, a at facilis odit laudantium maxime! Illum dolore
					exercitationem asperiores ratione assumenda tempora praesentium. Sunt
					quo obcaecati quidem? Dolores dolore excepturi neque assumenda, ipsum
					distinctio ut? Nesciunt maiores voluptas, officia laborum assumenda
					harum in ipsa ipsam ullam? Repellat cum quis culpa harum maxime is
					unde fugit vitae dolor eligendi debitis, eum ut voluptatibus, impedit
					cupiditate quidem et magni incidunt temporibus perferendis ab? Et
					numquam debitis neque sit deleniti veritatis a fugiat quidem velit
					suscipit accusamus laboriosam eos hic obcaecati minus natus
					perferendis ullam nostrum, reiciendis quam ex minima accusantium.
					Omnis repudiandae inventore quam possimus dicta iure alias, nulla
					dolorem? Odio voluptatem, nihil, architecto atque iure quis
					necessitatibus ipsa corrupti molestiae amet odit delectus
					perspiciatis? Aspernatur veniam libero earum id suscipit at fugit
					sunt, cumque quae illo fugiat mollitia doloremque, autem voluptate.
					Sint veritatis commodi officia sed, tempore quisquam illo beatae
					nesciunt quas tenetur, nisi magnam architecto cupiditate. Corporis,
					natus distinctio vel nisi voluptatum quasi sequi error eveniet.
					Doloremque quo vero non voluptate quis ipsam, ab corrupti aperiam
					perspiciatis dicta assumenda praesentium reiciendis eos numquam beatae
				</div>
				<div className=' w-full h-full rounded-sm shadow-main p-5'>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
					reprehenderit, omnis earum natus illum a? Ipsa, saepe in, ea voluptate
					nulla voluptates, a at facilis odit laudantium maxime! Illum dolore
					exercitationem asperiores ratione assumenda tempora praesentium. Sunt
					quo obcaecati quidem? Dolores dolore excepturi neque assumenda, ipsum
					distinctio ut? Nesciunt maiores voluptas, officia laborum assumenda
					harum in ipsa ipsam ullam? Repellat cum quis culpa harum maxime is
					unde fugit vitae dolor eligendi debitis, eum ut voluptatibus, impedit
					cupiditate quidem et magni incidunt temporibus perferendis ab? Et
					numquam debitis neque sit deleniti veritatis a fugiat quidem velit
					suscipit accusamus laboriosam eos hic obcaecati minus natusitate
					quidem et magni incidunt temporibus perferendis ab? Et numquam debitis
					neque sit deleniti veritatis a fugiat quidem velit suscipit accusamus
					laboriosam eos hic obcaecati minus natus perferendis ullam nostrum,
					reiciendis quam ex minima accusantium. Omnis repudiandae inventore
					quam possimus dicta iure aliaitate quidem et magni incidunt temporibus
					perferendis ab? Et numquam debitis neque sit deleniti veritatis a
					fugiat quidem velit suscipit accusamus laboriosam eos hic obcaecati
					minus natus perferendis ullam nostrum, reiciendis quam ex minima
					accusantium. Omnis repudiandae inventore quam possimus dicta iure
					aliaitate quidem et magni incidunt temporibus perferendis ab? Et
					numquam debitis neque sit deleniti veritatis a fugiat quidem velit
					suscipit accusamus laboriosam eos hic obcaecati minus natus
					perferendis ullam nostrum, reiciendis quam ex minima accusantium.
					Omnis repudiandae inventore quam possimus dicta iure aliaitate quidem
					et magni incidunt temporibus perferendis ab? Et numquam debitis neque
					sit deleniti veritatis a fugiat quidem velit suscipit accusamus
					laboriosam eos hic obcaecati minus natus perferendis ullam nostrum,
					reiciendis quam ex minima accusantium. Omnis repudiandae inventore
					quam possimus dicta iure aliaitate quidem et magni incidunt temporibus
					perferendis ab? Et numquam debitis neque sit deleniti veritatis a
					fugiat quidem velit suscipit accusamus laboriosam eos hic obcaecati
					minus natus perferendis ullam nostrum, reiciendis quam ex minima
					accusantium. Omnis repudiandae inventore quam possimus dicta iure alia
					perferendis ullam nostrum, reiciendis quam ex minima accusantium.
					Omnis repudiandae inventore quam possimus dicta iure alias, nulla
					dolorem? Odio voluptatem, nihil, architecto atque iure quis
					necessitatibus ipsa corrupti molestiae amet odit delectus
					perspiciatis? Aspernatur veniam libero earum id suscipit at fugit
					sunt, cumque quae illo fugiat mollitia doloremque, autem voluptate.
					Sint veritatis commodi officia sed, tempore quisquam illo beatae
					nesciunt quas tenetur, nisi magnam architecto cupiditate. Corporis,
					natus distinctio vel nisi voluptatum quasi sequi error eveniet.
					Doloremque quo vero non voluptate quis ipsam, ab corrupti aperiam
					perspiciatis dicta assumenda praesentium reiciendis eos numquam beatae
				</div>
			</div>
		</div>
	)
}
