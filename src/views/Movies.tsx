import { memo } from "react";
import MoviesComponent from "@/components/movies";

const Movies = memo(() => {
  return <MoviesComponent />;
});

export default Movies;
