import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { storageSelector } from '../../selectors';
import { getData } from '../../store/storage-store/thunk';

import styles from './visual.module.css';

export const Visual = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(getData()), []);
  const { data } = useSelector(storageSelector);
  console.log(data, `data`);
  return (
    <div className={styles.wrapper}>
      {/* {data.arr.map((item) => (
        <div key={item.id} className={styles.item}>
          {item.id}
        </div>
      ))} */}
    </div>
  );
};
