import styles from "./Blobs.module.scss";

export default function Blobs({
  classVariable,
  type,
}: {
  classVariable: string;
  type: string;
}) {
  const blobType = type ? type : "v1";
  return (
    <div
      className={`${styles.blob} ${styles[blobType]} ${classVariable}`}
    ></div>
  );
}
