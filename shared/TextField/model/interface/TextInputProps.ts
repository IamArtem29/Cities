import { ChangeEvent } from 'react';

export interface TextInputProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
  value: string;
  placeholder?: string;
  disabled?: boolean;
}
