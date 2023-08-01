export const IS_VALID_EMAIL = (email: string):boolean =>
/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
