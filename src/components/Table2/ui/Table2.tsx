import { DeleteIcon, EditIcon } from 'src/assets/icons';
import styles from './Table2.module.scss';
import { list } from 'src/components/Table/data/list';

export function Table2() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.table}>
        {list.map((item) => (
          <div className={styles.tableRow} key={item.id}>
            <div className={styles.imageRow}>
              <img src={item.photo} alt={item.name} className={styles.photo} />
            </div>
            <div className={styles.descriptionRow}>
              <div className={styles.descriptionItem}>
                <span>ID:</span> {item.id}
              </div>
              <div className={styles.descriptionItem}>
                <span>Name:</span> {item.name}
              </div>
              <div className={styles.descriptionItem}>
                <span>Style:</span> {item.style}
              </div>
              <div className={styles.descriptionItem}>
                <span>Icons:</span>
                <EditIcon className={styles.icon} />
                <DeleteIcon className={styles.icon} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
