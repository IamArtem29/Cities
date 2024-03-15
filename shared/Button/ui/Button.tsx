import { ButtonProps } from '../model/interfaces/ButtonProps';
import styles from './Button.module.css';

export const Button = (props: ButtonProps) => {
  const { children, onClick } = props;
  return (
    <div className={styles.button} onClick={onClick}>
      {children}
    </div>
  );
};
