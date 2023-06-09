import styles from './Navbar.module.scss';
import { avatar } from '../data/list';
import { DownArrowIcon, Exit, PortfolioIcon } from '../../../assets/icons';

export function Navbar() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.portfolioContainer}>
          <PortfolioIcon className={styles.portfolioIcon} />
          <p>Portfolio</p>
        </div>
        <div className={styles.sliderContainer}>
          <div className={styles.slider}>
            <img src={avatar} alt="avatar" className={styles.avatar} />
            <p className={styles.name}>John</p>
            <DownArrowIcon className={styles.downarrow} />
          </div>
          <div className={styles.dropdown}>
            Exit
            <Exit className={styles.exitIcon} />
          </div>
        </div>
      </div>
    </div>
  );
}
