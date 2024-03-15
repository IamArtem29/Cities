import { EResult } from '@/shared/PlayRules/model/enums/EResult';

export const textResult = {
  [EResult.WIN]: {
    header1: 'Поздравляем тебя с победой!',
    header2: 'Твой противник не вспомнил город!',
  },
  [EResult.LOSE]: {
    header1: 'К сожалению твое время вышло!',
    header2: 'Твой противник победил!',
  },
};
