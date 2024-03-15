import { EPlayer } from 'shared/PlayRules/model/enums/EPlayer';

export interface MessageTextProps {
  playerTurn: EPlayer;
  lastCity: string | null;
}
