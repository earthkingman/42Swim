import React from "react";
import * as S from "./style";
import Text from "../Text";
import DeleteBtn from "../../asset/icons/DeleteBtn";

export interface TagProps {
  key: string | number;
  name: string;
  isDel: boolean;
  onDelClick: any;
}
const Tag = ({ name, isDel, onDelClick, ...props }: TagProps) => {
  return (
    <S.TagBox {...props} name={name}>
      <Text size="14" style={{ wordBreak: "normal", color: "#ffffff" }}>
        {name}
      </Text>
      {isDel ? (
        <S.ButtonS
          onClick={() => {
            onDelClick(name);
          }}
        >
          <DeleteBtn />
        </S.ButtonS>
      ) : (
        ""
      )}
    </S.TagBox>
  );
};

export default Tag;
