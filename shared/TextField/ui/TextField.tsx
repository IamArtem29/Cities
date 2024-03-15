import { TextFieldProps } from '../model/interface/TextFieldProps';

export const TextField = (props: TextFieldProps) => {
  const { onClick, onChange, value, placeholder, disabled = false } = props;

  return (
    <div className="p-5 relative">
      <div className="relative">
        <input
          className="w-full rounded-lg border-none px-5 py-3 text-base text-gray-700 bg-gray-100"
          disabled={disabled}
          value={value}
          onChange={onChange}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              onClick();
            }
          }}
          placeholder={placeholder}
        />
        <button
          className={`px-1 py-1 absolute top-1/2 right-2 transform -translate-y-1/2 flex items-center justify-center rounded-lg border-none cursor-pointer ${
            disabled ? 'bg-gray-400' : 'bg-violet-500'
          }`}
          onClick={onClick}
          disabled={disabled}
        >
          <img src={'./send.svg'} alt="Send Icon" />
        </button>
      </div>
    </div>
  );
};
