import styles from "./list.module.css";

import { inData } from '../../constants/in-data';

export const List = (props) => {
  return <ol className={styles.list}>
    {inData.map((item, index) =>
      <li key={item.id}>
        <ul>
          <li>{item.userId}</li>
          <li>{item.title}</li>
          <li>{item.body}</li>
        </ul>
      </li>
    )}
  </ol>
};
