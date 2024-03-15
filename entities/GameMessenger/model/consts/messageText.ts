import { EPlayer } from '@/shared/PlayRules/model/enums/EPlayer';
import { MessageTextProps } from '../interfaces/MessageTextProps';

export const messageText = (props: MessageTextProps) => {
  const { playerTurn, lastCity } = props;

  switch (true) {
    case playerTurn === EPlayer.PLAYER && !lastCity:
      return 'Напишите любой город, например: Где вы живете?';
    case playerTurn === EPlayer.AI:
      return 'Ожидаем ответа соперника...';
    case playerTurn === EPlayer.PLAYER && !!lastCity:
      return `Знаете город на букву "${lastCity[lastCity.length - 1]}"?`;
    default:
      return '';
  }
};
