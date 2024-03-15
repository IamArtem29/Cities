import { Button } from 'shared/Button/ui';
import { TextBlockProps } from '../model/interface/TextBlockProps';

export const TextBlock = (props: TextBlockProps) => {
  const { title, target, tasks, buttonText, onClick } = props;

  return (
    <div>
      <div className="py-4 flex justify-center border-b-2 border-gray-300 text-lg font-bold">
        {title}
      </div>
      <div className="p-6 flex flex-col gap-6 text-sm font-regular text-gray-700">
        <div>{target}</div>
        <ul className="list-disc pl-6">
          {tasks.map((task, index) => {
            return <li key={index}>{task}</li>;
          })}
        </ul>
        <div className="flex justify-center">
          <Button onClick={onClick}>{buttonText}</Button>
        </div>
      </div>
    </div>
  );
};
