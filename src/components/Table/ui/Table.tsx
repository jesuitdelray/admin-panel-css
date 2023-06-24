import styles from './Table.module.scss';
import { DeleteIcon } from 'src/assets/icons/delete';
import { EditIcon } from 'src/assets/icons/edit';
import { list } from '../data/list';
import { v4 as uuidv4 } from 'uuid';

export function Table() {
  const uuid = uuidv4();

  return (
    <table className={styles.wrapper}>
      <tbody className={styles.table}>
        {list.map((item, index) => {
          const { id, photo, status, name, style, color } = item;
          return (
            <tr key={id} className={styles.displayedContent}>
              <label htmlFor={index + `checkbox` + uuid}>
                <td>
                  {id}
                  <input
                    type="checkbox"
                    className={styles.idCheckbox}
                    id={index + `checkbox` + uuid}
                  />
                </td>
              </label>
              <td>
                <img src={photo} alt={name} className={styles.photo} />
              </td>
              <td className={styles.statusString}>
                {status ? (
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
              <td className={styles.nameString}>Style : {style}</td>
              <td>Color : {color}</td>
              <td className={styles.styleString}>Artist : {name}</td>
              <td>
                <EditIcon className={styles.icon} />
                <DeleteIcon className={styles.icon} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
