import { memo } from "react";
import styles from "./loading.module.scss";

const Loading = memo(() => {
  return (
    <div className={styles.container}>
      <div className={styles["lds-ellipsis"]}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
});

export default Loading;
