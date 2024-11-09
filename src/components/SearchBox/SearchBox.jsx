import { useDispatch } from "react-redux";
import styles from "./SearchBox.module.css";
import { useId } from "react";

import { changeFilter } from "../../redux/filter/slice";

const SearchBox = () => {
  const numberFieldId = useId();
  const dispatch = useDispatch();

  const handleFilter = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={styles.searchContainer}>
      <label className={styles.label} htmlFor={numberFieldId}>
        Find contacts by name
      </label>
      <input
        type="text"
        name="filter"
        className={styles.searchField}
        onChange={handleFilter}
        id={numberFieldId}
      ></input>
    </div>
  );
};

export default SearchBox;
