import { GalleryBlockIcon, GalleryRowIcon } from 'src/assets/icons';
import styles from './UpperPart.module.scss';

export function UpperPart() {
  return (
    <div className={styles.upperPart}>
      <button className={styles.uploadBtn}>Upload image</button>
      <div className={styles.icons}>
        <GalleryBlockIcon className={styles.icon} />
        <GalleryRowIcon className={styles.icon} />
      </div>
    </div>
  );
}
