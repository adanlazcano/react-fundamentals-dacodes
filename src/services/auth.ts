import { SERVICE } from "./config";

export const getToken = async (): Promise<undefined> => {
  return await SERVICE().get(`/authentication/guest_session/new`);
};
