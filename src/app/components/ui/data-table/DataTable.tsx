import c from 'clsx';
import { ReactElement, ReactNode } from 'react';
import styles from './DataTable.module.scss';

type DataTableProps = {
  className?: string;
  children?: ReactNode;
};

const DataTable = ({ className, children }: DataTableProps): ReactElement => {
  return (
    <div className={c(styles.wrapper, className)}>
      <table className={styles.table}>{children}</table>
    </div>
  );
};

export default DataTable;
