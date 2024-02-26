export const accessTokenRegExp =
	/accessToken=([^;]+); Path=[^;]+; Expires=[^;]+; Max-Age=[^;]+; Secure; HttpOnly; SameSite=strict/g

export const refreshTokenRegExp =
	/refreshToken=([^;]+); Path=[^;]+; Expires=[^;]+; Max-Age=[^;]+; Secure; HttpOnly; SameSite=strict/g

/**
 * @deprecated
 */
export const accessTokenRegExpOld =
	/accessToken=([^;]+); Path=([^;]+); Expires=([a-zA-Z0-9:, ]+); Max-Age=([0-9]+); Secure; HttpOnly; SameSite=strict, /g

/**
 * @deprecated
 */
export const refreshTokenRegExpOld =
	/refreshToken=([a-zA-Z0-9-._]+); Path=\/; Expires=([a-zA-Z0-9:, ]+); Max-Age=([0-9]+); Secure; HttpOnly; SameSite=strict/g
