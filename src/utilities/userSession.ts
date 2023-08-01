export const isAuthenticated = () =>
  sessionStorage.getItem("guest_session_id") ?? undefined;
