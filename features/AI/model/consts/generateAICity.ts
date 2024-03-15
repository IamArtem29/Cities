import { cities } from 'shared/Cities/model/cities';
import { generateAICityProps } from '../interface/generateAICityProps';

export const generateAICity = (props: generateAICityProps) => {
  const { lastLetter, messages } = props;

  const availableCities = cities.filter(
    (city) =>
      !messages.some(
        (message) => message.city.toLowerCase() === city.toLowerCase()
      )
  );

  const validCities = availableCities.filter((city) =>
    city.toLowerCase().startsWith(lastLetter.toLowerCase())
  );

  if (validCities.length > 0) {
    const randomIndex = Math.floor(Math.random() * validCities.length);
    return validCities[randomIndex];
  } else {
    return null;
  }
};
