export const accessTokenRegExp =
    /accessToken=([^;]+); Path=[^;]+; Expires=[^;]+; Max-Age=[^;]+; Secure; HttpOnly; SameSite=strict/g;

export const refreshTokenRegExp =
    /refreshToken=([^;]+); Path=[^;]+; Expires=[^;]+; Max-Age=[^;]+; Secure; HttpOnly; SameSite=strict/g;
