import Tag from "../../atoms/Tag";
import Text from "../../atoms/Text";
import * as S from "./style";

//todo : 타이핑시 목록 드롭박스로 보이기
//todo : #이후 스페이스시 컴포넌트로 변환

interface InputTagProps {
  value: string;
  inputChange: any;
  setValue: any;
  tag: Array<string>;
  setTag: any;
}

const InputTag = ({
  value,
  inputChange,
  setValue,
  tag,
  setTag,
  ...props
}: InputTagProps) => {
  const tagMsg = document.getElementsByClassName("tagMsg")[0];
  const InputTagEl = document.getElementsByClassName("tagInput")[0];
  const validTag = new RegExp(/^#[a-z_0-9]+$/);

  //todo: code 정리
  const putTag = () => {
    const newTag = [...tag];
    const validValue = value.slice(1);
    if (validValue && !tag.includes(validValue)) newTag.push(validValue);
    setValue("");
    setTag(newTag);
    InputTagEl.style.color = "black";
  };

  const onChange = (e: Event) => {
    e.preventDefault();
    inputChange(e);
    if (e.target.value && validTag.test(e.target.value)) {
      tagMsg.style.display = "none";
      InputTagEl.style.color = "black";
    }
  };

  const onKeyPress = (e: Event) => {
    if (e.code === "Enter" || e.code === "Space") {
      e.preventDefault();
      if (validTag.test(value) || validTag.test(value)) putTag();
      else {
        tagMsg.style.display = "block";
        InputTagEl.style.color = "red";
      }
    }
  };

  const onDelCLick = (name: string) => {
    const newTag = tag.filter((item) => item !== name);
    setTag(newTag);
  };

  const tagPreView = tag?.map((item) => {
    return (
      <Tag key={item} name={item} onDelClick={onDelCLick} isDel={true}></Tag>
    );
  });
  return (
    <S.Wrap>
      <S.WrapTag>{tagPreView}</S.WrapTag>
      <S.Input
        value={value}
        className="tagInput"
        onChange={onChange}
        onBlur={putTag}
        onKeyPress={onKeyPress}
        {...props}
      />
      <Text
        className="tagMsg"
        size="12"
        color="red"
        style={{ position: "relative", top: "-2.5rem", display: "none" }}
      >
        잘못된 태그 형식입니다. 영어소문자와 특수문자 _ 만 가능합니다.
        ex)ft_pintf
      </Text>
    </S.Wrap>
  );
};
export default InputTag;
