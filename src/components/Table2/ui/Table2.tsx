import styles from './Table2.module.scss';
import { DeleteIcon } from 'src/assets/icons/delete';
import { EditIcon } from 'src/assets/icons/edit';
import { list } from 'src/components/Table/data/list';
import { v4 as uuidv4 } from 'uuid';

export function Table2() {
  const uuid = uuidv4();
  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.thead}>
          <th>ID</th>
          <th>Photo</th>
          <th>Status</th>
          <th>Name</th>
          <th>Style</th>
          <th>Color</th>
          <th>Edit/Delete</th>
        </tr>
      </thead>
      <tbody>
        {list.map((item, index) => {
          const { id, photo, status, name, style, color } = item;

          return (
            <tr key={id} className={styles.displayedContent}>
              <td>
                {id}
                <input
                  type="checkbox"
                  className={styles.idCheckbox}
                  id={`${index}checkbox${uuid}`}
                />
              </td>
              <td>
                <img src={photo} alt={photo} className={styles.photo} />
              </td>
              <td className={styles.status}>
                {status ? (
                  <p className={styles.statusIcons}>
                    <div className={styles.statusGreen} />
                    Published
                  </p>
                ) : (
                  <p className={styles.statusIcons}>
                    <div className={styles.statusRed} />
                    Unpublished
                  </p>
                )}
              </td>
              <td>{name}</td>
              <td>{style}</td>
              <td>{color}</td>
              <td className={styles.editDelete}>
                <div className={styles.editDeleteInternal}>
                  <button className={styles.editBtn}>
                    <p>Edit</p>
                    <EditIcon className={styles.editIcon} />
                  </button>
                  <DeleteIcon className={styles.deleteIcon} />
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
