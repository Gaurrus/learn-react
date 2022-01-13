import { createPortal } from 'react-dom';
import styles from './modal.module.css';

export const Modal = (props) =>
  createPortal(
    <div
      className={styles.wrapper}
      onClick={props.closeMessage}
      onKeyDown={props.closeMessage}
      role="button"
      tabIndex="0"
    >
      <div className={styles.message}>{props.children}</div>
    </div>,
    document.getElementById('root'),
  );
