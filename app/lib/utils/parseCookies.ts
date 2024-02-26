export const parseCookie = (str: string) =>
	str
		.split(';')
		.map((cookie: any) => cookie.split('='))
		.reduce((acc: any, cookie: any) => {
			acc[decodeURIComponent(!cookie[0]?.trim() ? true : cookie[0].trim())] =
				decodeURIComponent(!cookie[1]?.trim() ? true : cookie[1].trim())
			return acc
		}, {})
