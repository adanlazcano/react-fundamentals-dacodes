/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { moviesSelector, setGenres, setPages } from "@/redux/reducers/movies";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as services from "@/services/movies";

export const useMovies = () => {
  const [movies, setMovies] = useState<Array<string>>([]);
  const { pages, searchMovies } = useSelector(moviesSelector);
  const dispatch = useDispatch();

  const fetchGenres = async () => {
    const { data }: any = await services.getGenres();

    dispatch(setGenres(data?.genres));
  };

  const fetchMovies = async (
    list: string,
    page: number
  ): Promise<undefined> => {
    const { data }: any = await services.getMovies(list, page);

    setMovies(data?.results);
    dispatch(
      setPages({
        page: data?.page,
        total_pages: data?.total_pages,
        total_results: data?.total_results,
      })
    );
  };

  useEffect(() => {
    fetchMovies(searchMovies?.id, pages?.page);
  }, [pages?.page, searchMovies?.id]);
  useEffect(() => {
    fetchGenres();
  }, []);

  return {
    movies,
  };
};
