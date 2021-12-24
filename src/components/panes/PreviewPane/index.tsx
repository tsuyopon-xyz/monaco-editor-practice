import { PreviewTopPane } from './TopPane';
import { PreviewBottomPane } from './BottomPane';
import { VerticalSplit } from '@/components/sprits';

export const PreviewPane = () => {
  return (
    <VerticalSplit>
      <PreviewTopPane />
      <PreviewBottomPane />
    </VerticalSplit>
  );
};
