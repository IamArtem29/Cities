import { LayoutProps } from '../model/LayoutProps';

export const Layout = (props: LayoutProps) => {
  const { children } = props;

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="max-w-screen-sm w-full border border-black rounded-lg">
        {children}
      </div>
    </div>
  );
};
