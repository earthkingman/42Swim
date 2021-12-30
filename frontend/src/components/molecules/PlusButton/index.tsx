import PlusIcon from "../../asset/icons/PlusIcon";
import Button from "../../atoms/Button";
import MediaQuery from "react-responsive";
import styled from "styled-components";

interface Props {
  onClick: any;
}

const SmallButton = styled(Button)`
  border-radius: 50%;
  width: 41px;
  padding: 0;
`;

const PlusButton = ({ onClick }: Props) => {
  return (
    <>
      <MediaQuery minWidth={1024}>
        <Button shadow={true} onClick={onClick} size="sm" fontColor="white">
          질문하기 <PlusIcon style={{ marginLeft: "2rem" }} />
        </Button>
      </MediaQuery>
      <MediaQuery minWidth={768} maxWidth={1023}>
        <Button shadow={true} onClick={onClick} size="sm" fontColor="white">
          질문하기 <PlusIcon style={{ marginLeft: "2rem" }} />
        </Button>
      </MediaQuery>
      <MediaQuery maxWidth={767}>
        <SmallButton
          shadow={true}
          onClick={onClick}
          size="sm"
          fontColor="white"
        >
          <PlusIcon />
        </SmallButton>
      </MediaQuery>
    </>
  );
};

export default PlusButton;
