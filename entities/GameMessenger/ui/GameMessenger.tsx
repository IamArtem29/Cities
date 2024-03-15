import { getLastLetter } from 'entities/GetLastLetter/model';
import { ValidateCityInput } from 'entities/ValidateCityInput/model';
import { useState, ChangeEvent } from 'react';
import { formatTimer } from 'shared/FormatTimer/model/consts';
import { EPlayer } from 'shared/PlayRules/model/enums/EPlayer';
import { EResult } from 'shared/PlayRules/model/enums/EResult';
import { TextField } from 'shared/TextField/ui';
import { TimerLine } from 'shared/TimeLine/ui/TimerLine';
import { messageText } from '../model/consts/messageText';
import { turnText } from '../model/consts/turnText';
import { GameMessengerProps } from '../model/interfaces/GameMessengerProps';
import styles from './GameMessenger.module.css';

export const GameMessenger = (props: GameMessengerProps) => {
  const {
    playerTurn,
    messages,
    timer,
    setResult,
    setMessages,
    handleChangePlayer,
    handleGameOver,
  } = props;

  const [cityInput, setCityInput] = useState<string>();

  const city = messages.length ? messages[messages.length - 1].city : null;
  const letter = getLastLetter(city);

  const handleClick = () => {
    if (
      ValidateCityInput({
        input: cityInput,
        letter,
        messages,
      })
    ) {
      const cityInputSTR = cityInput as string;
      setMessages((prevState) => {
        return [
          {
            city: cityInputSTR.charAt(0).toUpperCase() + cityInputSTR.slice(1),
            player: playerTurn,
          },
          ...prevState,
        ];
      });
      handleChangePlayer();
    } else {
      setResult(EResult.LOSE);
      handleGameOver();
    }
  };

  const onClick = () => {
    handleClick();
    setCityInput('');
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCityInput(e.currentTarget.value);
  };

  const disabled = playerTurn !== EPlayer.PLAYER;

  const placeholder = messageText({
    playerTurn,
    lastCity: messages.length ? messages[messages.length - 1].city : null,
  });

  return (
    <div>
      <div className={styles.header}>
        <div>{turnText[playerTurn]}</div>
        <div>{formatTimer(timer)}</div>
      </div>
      <TimerLine elapsedTime={timer} />
      <div className={styles.messageContainer}>
        {messages.map((message, index) => {
          return (
            <div
              key={index}
              className={`${styles.message} ${
                message.player === EPlayer.PLAYER
                  ? styles.messagePlayer
                  : styles.messageAI
              }`}
            >
              {message.city}
            </div>
          );
        })}
      </div>
      <div className={styles.footer}>
        Всего перечисленно городов: {messages.length}
      </div>
      <TextField
        onClick={onClick}
        onChange={onChange}
        value={cityInput as string}
        placeholder={placeholder}
        disabled={disabled}
      />
    </div>
  );
};
