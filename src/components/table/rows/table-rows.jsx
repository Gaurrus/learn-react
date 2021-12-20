import { inData } from '../../../constants/in-data';
import styles from './table-rows.module.css'

export const TableRow = ({dataRow}, tr, th) => {
  return <tr>
    {dataRow.map((item, index) =>
      <td key={index.toString()} className={styles.td}>{item}</td>
    )}
  </tr>
};
