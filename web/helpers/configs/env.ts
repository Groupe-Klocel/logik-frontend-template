export const IS_DEV = process.env.APP_ENV === 'development';
export const IS_PROD = process.env.APP_ENV === 'production';
export const IS_FAKE = process.env.NEXT_PUBLIC_FAKE_DATA_ON === 'true';
export const IS_SAME_SEED = process.env.NEXT_PUBLIC_SAME_SEED_ON === 'true';
