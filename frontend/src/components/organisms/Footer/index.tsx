import { ColumnSADiv, RowSADiv } from "../../atoms/Div";
import Text from "../../atoms/Text";
import Title from "../../atoms/Title";

const Footer = () => {
  return (
    <ColumnSADiv
      style={{
        width: "100%",
        height: "248px",
        background: "#646464",
        marginTop: "15rem",
        padding: "0 2rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        bottom: "0px",
      }}
    >
      <RowSADiv
        style={{
          alignItems: "flex-end",
          width: "380px",
          marginBottom: "1rem",
        }}
      >
        <Title size="h2" color="white">
          42Code
        </Title>
        <Text size="14" color="white" weight="bold">
          made by ji-park & yejeong & nkim & iha
        </Text>
      </RowSADiv>
      <Text size="14" color="white">
        Copyright © 2019 - 2021 42Seoul inno. All rights reserved.
      </Text>
    </ColumnSADiv>
  );
};

export default Footer;
