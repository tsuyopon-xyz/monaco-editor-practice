import { useEditorData } from '@/providers/EditorProvider';

export const Preview = () => {
  const { editorInfoList } = useEditorData();
  const htmlInfo = editorInfoList.find((fileInfo) =>
    fileInfo.name.includes('html')
  );

  return <iframe srcDoc={htmlInfo?.value}>Monaco Preview.</iframe>;
};
