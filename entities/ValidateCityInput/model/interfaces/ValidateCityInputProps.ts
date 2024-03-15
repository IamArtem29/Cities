import { IMessage } from '@/shared/PlayRules/model/intefaces/IMessage';

export interface ValidateCityInputProps {
  input: string | undefined;
  letter: string | null;
  messages: IMessage[];
}
