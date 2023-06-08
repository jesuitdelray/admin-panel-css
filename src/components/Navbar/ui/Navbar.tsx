import styles from './Navbar.module.scss';
import { list, avatar } from '../data/list';
export function Navbar() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.slider}>
          <p></p>
          <img src={avatar} alt="avatar" className={styles.avatar} />
        </div>
      </div>
    </div>
  );
}
