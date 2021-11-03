import * as React from "react";
import ReactMde, { SaveImageHandler } from "react-mde";
import * as Showdown from "showdown";
import showdownHighlight from "showdown-highlight";
import "react-mde/lib/styles/css/react-mde-all.css";
import { MarkDownEditorWrap } from "./style";

const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true,
  extensions: [
    showdownHighlight({
      pre: true,
    }),
  ],
});

interface MarkdownEditorProps {
  value?: string;
  setValue?: any;
}

const MarkdownEditor = ({ value, setValue, ...props }: MarkdownEditorProps) => {
  const [selectedTab, setSelectedTab] = React.useState<"write" | "preview">(
    "write"
  );

  //todo: 이미지 업로드 axios 서버 통신: data를 보내면 됨.
  const save: SaveImageHandler = async function* (data: ArrayBuffer) {
    console.log(data);
    yield "https://picsum.photos/300";

    return true;
  };

  return (
    <MarkDownEditorWrap {...props}>
      <ReactMde
        classes={{}}
        value={value}
        onChange={setValue}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
        generateMarkdownPreview={(markdown) => {
          console.log(markdown);
          return Promise.resolve(converter.makeHtml(markdown));
        }}
        childProps={{
          writeButton: {
            tabIndex: -1,
          },
        }}
        paste={{
          saveImage: save,
        }}
      />

      {/*code highlighting*/}
      <script src="/path/to/highlight.min.js"></script>
      <script>hljs.highlightAll();</script>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/styles/default.min.css"
      ></link>
    </MarkDownEditorWrap>
  );
};

export default MarkdownEditor;
