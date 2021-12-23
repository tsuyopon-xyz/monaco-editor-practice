import { useEditorData } from '@/providers/EditorProvider';

export const Preview = () => {
  const { editorInfoList } = useEditorData();
  const htmlInfo = editorInfoList.find((fileInfo) =>
    fileInfo.name.includes('html')
  );
  const cssInfo = editorInfoList.find((fileInfo) =>
    fileInfo.name.includes('css')
  );
  const jsInfo = editorInfoList.find((fileInfo) =>
    fileInfo.name.includes('js')
  );

  const cssCode = cssInfo?.value ? `<style>${cssInfo.value}</style>` : '';
  const jsCode = jsInfo?.value ? `<script>${jsInfo.value}</script>` : '';
  const htmlCode = htmlInfo?.value ? `${htmlInfo.value}` : '';
  const code = cssCode + htmlCode + jsCode;

  return <iframe srcDoc={code}></iframe>;
};
