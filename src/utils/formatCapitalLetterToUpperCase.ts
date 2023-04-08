import { LOCAL_CONSTANT } from '../localConstant';

export const formatCapitalLetterToUpperCase = (content: string) =>
  content.charAt(LOCAL_CONSTANT.CAPITAL_LETTER_NUMBER).toUpperCase() +
  content.slice(LOCAL_CONSTANT.SECOUND_LETTER_NUMBER);
