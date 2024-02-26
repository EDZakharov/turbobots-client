// // import GitHub from "next-auth/providers/Credentials"
// import bcrypt from 'bcrypt'
// import NextAuth from 'next-auth'
// import Credentials from 'next-auth/providers/credentials'
// import { z } from 'zod'
// import { authConfig } from './auth.config'
// import { User } from './mongodb/models/usermodel'
// import dbConnect from './mongodb/mongodb'

// export const { auth, signIn, signOut } = NextAuth({
// 	...authConfig,
// 	session: {
// 		strategy: 'jwt',
// 	},
// 	secret: process.env.AUTH_SECRET,
// 	providers: [
// 		Credentials({
// 			async authorize(credentials) {
// 				const parsedCredentials = z
// 					.object({ email: z.string().min(4), password: z.string().min(3) })
// 					.safeParse(credentials)

// 				if (parsedCredentials.success) {
// 					const { email, password } = parsedCredentials.data
// 					await dbConnect()
// 					const user = await User.findOne({ email })
// 					if (!user) return null
// 					console.log(user)
// 					const passwordsMatch = await bcrypt.compare(password, user.password)

// 					if (passwordsMatch) return user
// 				}

// 				console.log('Invalid credentials')
// 				return null
// 			},
// 		}),
// 	],
// })
