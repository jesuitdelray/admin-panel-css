import styles from './Table.module.scss';
import { DeleteIcon } from 'src/assets/icons/delete';
import { EditIcon } from 'src/assets/icons/edit';
import { list } from '../data/list';

export function Table() {
  return (
    <table className={styles.wrapper}>
      <tbody className={styles.table}>
        {list.map((item) => (
          <tr key={item.id} className={styles.displayedContent}>
            <td className={styles.checkboxContainer}>
              <td>{item.id}</td>
              <td>
                <input type="checkbox" className={styles.checkboxIcon} />
                <label className={styles.checkboxLabel}>Chosen</label>
              </td>
            </td>
            <td>
              <img src={item.photo} alt={item.name} className={styles.photo} />
            </td>
            <td>{item.status ? 'Published' : 'Unpublished'}</td>
            <td>{item.name}</td>
            <td>{item.style}</td>
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
