import { memo } from "react";
import styles from "./pages.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { countPage, moviesSelector } from "@/redux/reducers/movies";
import arrowLeft from "@/assets/img/arrow-left.svg";
import arrowRight from "@/assets/img/arrow-right.svg";

const PagesComponent = memo(() => {
  const { pages } = useSelector(moviesSelector);
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <span
        className={`${styles.circle} ${pages?.page === 1 && styles.disabled}`}
        onClick={() => dispatch(countPage(pages?.page - 1))}
      >
        <img src={arrowLeft} alt="left" />
      </span>
      <span>{pages?.page}</span> /<span>{pages?.total_pages}</span>
      <span
        className={`${styles.circle} ${
          pages?.page === pages?.total_pages && styles.disabled
        }`}
        onClick={() => dispatch(countPage(pages?.page + 1))}
      >
        <img src={arrowRight} alt="right" />
      </span>
    </div>
  );
});

PagesComponent.displayName = "PagesComponent";

export default PagesComponent;
