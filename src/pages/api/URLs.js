//AUTH BASE
export const BASE_URL = 'https://api-server.kamayakya.in';
// export const BASE_URL = 'http://192.168.0.151:8000/master';

export const ADMIN_URL = `${BASE_URL}/kmkadmin`;
export const MASTER_URL = `${BASE_URL}/master`;
export const USER_URL = `${BASE_URL}/user`;


//Auth URLs
export const LOGIN_URL = `${MASTER_URL}/loginAdmin/`;
export const REGISTER_URL = `${MASTER_URL}/register_admin/`;
export const VERIFY_TOKEN_URL = `${MASTER_URL}/verifyToken`;
export const REGEN_TOKEN_URL = `${MASTER_URL}/regenerateRefreshToken/`;

//Payment
export const GET_PRODUCT = `${ADMIN_URL}/subscription/`;
export const PAYMENT_URL = `${MASTER_URL}/create-checkout-session/` || 'http://localhost:3000'

//Profile URLs
export const USER_PROFILE_URL = `${MASTER_URL}/userprofile/`;
export const GET_USER = `${MASTER_URL}/userprofile/`
export const EDIT_USER = `${MASTER_URL}/userprofile/`



//Admin Stock URL
export const GET_ALL_URL = `${USER_URL}/getStockPicksForUser`;
// export const GET_ALL_URL = `${ADMIN_URL}/getAllStocks/`;

//Blogs URL
export const GET_BLOGS = `${USER_URL}/all_blogs/`;
export const GET_SPECIFIC_BLOG = `${USER_URL}/blog/`;

//Track Records
export const TRACK_RECORD_FOR_ALL = `${USER_URL}/getTrackRecordForAll`;
export const TRACK_RECORD_FOR_USER = `${USER_URL}/getTrackRecordForUser`;

//Users URLs
export const REG_USER_EMAIL = `${MASTER_URL}/customEmailToken/`;
export const REG_USER_MOBILE = `${MASTER_URL}/customMobileToken/`;
export const VERIFY_USER = `${MASTER_URL}/auth/token/`;
export const GET_USERS = `${ADMIN_URL}/getAllUsers/`;
export const GET_ADMINS = `${ADMIN_URL}/getAllAdmin/`;

//Stripe Key
export const  REACT_APP_STRIPE_KEY = process.env.REACT_APP_STRIPE_KEY ||  'pk_test_51NIAaOSI2jzUvqLXPBiVnCIeshgiVn9SeFY3oGrRnYKSLyezrspBuPItJWxuAboUWCGYZ7dCpT66crOe26Fe2L8Y00LoX7UM4Z'

