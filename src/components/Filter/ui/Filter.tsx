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
                {dropdownList.map((item, index) => (
                  <div key={index}>
                    <p>{item[0]}</p>
                    <p>{item.filter2}</p>
                    <p>{item.filter3}</p>
                    <p>{item.filter4}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
