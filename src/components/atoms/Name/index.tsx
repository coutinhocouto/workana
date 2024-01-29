import { BreakfyProps } from "@/types";
import styles from "./Name.module.css";

const Name = ({ before, element, after }: BreakfyProps) => {
  return (
    <p className={styles.title}>
      {before && <span>{before}</span>}
      {element && <span className={styles.element}>{element}</span>}
      {after && <span>{after}</span>}
    </p>
  );
};
export default Name;
