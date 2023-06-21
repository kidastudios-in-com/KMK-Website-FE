//AUTH BASE
export const BASE_URL = 'https://kmk-kida.kidastudio.in/master';
// export const BASE_URL = 'http://192.168.0.151:8000/master';

//Admin Base
export const ADMIN_URL = 'https://kmk-kida.kidastudio.in/kmkadmin';
// export const ADMIN_URL = 'http://192.168.0.151:8000/kmkadmin';

//Auth URLs
export const LOGIN_URL = `${BASE_URL}/loginAdmin/`;
export const REGISTER_URL = `${BASE_URL}/register_admin/`;
export const VERIFY_TOKEN_URL = `${BASE_URL}/verifyToken`;
export const REGEN_TOKEN_URL = `${BASE_URL}/regenerateRefreshToken/`;

//Payment
export const GET_PRODUCT = `${ADMIN_URL}/subscription/`;
export const PAYMENT_URL = `${BASE_URL}/create-checkout-session/`;

//Profile URLs
export const ADMIN_PROFILE_URL = `${BASE_URL}/userprofile/`;
export const GET_USER = `${BASE_URL}/userprofile/`
export const EDIT_USER = `${BASE_URL}/userprofile/`



//Admin Stock URL
export const GET_ALL_URL = `${ADMIN_URL}/getStockPicksForUser`;
// export const GET_ALL_URL = `${ADMIN_URL}/getAllStocks/`;

//Blogs URL
export const GET_BLOGS = `${ADMIN_URL}/all_blogs/`;
export const GET_SPECIFIC_BLOG = `${ADMIN_URL}/blog/`;

//Track Records
export const TRACK_RECORD_FOR_ALL = `${ADMIN_URL}/getTrackRecordForAll`;
export const TRACK_RECORD_FOR_USER = `${ADMIN_URL}/getTrackRecordForUser`;

//Users URLs
export const REG_USER_EMAIL = `${BASE_URL}/customEmailToken/`;
export const REG_USER_MOBILE = `${BASE_URL}/customMobileToken/`;
export const VERIFY_USER = `${BASE_URL}/auth/token/`;
export const GET_USERS = `${ADMIN_URL}/getAllUsers/`;
export const GET_ADMINS = `${ADMIN_URL}/getAllAdmin/`;

