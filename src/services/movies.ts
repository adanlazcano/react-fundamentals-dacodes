import { SERVICE } from "./config";

export const getMovies = async (list:string,page:number): Promise<undefined> => {
  return await SERVICE().get(`/movie/${list}?page=${page}`);
};
export const getGenres = async (): Promise<undefined> => {
  return await SERVICE().get(`/genre/movie/list`);
};