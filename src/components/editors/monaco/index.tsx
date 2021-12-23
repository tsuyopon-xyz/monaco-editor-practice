import { useEffect, useState } from 'react';
import axios from 'axios';
import _ from 'lodash';
import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';

const LANGUAGE_MAP = {
  html: 'html',
  css: 'css',
  js: 'javascript',
  ts: 'typescript',
};
type ValidFileExtensionKeys = keyof typeof LANGUAGE_MAP;

type EditorFileInfo = {
  name: string;
  language: string;
  value: string;
};
type EditorFileInfoList = EditorFileInfo[];

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
): Promise<EditorFileInfoList> => {
  const promises = urlList.map((url) => {
    return loadFileInfo(url);
  });

  const fileInfoList = await Promise.all(promises);

  return fileInfoList;
};

export const MonacoEditor = () => {
  const [editorFileInfoList, setEditorFileInfoList] =
    useState<EditorFileInfoList>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    async function loadFiles() {
      const urls = [
        '/code-files/index.html',
        '/code-files/style.css',
        '/code-files/main.js',
        '/code-files/main.ts',
      ];

      const editorFileInfoList = await loadFileInfoList(urls);
      setEditorFileInfoList(editorFileInfoList);
    }

    loadFiles();
  }, []);

  if (editorFileInfoList.length === 0) {
    return <div>Now loading...</div>;
  }

  const createEditorTabs = () => {
    return editorFileInfoList.map((fileInfo, index) => {
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

  const file = editorFileInfoList[selectedIndex];

  return (
    <div className="h-full">
      <ul className="bg-[#1e1e1e] flex h-10 w-full whitespace-nowrap overflow-x-scroll tab-scrollbar">
        {createEditorTabs()}
      </ul>
      <div className="h-[calc(100%-2.5rem)]">
        <Editor
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
          path={file.name}
          defaultLanguage={file.language}
          defaultValue={file.value}
        />
      </div>
    </div>
  );
};
