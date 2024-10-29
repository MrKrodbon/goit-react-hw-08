import { useSelector } from "react-redux";
import styles from "./SearchBox.module.css";
import { useId } from "react";

import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const numberFieldId = useId();

  return (
    <div className={styles.searchContainer}>
      <label className={styles.label} htmlFor={numberFieldId}>
        Find contacts by name
      </label>
      <input
        type="text"
        name="filter"
        value={value}
        className={styles.searchField}
        onChange={(e) => changeFilter(e.target.value)}
        id={numberFieldId}
      ></input>
    </div>
  );
};

export default SearchBox;
