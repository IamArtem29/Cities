import { totalTime } from '@/shared/PlayRules/model/consts';
import { TimerLineProps } from '../model/interfaces/TimerLineProps';

export const TimerLine = (props: TimerLineProps) => {
  const { elapsedTime } = props;

  const progress = (elapsedTime / totalTime) * 100;

  return (
    <div
      style={{
        width: '100%',
        backgroundColor: '#F4F4F5',
        height: '5px',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          width: `${progress}%`,
          backgroundColor: '#C4B5FD',
          height: '100%',
          transition: 'width 1s ease-in-out',
        }}
      />
    </div>
  );
};
