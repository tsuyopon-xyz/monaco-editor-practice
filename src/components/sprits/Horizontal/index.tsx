import type { FC } from 'react';
import Split, { SplitProps } from 'react-split';

export const HorizontalSplit: FC<SplitProps> = (props) => {
  return <Split className="flex flex-row h-full">{props.children}</Split>;
};
