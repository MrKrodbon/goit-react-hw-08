import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.homePageWrapper}>
      <p className={styles.mainTitle}>ContactBook</p>
      <p className={styles.secondTitle}>
        Online Contact Book for Easy Contact Management
      </p>
    </div>
  );
};

export default HomePage;
