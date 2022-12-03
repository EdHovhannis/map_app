import styles from "./maps.module.css";

export const Maps = () => {
  return (
    <div className={styles.maps}>
      <div className={styles.mapheader}>1, 2, 3</div>
      {/* <div className={styles.mapcontent}>{"children"}</div> */}
      <div className={styles.mapfooter}>test-3</div>
    </div>
  );
};
