import { ButtonProps } from '../model/interfaces/ButtonProps';

export const Button = (props: ButtonProps) => {
  const { children, onClick } = props;

  return (
    <div
      className="p-2 px-4 rounded bg-violet-600 inline-block cursor-pointer text-white text-base font-medium"
      onClick={onClick}
    >
      {children}
    </div>
  );
};
