import type { FC } from 'react';
import Split, { SplitProps } from 'react-split';

export const HorizontalSplit: FC<SplitProps> = (props) => {
  return <Split className="bg-indigo-200 h-full split">{props.children}</Split>;
};
