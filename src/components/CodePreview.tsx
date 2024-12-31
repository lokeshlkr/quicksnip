import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import CopyToClipboard from "./CopyToClipboard";

type Props = {
  language: string;
  code: string[];
  customStyle?:React.CSSProperties;
};

const CodePreview = ({ language = "markdown", code, customStyle }: Props) => {
  const codeString = code.join("\n");
  let styles = {
    margin: "0", 
    maxHeight: "20rem"
  } as React.CSSProperties;
  
  if (customStyle){
    styles = {...styles, ...customStyle}
  }

  return (
    <div className="code-preview">
      <CopyToClipboard text={codeString} className="modal__copy" />
      <SyntaxHighlighter
        language={language}
        style={oneDark}
        wrapLines={true}
        customStyle={styles}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodePreview;
