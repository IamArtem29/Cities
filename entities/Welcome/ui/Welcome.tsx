import { TextBlock } from '@/shared/TextBlock/ui';
import { WelcomeProps } from '../model/interfaces/WelcomeProps';

export const Welcome = (props: WelcomeProps) => {
  const { handleStartGame } = props;

  return (
    <TextBlock
      title={'Игра в города на время'}
      target={'Цель: Назвать как можно больше реальных городов.'}
      tasks={[
        'Запрещается повторение городов.',
        'Названий городов на твердый “ъ” и мягкий “ъ” знак нет. Из-за этого бы пропускаем эту букву и игрок должен назвать город на букву стоящую перед “ъ” или “ь” знаком.',
        'Каждому игроку дается 2 минуты на размышления, если спустя это время игрок не вводит слово он считается проигравшим',
      ]}
      buttonText={'Начать игру'}
      onClick={handleStartGame}
    />
  );
};
