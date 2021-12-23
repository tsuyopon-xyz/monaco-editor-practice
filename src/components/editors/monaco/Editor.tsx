import { useEffect, useState } from 'react';
import axios from 'axios';
import _ from 'lodash';
import MonacoEditor, {
  DiffEditor,
  useMonaco,
  loader,
} from '@monaco-editor/react';
import type { EditorFileInfo } from '@/types/editors/monaco';
import { useEditorData } from '@/providers/EditorProvider';

const LANGUAGE_MAP = {
  html: 'html',
  css: 'css',
  js: 'javascript',
  ts: 'typescript',
};
type ValidFileExtensionKeys = keyof typeof LANGUAGE_MAP;

const loadFileInfo = async (url: string): Promise<EditorFileInfo> => {
  const response = await axios.get(url);
  const fileName = _.last(response.config.url?.split('/'));
  const ext = _.last(fileName?.split('.')) as ValidFileExtensionKeys; //?
  const language = LANGUAGE_MAP[ext];
  if (!fileName || !ext || !language) {
    throw new Error('Something went wrong.');
  }
  const value = response.data as string;

  return {
    name: fileName,
    language,
    value,
  };
};

const loadFileInfoList = async (
  urlList: string[]
): Promise<EditorFileInfo[]> => {
  const promises = urlList.map((url) => {
    return loadFileInfo(url);
  });

  const fileInfoList = await Promise.all(promises);

  return fileInfoList;
};

export const Editor = () => {
  const { editorInfoList, setEditorInfoList } = useEditorData();
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    async function loadFiles() {
      const urls = [
        '/code-files/index.html',
        '/code-files/style.css',
        '/code-files/main.js',
      ];

      const editorFileInfoList = await loadFileInfoList(urls);
      setEditorInfoList(editorFileInfoList);
    }

    loadFiles();
  }, []);

  if (editorInfoList.length === 0) {
    return <div>Now loading...</div>;
  }

  const createEditorTabs = () => {
    return editorInfoList.map((fileInfo, index) => {
      const bgColor = index === selectedIndex ? 'bg-gray-700' : 'bg-gray-900';

      return (
        <li
          key={index}
          className={`${bgColor} text-white ml-0.5 first:ml-0 px-4 flex justify-center items-center cursor-pointer`}
          onClick={() => setSelectedIndex(index)}
        >
          {fileInfo.name}
        </li>
      );
    });
  };

  const fileInfo = editorInfoList[selectedIndex];

  return (
    <div className="h-full">
      <ul className="bg-[#1e1e1e] flex h-10 w-full whitespace-nowrap overflow-x-scroll tab-scrollbar">
        {createEditorTabs()}
      </ul>
      <div className="h-[calc(100%-2.5rem)]">
        <MonacoEditor
          width="100%"
          theme="vs-dark"
          options={{
            minimap: {
              enabled: false,
            },
            fontSize: 16,
            tabSize: 2,
          }}
          onMount={(editor, monaco) => {
            // console.log({ editor, monaco });
            editor.focus();
          }}
          loading={<div>Now loading...</div>}
          path={fileInfo.name}
          defaultLanguage={fileInfo.language}
          defaultValue={fileInfo.value}
          onChange={_.debounce(function (value) {
            console.log(value);
            const copiedEditorInfoList = [...editorInfoList];
            copiedEditorInfoList[selectedIndex].value = value || '';
            setEditorInfoList(copiedEditorInfoList);
          }, 200)}
        />
      </div>
    </div>
  );
};
