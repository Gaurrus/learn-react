import styles from "./table-rows.module.css";

export const TableRow = ({ dataRow , th}) => (
  <tr>
    {dataRow.map((item, index) => {
      return th ? (
        <th key={index.toString()} className={styles.td}>
          {item}
        </th>
      ) : (
        <td key={index.toString()} className={styles.td}>
          {item}
        </td>
      );
    })}
  </tr>
);
