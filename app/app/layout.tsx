import ThemeChanger from '@/app/components/themeChanger'
import SideBar from '@/app/ui/sideBar'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'App',
}

export default function layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<header
				className={`container sticky h-[60px] top-[-15px] 2xl:w-[60%]
    bg-stone-100/90 rounded-b-xl flex items-center shadow-brl-md 
    dark:bg-slate-700/90 
     text-gray-600 dark:text-gray-200 backdrop-blur-sm `}
			>
				<div
					className={`sticky top-0 h-[20px] w-full flex items-center justify-between m-5`}
				>
					<div className='text-xs'>
						{/* <Image src={headerLogo} alt='logo' width={100} height={100} /> */}
						<span>{`${metadata.title}`}</span>
					</div>
					<div className='flex items-center justify-between text-xs'>
						<span className='mr-5'>Sign In</span>
						<span className='mr-5'>Sin Out</span>
						<ThemeChanger />
					</div>
				</div>
			</header>
			<main className='container 2xl:w-[59%] overflow-y-scroll overscroll-none scrollbar-none text-xs shadow-trl-md border-b border-slate-200'>
				{children}
			</main>
			<footer className='container 2xl:w-[59%] shadow-brl-md text-xs p-20'>
				<strong>Footer</strong>
				<div>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio dicta
					eveniet ratione, impedit esse eos dolorum ipsam architecto dolor ex?
					Magni eum deserunt neque odio itaque veritatis, sint alias, libero eos
					voluptatum molestias recusandae ipsam commodi vero laborum rerum,
					voluptatibus temporibus incidunt aspernatur quos ipsa? Vero officia
					rem sint, quam necessitatibus sequi autem. In cumque quis quos ab
					ipsam. Consectetur quisquam in laudantium iste! Voluptates aliquid
					praesentium quisquam distinctio quis laborum ad rem tenetur facere
					corrupti! Adipisci nobis impedit velit a reiciendis eum alias
					dignissimos ducimus nam praesentium consequuntur ipsa recusandae, cum
					at quos itaque, veniam, repudiandae natus accusantium. Repellat fugit
					eaque tempora voluptatibus ea dolorum repudiandae, porro vel culpa
					autem beatae optio facere. Molestias optio sapiente quibusdam sequi,
					vitae cupiditate. Reiciendis nam reprehenderit, harum perspiciatis
					facere ad recusandae voluptatem at, corporis molestiae possimus
					praesentium, tempore placeat velit repellendus odio cum distinctio
					unde? Alias quo a voluptatum quos placeat nam labore nemo nobis odio,
					et, atque reiciendis animi quaerat officiis eaque aspernatur id,
					assumenda quam quibusdam accusamus reprehenderit hic velit
					perspiciatis sint. Debitis at adipisci neque, accusamus nobis
					voluptates. Nobis minus illum incidunt laborum sit deserunt quidem,
					veniam tempora beatae vero deleniti maxime totam blanditiis quia
					labore. Reiciendis deserunt magnam, necessitatibus, aperiam accusamus
					sunt dolores eligendi dicta ratione optio recusandae veritatis? Omnis
					soluta reprehenderit nobis eveniet, cupiditate perspiciatis
					accusantium repudiandae atque nulla perferendis quae culpa qui
					consequatur quibusdam corporis placeat unde optio exercitationem!
					Pariatur, cumque! Eveniet in aperiam enim, dicta culpa, cumque
					deleniti ex beatae atque non exercitationem eligendi. Perferendis quod
					repellat ea quas fugiat distinctio similique aspernatur dicta
					cupiditate sunt quasi, voluptates officiis cumque sed veritatis
					dolorem? Doloribus recusandae, quasi quis quam similique repudiandae
					voluptatem corporis explicabo delectus provident dicta accusamus
					minima vel ut inventore, pariatur ullam expedita iste sequi ratione?
					Repellat fugit est ab id sunt itaque doloribus architecto beatae,
					doloremque dolorum eius illum, qui officiis a blanditiis molestiae
					tempora quos maiores maxime, dolore placeat aliquid eaque? Praesentium
					ipsum ut quidem eligendi illum perspiciatis sunt! Officia ab, sequi
					quos, voluptatum quas quae mollitia odio impedit deserunt, expedita
					temporibus! Molestiae perspiciatis aliquid quis sint, consequatur
					provident, aperiam, animi natus quae eaque eos illo quaerat porro
					totam vel hic. Id atque sapiente quibusdam. Quasi harum quaerat
					repudiandae tempore quia unde voluptas eos assumenda quo ullam
					aspernatur mollitia, iure, recusandae corrupti eveniet ut illum
					tempora veniam nostrum fuga omnis delectus. Fugit, illum fugiat sunt
					sequi hic aspernatur cumque maiores voluptate quidem dolor porro
					facere cum expedita aut cupiditate reiciendis repellendus atque, amet
					reprehenderit ducimus. Consequuntur eveniet sequi tempore illo, quod
					excepturi perspiciatis cumque sint. Ipsa dolore repudiandae fuga,
					sequi quod rem deserunt dolorum modi illo debitis repellat? Optio,
					fugiat dignissimos. Illum inventore eligendi hic nihil in modi.
					Dolorem aspernatur ullam dolores modi nemo at eveniet molestias vero
					praesentium necessitatibus. Dolorem sed nostrum ipsam earum
					necessitatibus corrupti minus hic, ipsa unde asperiores voluptate
					fugiat eligendi sit magni voluptatem temporibus quisquam tempora
					adipisci deserunt alias. Quaerat illum voluptatem minus adipisci,
					maxime numquam. Possimus veniam ipsam officia eveniet placeat error
					aspernatur cupiditate perspiciatis quasi, quia qui nemo consectetur
					saepe unde atque rerum animi dolor nihil iusto illo magnam quo aut
					voluptas doloremque! Iusto eos dolores molestiae voluptas facere ipsa
					velit quod, eius, ullam vitae laudantium dolore? Quos dolores fugiat
					voluptas vitae recusandae expedita aut animi nostrum totam doloremque
					aliquam sapiente, minima reprehenderit sint facilis? Illo sint
					repellat maiores est in explicabo laudantium quisquam mollitia,
					voluptate ex veniam eius cum fuga harum quaerat officiis vel nulla.
					Commodi ea expedita maxime iure ratione maiores, qui sit error
					deserunt, praesentium quis eos eius quae! Nisi doloribus, quis nam
					assumenda dicta impedit doloremque fugiat hic, dolore voluptas
					incidunt omnis tempora accusamus amet quisquam officiis. Nisi velit
					iusto tempora expedita, molestias quo. Cumque pariatur a voluptatem
					animi voluptates maiores sunt et expedita optio esse voluptate, quo
					minus fugit provident inventore dignissimos aliquid, amet laborum
					quidem ad quasi officia. Cumque nisi at laudantium ipsam totam cum
					sit, eligendi ipsum fuga velit explicabo quos omnis voluptatibus
					ratione neque molestias dolore, perspiciatis necessitatibus ab
					temporibus sunt veniam aliquam? Voluptate velit quas dolorem fuga?
					Iusto distinctio, natus cum nam, ipsum excepturi veritatis dolor
					beatae eaque tempore reiciendis praesentium asperiores! Magni aliquid,
					est recusandae iste minus eum ipsum, velit aperiam obcaecati fuga
					facere beatae. Accusamus aspernatur repellendus ipsam officiis, ullam
					debitis fugit magni! Sequi veniam impedit aperiam hic magnam assumenda
					architecto fugiat reprehenderit ea minus. Quo laborum temporibus,
					dicta recusandae nihil sit illum magnam eum odio commodi nisi
					provident consequatur perferendis? Neque natus quia quod mollitia
					reprehenderit cumque cupiditate beatae? Repellendus sit aperiam
					reprehenderit assumenda eveniet iure iusto sint ipsum delectus labore
					ab dolorem cumque modi non voluptate harum, repellat id explicabo
					praesentium animi vel sunt vero ut. Odio dolorem assumenda impedit
					odit cupiditate, quaerat magnam officiis illum? Cumque eligendi quos
					nobis nisi, autem sapiente sint quo? Iste fuga laborum nam at totam in
					cum aperiam nobis non eveniet nostrum omnis obcaecati recusandae
					accusantium aspernatur molestiae commodi sequi, possimus eaque.
					Explicabo dicta a laborum ipsam optio consequatur beatae, sed
					blanditiis itaque earum repudiandae, incidunt ea tempore in. Et
					corrupti quo voluptate, odit ducimus nihil quisquam quaerat, fuga
					excepturi quidem omnis non, praesentium incidunt officiis hic odio
					harum eius debitis exercitationem atque vitae aspernatur aliquid
					facere voluptatum. Dolore pariatur doloremque magnam sed veritatis
					consectetur commodi ipsum est debitis molestiae, quibusdam aspernatur
					facilis non, rem optio ut porro labore accusamus fugiat laudantium
					architecto dolor dignissimos magni. Voluptates impedit tempore vel
					autem culpa nihil sint aut soluta eos corporis excepturi quasi
					maiores, sed aspernatur. Error, voluptatum. Aspernatur expedita,
					necessitatibus ipsum molestias repellendus nisi eveniet assumenda
					architecto maiores iusto ipsa ut veniam cum. Quod officia ratione
					reprehenderit possimus, architecto ipsum vitae! Eius cum sit debitis,
					quia voluptas nihil minima facere, alias, reiciendis quos assumenda
					asperiores dignissimos animi quam! Beatae odit amet incidunt!
					Laudantium iure mollitia vero. Aperiam voluptatem praesentium cumque,
					dolore dignissimos illo enim sint. Molestiae nulla non libero iusto
					voluptatum laborum aut ipsum, officiis, rerum reiciendis quisquam,
					voluptatem totam aspernatur nemo? Architecto voluptate commodi
					repellendus velit at excepturi nam accusamus, vitae in quibusdam optio
					dignissimos! Quia, numquam?
				</div>
			</footer>
			<SideBar />
		</>
	)
}
