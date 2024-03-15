import { Button } from 'shared/Button/ui';
import { formatTimer } from 'shared/FormatTimer/model/consts';
import { scoreCheck } from 'shared/PlayRules/model/consts';
import { EResult } from 'shared/PlayRules/model/enums/EResult';
import { textResult } from '../consts/textResult';
import { FinalProps } from '../model/interfaces/FinalProps';
import styles from './Final.module.css';

export const Final = (props: FinalProps) => {
  const { result, timer, gameLength, lastCity, restartGame } = props;

  const resultHeader = textResult[result];
  const { header1, header2 } = resultHeader;

  return (
    <div className={styles.main}>
      <div>
        <div>{header1}</div>
        <div>{header2}</div>
      </div>
      <div
        className={result === EResult.WIN ? styles.clockWin : styles.clockLoss}
      >
        {formatTimer(timer)}
      </div>
      <div>
        <div>Всего было перечислено городов: {gameLength}</div>
        <div>{scoreCheck(gameLength)}</div>
      </div>
      <div className={styles.cityContainer}>
        <div>Последний город названный победителем</div>
        <div className={styles.city}>{lastCity}</div>
      </div>
      <Button onClick={restartGame}>Начать новую игру</Button>
    </div>
  );
};
