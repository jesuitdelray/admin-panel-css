import styles from './Navbar.module.scss';
import { list, avatar } from '../data/list';
import { svg } from '../../../assets/svg/svg';

export function Navbar() {
  const { DownarrowIcon, PortfolioIcon } = svg;

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.portfolioContainer}>
          <img src={PortfolioIcon} alt="" className={styles.portfolioIcon} />
          <p>Portfolio</p>
        </div>
        <div className={styles.slider}>
          <img src={avatar} alt="avatar" className={styles.avatar} />
          <p className={styles.name}>John</p>
          <img src={DownarrowIcon} alt="" className={styles.downarrow} />
        </div>
      </div>
    </div>
  );
}
