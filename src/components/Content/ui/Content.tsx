import styles from './Content.module.scss';
import { UpperPart } from 'src/components/UpperPart/UpperPart';
import { Filter } from 'src/components/Filter/ui/Filter';
import { Table } from 'src/components/Table/ui/Table';
import { Table2 } from 'src/components/Table2/ui/Table2';

export function Content() {
  return (
    <div className={styles.wrapper}>
      <UpperPart />
      <Filter />
      <Table />
    </div>
  );
}
