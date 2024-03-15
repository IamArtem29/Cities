import { IMessage } from '@/shared/PlayRules/model/intefaces/IMessage';

export interface generateAICityProps {
  lastLetter: string;
  messages: IMessage[];
}
