import styles from './Filter.module.scss';
import { list } from '../data/list';

export function Filter() {
  return (
    <div>
      <div className={styles.filterBtns}>
        {list.map((item) => (
          <div className={styles.filterBtn}>
            {item.text}
            {<item.icon className={styles.downarrowIcon} />}
          </div>
        ))}
      </div>
    </div>
  );
}
