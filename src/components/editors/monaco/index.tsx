import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';

export const MonacoEditor = () => {
  return (
    <Editor
      width="100%"
      defaultLanguage="typescript"
      defaultValue="// some comment"
      theme="dark"
      options={{
        minimap: {
          enabled: false,
        },
      }}
      onMount={(editor, monaco) => {
        console.log({ editor, monaco });
        editor.focus();
      }}
    />
  );
};
