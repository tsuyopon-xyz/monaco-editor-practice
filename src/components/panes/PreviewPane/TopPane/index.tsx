import { EyeIcon } from '@heroicons/react/solid';
import { ArrowsExpandIcon } from '@heroicons/react/outline';
import { PaneWithHeader } from '@/components/panes/PaneWithHeader';

export const PreviewTopPane = () => {
  return (
    <PaneWithHeader
      headerIcon={<EyeIcon width={20} />}
      headerTitle="プレビュー"
      headerMenu={<ArrowsExpandIcon width={20} />}
    >
      This is Preview Top Pane
    </PaneWithHeader>
  );
};
