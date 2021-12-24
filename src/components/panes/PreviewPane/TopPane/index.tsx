import { EyeIcon } from '@heroicons/react/solid';
import { ArrowsExpandIcon } from '@heroicons/react/outline';
import { PaneWithHeader } from '@/components/panes/PaneWithHeader';
import { Preview } from '@/components/editors/monaco/Preview';

export const PreviewTopPane = () => {
  return (
    <PaneWithHeader
      headerIcon={<EyeIcon width={20} />}
      headerTitle="プレビュー"
      headerMenu={<ArrowsExpandIcon width={20} />}
    >
      {/* TODO: Previewコンポーネントを外部から受け取れるようにする */}
      <Preview />
    </PaneWithHeader>
  );
};
