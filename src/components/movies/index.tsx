import { memo } from "react";
import Buttons from "../shared/Menu";
import styles from "./movies.module.scss";
import Cards from "../shared/Cards";
import { useSelector } from "react-redux";
import { moviesSelector } from "@/redux/reducers/movies";
import { useMovies } from "@/hooks/useMovies";
import Pages from "./pages";

const MoviesComponent = memo(() => {
  const { searchMovies } = useSelector(moviesSelector);
  const { movies } = useMovies();
  return (
    <div className={styles.container}>
      <Buttons />
      <h2 className={styles.title}>{searchMovies?.title}</h2>
      <Cards data={movies ?? []} />
      <Pages />
    </div>
  );
});
MoviesComponent.displayName = "MoviesComponent";
export default MoviesComponent;
