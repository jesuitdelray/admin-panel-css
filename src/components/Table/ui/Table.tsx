import styles from './Table.module.scss';
import { DeleteIcon } from 'src/assets/icons/delete';
import { EditIcon } from 'src/assets/icons/edit';
import { list } from '../data/list';

export function Table() {
  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.thead}>
          <th>ID</th>
          <th>Photo</th>
          <th>Status</th>
          <th>Name</th>
          <th>Style</th>
          <th>Edit/Delete</th>
        </tr>
      </thead>
      <tbody>
        {list.map((item) => (
          <tr key={item.id} className={styles.displayedContent}>
            <td>{item.id}</td>
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
