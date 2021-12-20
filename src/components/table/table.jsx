import { TableRow } from "./rows";

import { inData } from './../../constants/in-data';

import styles from "./table.module.css";


export const Table = (props) => {
  return <table className={styles.table}>
    <thead>
      {<TableRow dataRow={Object.keys(inData[0])} th />}
    </thead>
    <tbody>
      {inData.map((item) => <TableRow dataRow={Object.values(item)} key={item.id} />)}
    </tbody>
  </table>
};
