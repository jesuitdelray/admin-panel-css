import { DownArrowIcon } from 'src/assets/icons';
import styles from './Status.module.scss';

export function Status(isPublished: any) {
  return (
    <div>
      <td className={styles.status}>
        {isPublished ? (
          <p className={styles.statusIcons}>
            <div className={styles.statusGreen} />
            Published
            <DownArrowIcon className={styles.publishedIcon} />
          </p>
        ) : (
          <p className={styles.statusIcons}>
            <div className={styles.statusRed} />
            Unpublished
            <DownArrowIcon className={styles.unpublishedIcon} />
          </p>
        )}
      </td>
    </div>
  );
}
