export const getLastLetter = (city: string | null) => {
  if (!city) {
    return null;
  }
  const lastCharIndex = city.length - 1;
  let letter = city.charAt(lastCharIndex);
  if (letter === 'ь' || letter === 'ъ') {
    letter = city.charAt(lastCharIndex - 1);
  }
  return letter;
};
