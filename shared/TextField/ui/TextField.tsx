import styles from './TextField.module.css';
import { TextFieldProps } from '../model/interface/TextFieldProps';
export const TextField = (props: TextFieldProps) => {
  const { onClick, onChange, value, placeholder, disabled = false } = props;

  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          style={{
            background: 'var(--cool-gray)',
            borderRadius: '6px',
            border: 'none',
            padding: '20px',
            paddingRight: 'calc(20px + 20px)',
          }}
          disabled={disabled}
          value={value}
          onChange={onChange}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              onClick();
            }
          }}
          placeholder={placeholder}
        />
        <button
          className={`${styles.button} ${
            disabled ? styles.colorBlock : styles.colorClick
          }`}
          onClick={onClick}
          disabled={disabled}
        >
          <img src={'./send.svg'} alt="Send Icon" />
        </button>
      </div>
    </div>
  );
};
