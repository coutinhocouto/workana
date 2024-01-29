import { useSelector } from "react-redux";
import { ReducertProps } from "@/types";
import styles from "./Breakfy.module.css";


import Names from "../molecules/Names";
import Form from "../molecules/Form";

const Breakfy = () => {
  const nameElement = useSelector((state: ReducertProps) => state.nameAction);
  const lastNameElement = useSelector(
    (state: ReducertProps) => state.lastNameAction
  );


  return (
    <main className={styles.main}>
      <Names nameElement={nameElement} lastNameElement={lastNameElement} />
      <Form />
    </main>
  );
};

export default Breakfy;
