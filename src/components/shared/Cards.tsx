/* eslint-disable @typescript-eslint/no-explicit-any */
import { memo } from "react";
import styles from "./cards.module.scss";
import placeHolder from "@/assets/img/placeholder.jpg";
import { useSelector } from "react-redux";
import { moviesSelector } from "@/redux/reducers/movies";
import Rating from "@mui/material/Rating";
import Loading from "./Loading";

interface List {
  data: Array<string>;
  loading: boolean;
}
const Cards = memo(({ data, loading }: List) => {
  const { genres } = useSelector(moviesSelector);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className={styles.container}>
      <ul className={styles.movies}>
        {data?.map((item: any) => {
          const arrGenre: any = [];
          item.genre_ids?.map((y: any) => {
            arrGenre.push(genres.find((x: any) => x.id === y)?.["name"]);
          });

          return (
            <li key={item.id} className={styles.card}>
              <img
                width={230}
                height={345}
                src={
                  item.poster_path
                    ? `${import.meta.env.VITE_APP_API_IMG}/${item.poster_path}`
                    : placeHolder
                }
                alt={item.poster_path}
              />
              <div className={styles.cover}>
                <h2>{item.title}</h2>
                <small className={styles.genres}>
                  {item?.release_date?.slice(0, 4)}{" "}
                  {arrGenre?.slice(0, 2).join("/")}
                </small>
                <p className={styles.overview}>{item.overview}</p>
                <div className={styles.rating}>
                  {" "}
                  <Rating
                    name="read-only"
                    readOnly
                    value={item.vote_average >= 5 ? 5 : item.vote_average}
                  />
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
});

export default Cards;
