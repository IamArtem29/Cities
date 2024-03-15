import { Button } from 'shared/Button/ui';
import { formatTimer } from 'shared/FormatTimer/model/consts';
import { scoreCheck } from 'shared/PlayRules/model/consts';
import { EResult } from 'shared/PlayRules/model/enums/EResult';
import { textResult } from '../consts/textResult';
import { FinalProps } from '../model/interfaces/FinalProps';

export const Final = (props: FinalProps) => {
  const { result, timer, gameLength, lastCity, restartGame } = props;

  const resultHeader = textResult[result];
  const { header1, header2 } = resultHeader;

  return (
    <div className="p-10 flex flex-col items-center gap-8">
      <div className="text-center text-xl font-regular">
        <div>{header1}</div>
        <div>{header2}</div>
      </div>
      <div
        className={
          result === EResult.WIN
            ? 'text-green-600 text-3xl font-medium'
            : 'text-red-600 text-3xl font-medium'
        }
      >
        {formatTimer(timer)}
      </div>
      <div className="text-center text-xl font-regular">
        <div>Всего было перечислено городов: {gameLength}</div>
        <div>{scoreCheck(gameLength)}</div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="text-center text-xl font-regular">
          Последний город названный победителем
        </div>
        <div className="text-2xl font-medium">{lastCity}</div>
      </div>
      <Button onClick={restartGame}>Начать новую игру</Button>
    </div>
  );
};
