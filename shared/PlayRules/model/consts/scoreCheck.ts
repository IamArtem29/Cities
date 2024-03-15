export const scoreCheck = (gameLength: number) => {
  switch (true) {
    case gameLength < 10:
      return 'Можно было лучше!';
    case gameLength < 20:
      return 'Хороший результат!';
    default:
      return 'Очень не плохой результат!';
  }
};
