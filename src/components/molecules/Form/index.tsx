import { useState } from "react";
import { useDispatch } from "react-redux";

import { doubleElements, singleElements } from "@/constants/elements";
import { findElements } from "@/helpers/FindElements";
import { createName } from "@/slice/name";
import { createLastName } from "@/slice/lastName";

import styles from "./Form.module.css";

const Form = () => {
  const [name, setName] = useState("");
  const [lname, setLname] = useState("");

  const dispatch = useDispatch();

  const breakfy = () => {
    if (findElements(name, doubleElements)) {
      dispatch(createName(findElements(name, doubleElements)));
    } else if (findElements(name, singleElements)) {
      dispatch(createName(findElements(name, singleElements)));
    } else {
      dispatch(createName({ after: name }));
    }

    if (findElements(lname, doubleElements)) {
      dispatch(createLastName(findElements(lname, doubleElements)));
    } else if (findElements(lname, singleElements)) {
      dispatch(createLastName(findElements(lname, singleElements)));
    } else {
      dispatch(createLastName({ after: lname }));
    }
  };

  return (
    <form>
      <div className={styles.row}>
        <div className={styles.col}>
          <label>First Name</label>
          <input
            type="text"
            placeholder="Breaking"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={styles.col}>
          <label>Last Name</label>
          <input
            type="text"
            placeholder="Bad"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
          />
        </div>
      </div>
      <div>
        <button type="button" onClick={breakfy} className={styles.btn}>
          Breakify
        </button>
      </div>
    </form>
  );
};

export default Form;
