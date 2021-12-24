import { VFC } from 'react';

type Props = {
  icon?: JSX.Element;
  title: string;
  menu?: JSX.Element;
};

export const PaneHeader: VFC<Props> = ({ icon, title, menu }) => {
  return (
    <div className="flex bg-gray-100 rounded-t-xl p-3">
      {icon}
      <span className="text-gray-800 ml-1 flex-grow">{title}</span>
      {menu}
    </div>
  );
};
