export const isAuthenticated = () =>  sessionStorage.getItem("token") ?? undefined;


