import { EPlayer } from '../enums/EPlayer';

export interface IMessage {
  player: EPlayer;
  city: string;
}
