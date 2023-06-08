import styles from './Sidebar.module.scss';
import { list } from '../data/list';

export function Sidebar() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        {list.map((link) => (
          <p className={styles.link}>
            <img src={link.svg} alt={link.text} className={styles.svg} />
            {link.text}
          </p>
        ))}
      </div>
    </div>
  );
}
