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
      setMessages((prevState) => [
        {
          city: cityInputSTR.charAt(0).toUpperCase() + cityInputSTR.slice(1),
          player: playerTurn,
        },
        ...prevState,
      ]);
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
      <div className="flex justify-between items-center py-4 px-4">
        <div className="text-base font-normal text-black">
          {turnText[playerTurn]}
        </div>
        <div className="text-xl font-medium text-black">
          {formatTimer(timer)}
        </div>
      </div>
      <TimerLine elapsedTime={timer} />
      <div className="flex flex-col-reverse px-5 py-4 whitespace-pre-wrap h-80 overflow-hidden">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`py-3 px-6 text-center text-base font-normal ${
              message.player === EPlayer.PLAYER
                ? 'rounded-bl-lg rounded-tl-lg rounded-tr-lg bg-violet-500 text-white self-end'
                : 'rounded-br-lg rounded-tl-lg rounded-tr-lg bg-violet-50 text-gray-700 self-start'
            }`}
          >
            {message.city}
          </div>
        ))}
      </div>
      <div className="flex justify-center py-4 text-gray-400 text-sm">
        Всего перечисленно городов: {messages.length}
      </div>
      <TextField
        onClick={onClick}
        onChange={onChange}
        value={cityInput}
        placeholder={placeholder}
        disabled={disabled}
      />
    </div>
  );
};
