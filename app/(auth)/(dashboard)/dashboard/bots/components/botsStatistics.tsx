'use client'
import {
	CategoryScale,
	Chart as ChartJS,
	LineElement,
	LinearScale,
	PointElement,
	Tooltip,
} from 'chart.js'
import { useTheme } from 'next-themes'
import { Line } from 'react-chartjs-2'

// Register ChartJS components using ChartJS.register
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip)
export default function BotsStatisticsChart() {
	const { theme, setTheme } = useTheme()

	return (
		<div className='relative flex-1 rounded-l-md dark:border-gray-800'>
			<Line
				className='border-gray-800 '
				data={{
					labels: [
						'2023-01',
						'2023-02',
						'2023-03',
						'2023-04',
						'2023-05',
						'2023-06',
						'2023-07',
						'2023-01',
						'2023-02',
						'2023-03',
						'2023-04',
						'2023-05',
						'2023-06',
						'2023-07',
						'2023-01',
						'2023-02',
						'2023-03',
					],
					datasets: [
						{
							data: [
								100, 120, 115, 134, 168, 132, 200, 100, 120, 115, 134, 168, 132,
								200100, 120, 115,
							],
							// backgroundColor: 'white',
							borderColor: `${theme === 'dark' ? 'white' : 'black'}`,
						},
					],
				}}
				// width={'100%'}
				height={'100%'}
				options={{ maintainAspectRatio: false }}
			/>
		</div>
	)
}
