import React from "react";
import DeleteBtn from "../../asset/icons/DeleteBtn";
import * as S from "./style";

export interface TagProps {
  name: string;
  id: number;
  isDel: boolean;
  onDelClick: any;
}
const Tag = ({ name, isDel, onDelClick, ...props }: TagProps) => {
  return (
    <S.TagBox {...props}>
      <S.TextS size="14" style={{ wordBreak: "normal", color: "#424040" }}>
        {name}
      </S.TextS>
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
