import styles from "./SearchBox.module.css";
import { useId } from "react";

const SearchBox = ({ value, onFilteredContact }) => {
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
        onChange={(e) => onFilteredContact(e.target.value)}
        id={numberFieldId}
      ></input>
    </div>
  );
};

export default SearchBox;
