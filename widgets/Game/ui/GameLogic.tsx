import { Final } from '@/entities/Final/ui/Final';
import { GameMessenger } from '@/entities/GameMessenger/ui/GameMessenger';
import { EPlayer } from '@/shared/PlayRules/model/enums/EPlayer';
import { EResult } from '@/shared/PlayRules/model/enums/EResult';
import { IMessage } from '@/shared/PlayRules/model/intefaces/IMessage';
import { useEffect, useState } from 'react';
import { EStages } from '../model/enums/EStages';
import { Welcome } from '@/entities/Welcome/ui';
import { totalTime } from '@/shared/PlayRules/model/consts';
import { generateAICity } from '@/features/AI/model/consts/generateAICity';
import { aiTimer } from '@/features/AI/model/consts';
import { getLastLetter } from '@/entities/GetLastLetter/model';

export const GameLogic = () => {
  const [result, setResult] = useState<EResult | null>(null);
  const [playerTurn, setPlayerTurn] = useState<EPlayer>(EPlayer.PLAYER);
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [currentStage, setCurrentStage] = useState<EStages>(EStages.WELCOME);
  const [timer, setTimer] = useState<number>(totalTime);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const updateTimer = () => {
    setTimer(totalTime);
  };

  const startTimer = () => {
    setIsTimerRunning(true);
  };

  const stopTimer = () => {
    setIsTimerRunning(false);
  };

  const handleGameOver = () => {
    setCurrentStage(EStages.FINAL);
    stopTimer();
  };

  const restartGame = () => {
    setResult(null);
    setPlayerTurn(EPlayer.PLAYER);
    setMessages([]);
    setCurrentStage(EStages.WELCOME);
    updateTimer();
    startTimer();
  };

  const handleChangePlayer = () => {
    setPlayerTurn((prevState) =>
      prevState === EPlayer.PLAYER ? EPlayer.AI : EPlayer.PLAYER
    );
    updateTimer();
    startTimer();
  };

  const handleStartGame = () => {
    setCurrentStage(EStages.GAME_MESSANGER);
    updateTimer();
    startTimer();
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (
      currentStage === EStages.GAME_MESSANGER &&
      timer > 0 &&
      isTimerRunning
    ) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [currentStage, timer, isTimerRunning]);

  useEffect(() => {
    if (playerTurn === EPlayer.AI) {
      const aiTime = aiTimer();
      const city = messages[messages.length - 1]?.city;
      setTimeout(() => {
        const aiCity = generateAICity({
          messages,
          lastLetter: getLastLetter(city) as string,
        });
        if (aiCity) {
          setMessages([{ city: aiCity, player: EPlayer.AI }, ...messages]);
          handleChangePlayer();
        } else {
          setResult(EResult.WIN);
          setCurrentStage(EStages.FINAL);
        }
      }, aiTime * 1000);
    }
  }, [playerTurn]);

  useEffect(() => {
    if (timer === 0) {
      setResult(playerTurn === EPlayer.PLAYER ? EResult.LOSE : EResult.WIN);
      setCurrentStage(EStages.FINAL);
      stopTimer();
    }
  }, [timer]);

  return (
    <>
      {currentStage === EStages.WELCOME && (
        <Welcome handleStartGame={handleStartGame} />
      )}
      {currentStage === EStages.GAME_MESSANGER && (
        <GameMessenger
          playerTurn={playerTurn}
          messages={messages}
          timer={timer}
          setResult={setResult}
          setMessages={setMessages}
          handleChangePlayer={handleChangePlayer}
          handleGameOver={handleGameOver}
        />
      )}
      {currentStage === EStages.FINAL && (
        <Final
          restartGame={restartGame}
          result={result as EResult}
          timer={timer}
          gameLength={messages.length}
          lastCity={
            messages.length
              ? messages[messages.length - 1].city
              : 'Не был введен город'
          }
        />
      )}
    </>
  );
};
