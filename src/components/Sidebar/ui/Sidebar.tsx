import styles from './Sidebar.module.scss';
import { list } from '../data/list';

export function Sidebar() {
  function link(url: any) {
    const link = './' + url.toLowerCase();
    return link;
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        {list.map((item) => {
          const { Svg } = item;
          return (
            <a className={styles.link} href={link(item.text)}>
              <Svg className={styles.svg} />
              {item.text}
            </a>
          );
        })}
      </div>
    </div>
  );
}
