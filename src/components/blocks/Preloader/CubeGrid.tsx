import styles from "./CubeGrid.module.scss";

const CubeGrid = () => {
  // Create cube grids using loops or JSX structure
  return (
    <div className={styles.container}>
      {/* Render 3 layers (h1Container, h2Container, h3Container) */}
      <div className={styles.h1Container}>
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            className={`${styles.cube} ${
              styles[`h1w${Math.floor(i / 3) + 1}l${(i % 3) + 1}`]
            }`}
          >
            <div className={styles.face + " " + styles.top}></div>
            <div className={styles.face + " " + styles.left}></div>
            <div className={styles.face + " " + styles.right}></div>
          </div>
        ))}
      </div>

      <div className={styles.h2Container}>
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            className={`${styles.cube} ${
              styles[`h2w${Math.floor(i / 3) + 1}l${(i % 3) + 1}`]
            }`}
          >
            <div className={styles.face + " " + styles.top}></div>
            <div className={styles.face + " " + styles.left}></div>
            <div className={styles.face + " " + styles.right}></div>
          </div>
        ))}
      </div>

      <div className={styles.h3Container}>
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            className={`${styles.cube} ${
              styles[`h3w${Math.floor(i / 3) + 1}l${(i % 3) + 1}`]
            }`}
          >
            <div className={styles.face + " " + styles.top}></div>
            <div className={styles.face + " " + styles.left}></div>
            <div className={styles.face + " " + styles.right}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CubeGrid;
