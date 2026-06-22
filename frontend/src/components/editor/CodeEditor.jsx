import Editor from "@monaco-editor/react";

const CodeEditor = ({
  language,
  code,
  setCode,
}) => {
  return (
    <div className="editor-container">
      <Editor
        height="100%"
        theme="vs-dark"
        language={language}
        value={code}
        onChange={(value) => setCode(value)}
      />
    </div>
  );
};

export default CodeEditor;