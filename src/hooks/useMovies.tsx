/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { moviesSelector, setGenres, setPages } from "@/redux/reducers/movies";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as services from "@/services/movies";

type MovieFunctions = {
  movies: Array<string>;
  loading: boolean;
};

export const useMovies = (): MovieFunctions => {
  const [movies, setMovies] = useState<Array<string>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { pages, searchMovies } = useSelector(moviesSelector);
  const dispatch = useDispatch();

  const fetchGenres = async () => {
    try {
      const { data }: any = await services.getGenres();

      dispatch(setGenres(data?.genres));
    } catch (error) {
      console.log(error);
    }
  };

  const fetchMovies = async (
    list: string,
    page: number
  ): Promise<undefined> => {
    try {
      setLoading(true);
      const { data }: any = await services.getMovies(list, page);

      setMovies(data?.results);
      dispatch(
        setPages({
          page: data?.page,
          total_pages: data?.total_pages,
          total_results: data?.total_results,
        })
      );
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(searchMovies?.id, pages?.page);
  }, [pages?.page, searchMovies?.id]);
  useEffect(() => {
    fetchGenres();
  }, []);

  return {
    movies,
    loading,
  };
};
