import type { NextAuthConfig } from 'next-auth'

export const authConfig = {
	pages: {
		signIn: '/login',
	},
	callbacks: {
		authorized({ auth, request: { nextUrl } }) {
			const isLoggedIn = !!auth?.user
			const isOnDashboard = nextUrl.pathname.startsWith('/dashboard')
			if (isOnDashboard) {
				if (isLoggedIn) return true
				return false // Redirect unauthenticated users to login page
			} else if (isLoggedIn) {
				return Response.redirect(new URL('/dashboard', nextUrl))
			}
			return true
		},
		// async jwt({token, account}) {
		//   if (account) {
		//     token.id = account.providerAccountId
		//     token.accessToken = account.access_token
		//   }
		//   return token
		// },
		// async session({session, token}) {
		//   // console.log('token', token);
		//   session.user.userId = token.id;
		//   session.user.accessToken = token.accessToken;
		//   return session
		// },
		// async redirect({url, baseUrl}) {
		//   console.log('url', url);
		//   console.log('baseUrl', baseUrl);

		//   return url.startsWith(baseUrl) ? url : baseUrl + '/protected/client';
		// }
	},
	providers: [],
} satisfies NextAuthConfig
