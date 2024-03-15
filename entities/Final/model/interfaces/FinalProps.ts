import { EResult } from 'shared/PlayRules/model/enums/EResult';

export interface FinalProps {
  result: EResult;
  timer: number;
  gameLength: number;
  lastCity: string;
  restartGame: () => void;
}
