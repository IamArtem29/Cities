import { totalTime } from 'shared/PlayRules/model/consts';
import { TimerLineProps } from '../model/interfaces/TimerLineProps';

export const TimerLine = (props: TimerLineProps) => {
  const { elapsedTime } = props;

  const progress = (elapsedTime / totalTime) * 100;

  return (
    <div className="w-full h-1 bg-gray-200 overflow-hidden">
      <div
        className="h-full bg-purple-400 transition-width duration-1000"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};
