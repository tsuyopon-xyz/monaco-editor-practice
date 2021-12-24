import { BookOpenIcon } from '@heroicons/react/solid';
import { ArrowsExpandIcon } from '@heroicons/react/outline';
import { PaneWithHeader } from '@/components/panes/PaneWithHeader';

export const PreviewBottomPane = () => {
  return (
    <PaneWithHeader
      headerIcon={<BookOpenIcon width={20} />}
      headerTitle="見本"
      headerMenu={<ArrowsExpandIcon width={20} />}
    >
      This is Preview Bottom Pane
    </PaneWithHeader>
  );
};
