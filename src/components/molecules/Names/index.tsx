import Name from "@/components/atoms/Name";
import { BreakfyProps } from "@/types";
import styles from "./Names.module.css";

const Names = ({
  nameElement,
  lastNameElement,
}: {
  nameElement: BreakfyProps;
  lastNameElement: BreakfyProps;
}) => {
  return (
    <div className={styles.names}>
      <Name
        before={nameElement.before}
        element={nameElement.element}
        after={nameElement.after}
      />
      <Name
        before={lastNameElement.before}
        element={lastNameElement.element}
        after={lastNameElement.after}
      />
    </div>
  );
};

export default Names;
