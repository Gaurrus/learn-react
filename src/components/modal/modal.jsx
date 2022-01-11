import { createPortal } from 'react-dom';
import styles from './modal.module.css';

export const Modal = (props) =>
  createPortal(
    <div className={styles.wrapper} onClick={props.closeMessage}>
      <div className={styles.message}>{props.children}</div>
    </div>,
    document.getElementById('root'),
  );
