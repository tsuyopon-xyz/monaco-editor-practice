import type { FC } from 'react';
import Split, { SplitProps } from 'react-split';

export const VerticalSplit: FC<SplitProps> = (props) => {
  return (
    <Split className="flex flex-col h-full" direction="vertical">
      {props.children}
    </Split>
  );
};
