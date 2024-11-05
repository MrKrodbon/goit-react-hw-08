import { ThreeDots } from "react-loader-spinner";
import styles from "../Loader/Loader.module.css";

export const Loader = () => {
  return (
    <div className={styles.loaderWrapper}>
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="white"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};
