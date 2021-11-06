import React from "react";
import * as S from "./style";
import Text from "../Text";
import DeleteBtn from "../../asset/icons/DeleteBtn";

export interface TagProps {
  name: string;
  id: number;
  isDel: boolean;
  onDelClick: any;
}
const Tag = ({ name, isDel, onDelClick, ...props }: TagProps) => {
  return (
    <S.TagBox {...props}>
      <Text size="14" style={{ wordBreak: "normal", color: "#424040" }}>
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
