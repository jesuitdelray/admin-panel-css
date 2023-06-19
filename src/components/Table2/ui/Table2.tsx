import styles from './Table2.module.scss';
import { DeleteIcon } from 'src/assets/icons/delete';
import { EditIcon } from 'src/assets/icons/edit';
import { list } from 'src/components/Table/data/list';
import { Status } from 'src/components/Status/ui/Status';

export function Table2() {
  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.thead}>
          <th>ID</th>
          <th>Choose</th>
          <th>Photo</th>
          <th>Status</th>
          <th>Name</th>
          <th>Style</th>
          <th>Edit/Delete</th>
        </tr>
      </thead>
      <tbody>
        {list.map((item) => {
          const { id, photo, status, name, style } = item;

          return (
            <tr key={id} className={styles.displayedContent}>
              <td>{id}</td>
              <td>
                <input type="checkbox" className={styles.checkbox} />
              </td>
              <td>
                <img src={photo} alt={photo} className={styles.photo} />
              </td>
              <Status isPublished={status} />
              <td>{name}</td>
              <td>{style}</td>
              <td className={styles.editDelete}>
                <button className={styles.editBtn}>
                  <p>Edit</p>
                  <EditIcon className={styles.editIcon} />
                </button>
                <DeleteIcon className={styles.deleteIcon} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
