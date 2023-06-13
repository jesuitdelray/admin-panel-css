import styles from './Filter.module.scss';
import { list } from '../data/list';

export function Filter() {
  return (
    <div>
      <div className={styles.filterBtns}>
        {list.map((item) => {
          return (
            <select className={styles.filterBtn} key={item.text}>
              <option className={styles.filterBtn}>
                {item.text}
                {<item.icon className={styles.downarrowIcon} />}
              </option>
              {item.options.map((option) => (
                <option className={styles.dropdown} key={option}>
                  {option}
                </option>
              ))}
            </select>
          );
        })}
      </div>
    </div>
  );
}
