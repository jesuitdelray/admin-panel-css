import styles from './Table.module.scss';
import { DeleteIcon } from 'src/assets/icons/delete';
import { EditIcon } from 'src/assets/icons/edit';
import { list } from '../data/list';
import { DownArrowIcon } from 'src/assets/icons';

export function Table() {
  return (
    <table className={styles.wrapper}>
      <tbody className={styles.table}>
        {list.map((item) => (
          <tr key={item.id} className={styles.displayedContent}>
            <td className={styles.checkboxContainer}>
              <td>{item.id}</td>
              <input type="checkbox" className={styles.checkboxIcon} />
              <DownArrowIcon className={styles.checkboxDropdownIcon} />
            </td>
            <td>
              <img src={item.photo} alt={item.name} className={styles.photo} />
            </td>
            <td className={styles.statusString}>
              {item.status ? (
                <td className={styles.statusPublished}>
                  <div className={styles.publishedIcon} />
                  <td>Published</td>
                </td>
              ) : (
                <td className={styles.statusUnpublished}>
                  <div className={styles.unpublishedIcon} />
                  <td>Unpublished</td>
                </td>
              )}
            </td>
            <td className={styles.nameString}>Style : {item.style}</td>
            <td>Color : {item.color}</td>
            <td className={styles.styleString}>Artist : {item.name}</td>
            <td>
              <EditIcon className={styles.icon} />
              <DeleteIcon className={styles.icon} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
