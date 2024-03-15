import { Dispatch, SetStateAction } from 'react';
import { EPlayer } from 'shared/PlayRules/model/enums/EPlayer';
import { EResult } from 'shared/PlayRules/model/enums/EResult';
import { IMessage } from 'shared/PlayRules/model/intefaces/IMessage';

export interface GameMessengerProps {
  playerTurn: EPlayer;
  messages: IMessage[];
  timer: number;
  setResult: Dispatch<SetStateAction<EResult | null>>;
  setMessages: Dispatch<SetStateAction<IMessage[]>>;
  handleChangePlayer: () => void;
  handleGameOver: () => void;
}
