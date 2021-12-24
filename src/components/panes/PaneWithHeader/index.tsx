import { FC } from 'react';
import { PaneHeader } from '@/components/panes/PaneHeader';

type Props = {
  headerIcon?: JSX.Element;
  headerTitle: string;
  headerMenu?: JSX.Element;
};

export const PaneWithHeader: FC<Props> = ({
  headerIcon,
  headerTitle,
  headerMenu,
  children,
}) => {
  return (
    <div className="p-2 h-full">
      <PaneHeader icon={headerIcon} title={headerTitle} menu={headerMenu} />
      <div className="h-[calc(100%-3rem)] border border-gray-200 rounded-b-xl overflow-scroll">
        {children}
      </div>
    </div>
  );
};
