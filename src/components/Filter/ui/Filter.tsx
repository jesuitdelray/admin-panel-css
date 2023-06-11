import styles from './Filter.module.scss';
import { dropdownList, list } from '../data/list';

export function Filter() {
  return (
    <div>
      <div className={styles.filterBtns}>
        {list.map((item) => {
          return (
            <div>
              <div className={styles.filterBtn}>
                {item.text}
                {<item.icon className={styles.downarrowIcon} />}
              </div>
              <div className={styles.dropdown}>
                {dropdownList.map((item, index) =>
                  Array(item[0]).map((item) => <p>{item}</p>)
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
