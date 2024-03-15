import { cities } from '@/shared/Cities/model/cities';
import { ValidateCityInputProps } from './interfaces/ValidateCityInputProps';

export const ValidateCityInput = (props: ValidateCityInputProps) => {
  const { input, letter, messages } = props;

  const inputLower = input ? input.toLowerCase() : '';

  const startsWithLetter = letter ? inputLower.startsWith(letter) : true;

  const isInCities = cities.some((city) => city.toLowerCase() === inputLower);

  const isNotInMessages = messages.every(
    (obj) => obj.city.toLowerCase() !== inputLower
  );

  return startsWithLetter && isInCities && isNotInMessages;
};
