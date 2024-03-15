import { EPlayer } from '@/shared/PlayRules/model/enums/EPlayer';

export const turnText = {
  [EPlayer.PLAYER]: 'Сейчас ваша очередь',
  [EPlayer.AI]: 'Сейчас очередь соперника',
};
