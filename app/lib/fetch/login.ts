interface ILoginProps {
	email: string
	password: string
}

export async function login({ email, password }: ILoginProps) {
	try {
		const response = await fetch('http://localhost:3000/api/auth/login', {
			method: 'POST',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
			// cache: 'no-store',
		})
		if (!response.ok) {
			throw JSON.parse(await response.text())
		}

		return response
	} catch (error) {
		throw error
	}
}
