import {
  createContext,
  useState,
  useContext,
  Dispatch,
  FC,
  SetStateAction,
} from 'react';
import type { EditorFileInfo } from '@/types/editors/monaco';

type ContextProps = {
  editorInfoList: EditorFileInfo[];
  setEditorInfoList: Dispatch<SetStateAction<EditorFileInfo[]>>;
};

const EditorContext = createContext({} as ContextProps);

export const EditorContextProvider: FC = ({ children }) => {
  const [editorInfoList, setEditorInfoList] = useState<EditorFileInfo[]>([]);

  return (
    <EditorContext.Provider
      value={{
        editorInfoList,
        setEditorInfoList,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
};

export const useEditorData = () => {
  const { editorInfoList, setEditorInfoList } = useContext(EditorContext);

  return { editorInfoList, setEditorInfoList };
};
