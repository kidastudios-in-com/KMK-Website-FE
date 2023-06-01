//AUTH BASE
export const BASE_URL = 'http://kmk-kida.kidastudio.in/master';
// export const BASE_URL = 'http://192.168.0.151:8000/master';

//Auth URLs
export const LOGIN_URL = `${BASE_URL}/loginAdmin/`;
export const REGISTER_URL = `${BASE_URL}/register_admin/`;
export const VERIFY_TOKEN_URL = `${BASE_URL}/verifyToken`;
export const REGEN_TOKEN_URL = `${BASE_URL}/regenerateRefreshToken/`;

//Profile URLs
export const ADMIN_PROFILE_URL = `${BASE_URL}/userprofile/`;
export const GET_USER = `${BASE_URL}/userprofile/`
export const EDIT_USER = `${BASE_URL}/userprofile/`

//Admin Base
export const ADMIN_URL = 'http://kmk-kida.kidastudio.in/kmkadmin';
// export const ADMIN_URL = 'http://192.168.0.151:8000/kmkadmin';

//Admin Stock URL
export const GET_ALL_URL = `${ADMIN_URL}/getStockPicksForUser`;
// export const GET_ALL_URL = `${ADMIN_URL}/getAllStocks/`;

//Users URLs
export const REG_USER_EMAIL = `${BASE_URL}/customEmailToken/`;
export const REG_USER_MOBILE = `${BASE_URL}/customMobileToken/`;
export const VERIFY_USER = `${BASE_URL}/auth/token/`;
export const GET_USERS = `${ADMIN_URL}/getAllUsers/`;
export const GET_ADMINS = `${ADMIN_URL}/getAllAdmin/`;