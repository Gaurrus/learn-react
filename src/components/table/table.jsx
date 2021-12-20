import styles from "./table.module.css";

import { inData } from './../../constants/in-data';

export const Table = (props) => {
  return <table className={styles.table}>
    {inData.map((item) => <tr>
      <td className={styles.td}>{item.id}</td>
      <td className={styles.td}>{item.userId}</td>
      <td className={styles.td}>{item.title}</td>
      <td className={styles.td}>{item.body}</td>
    </tr>
    )}
  </table>
};
