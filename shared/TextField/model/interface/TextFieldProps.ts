import { ChangeEvent } from 'react';

export interface TextFieldProps {
  onClick: () => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder?: string;
  disabled?: boolean;
}
