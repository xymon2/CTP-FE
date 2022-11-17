import React, { Dispatch, FC, SetStateAction, useEffect } from "react";
import MonacoEditor from "react-monaco-editor";
import { CodeInfo } from "../container/TestPageContainer";

interface CodeEditorProps {
  language: keyof CodeInfo;
  code: CodeInfo;
  setCode: (lang: keyof CodeInfo, newCode: string) => void;
  setLanguage: Dispatch<SetStateAction<keyof CodeInfo>>;
}

const CodeEditor: FC<CodeEditorProps> = ({
  language,
  code,
  setCode,
  setLanguage,
}) => {
  const editorDidMount = (editor: any, monaco: any) => {
    editor.focus();
  };

  const options = {
    selectOnLineNumbers: true,
    automaticLayout: true,
  };

  const onCodeChange = (newValue: string) => {
    setCode(language, newValue);
  };

  const onLangChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value as keyof CodeInfo);
  };

  return (
    <>
      <div className="test-editor-header">
        solution
        <select
          className="lang-selector"
          onChange={onLangChange}
          defaultValue={language}
        >
          <option value="javascript">javascript</option>
          <option value="python">python</option>
        </select>
      </div>
      <div className="test-editor">
        <MonacoEditor
          language={language}
          theme="vs-dark"
          value={code[language]}
          options={options}
          onChange={onCodeChange}
          editorDidMount={editorDidMount}
        />
      </div>
    </>
  );
};

export default CodeEditor;
