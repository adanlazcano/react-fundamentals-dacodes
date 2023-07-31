import { memo } from "react";
import styles from "./menu.module.scss";
import { useMenu } from "@/hooks/useMenu";

const Buttons = memo(() => {
  const { links, active, setActive } = useMenu();

  return (
    <>
      <ul>
        {links?.map((item) => (
          <li
            onClick={() => {
              setActive(item.id);
              item.action(item.id, item.title);
            }}
            key={item.id}
            className={`${active === item.id && styles.active}`}
          >
            <button className={styles.buttons}>{item.title}</button>
          </li>
        ))}
      </ul>
    </>
  );
});

export default Buttons;
