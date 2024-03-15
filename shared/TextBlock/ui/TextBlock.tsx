import { Button } from 'shared/Button/ui';
import { TextBlockProps } from '../model/interface/TextBlockProps';
import styles from './TextBlock.module.css';

export const TextBlock = (props: TextBlockProps) => {
  const { title, target, tasks, buttonText, onClick } = props;
  return (
    <div>
      <div className={styles.title}>{title}</div>
      <div className={styles.info}>
        <div>{target}</div>
        <ul>
          {tasks.map((task, index) => {
            return <li key={index}>{task}</li>;
          })}
        </ul>
        <div>
          <Button onClick={onClick}>{buttonText}</Button>
        </div>
      </div>
    </div>
  );
};
