import Text from "../../atoms/Text";
import { ProfileWrapper, ProfileCircleImg } from "./style";

type sizeType = "sm" | "lg";

interface SProfileProps {
  size: sizeType;
}
export interface ProfileProps extends SProfileProps {
  id?: number;
  nickname: string;
  color?: string;
  photo?: string;
  children?: any;
  onMouseEnter?: any;
  onMouseLeave?: any;
  onClick?: any;
}

const Profile = ({
  nickname,
  size,
  photo,
  color,
  children,
  onMouseEnter,
  onMouseLeave,
  onClick,
}: ProfileProps) => {
  if (size === "sm") {
    return (
      <ProfileWrapper size={size}>
        <ProfileCircleImg size="xsm" img={photo ? "" : photo} />
        <Text size="14" color="grey">
          {nickname}
        </Text>
        {children}
      </ProfileWrapper>
    );
  } else {
    return (
      <ProfileWrapper
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        size={size}
      >
        <ProfileCircleImg size="sm" img={photo ? photo : ""} />
        <Text size="18" weight="bold" color={color}>
          {nickname}
        </Text>
        {children}
      </ProfileWrapper>
    );
  }
};

export default Profile;
