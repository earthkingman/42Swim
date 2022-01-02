import Text from "../../atoms/Text";
import { ProfileWrapper, ProfileCircleImg, CircleProps } from "./style";

type sizeType = "sm" | "lg";

interface SProfileProps {
  size: sizeType;
}
export interface ProfileProps extends SProfileProps, CircleProps {
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
  border,
}: ProfileProps) => {
  if (size === "sm") {
    return (
      <ProfileWrapper size={size}>
        <ProfileCircleImg size="xsm" img={photo ? photo : ""} border={border} />
        <Text size="14" color="grey">
          {nickname}
        </Text>
        {children}
      </ProfileWrapper>
    );
  } else if (size === "xsm") {
    return (
      <ProfileWrapper size={size}>
        <ProfileCircleImg size="xsm" img={photo ? photo : ""} border={border} />
        <Text size="12" color="grey">
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
        <ProfileCircleImg size="sm" img={photo ? photo : ""} border={border} />
        <Text size="18" weight="bold" color={color}>
          {nickname}
        </Text>
        {children}
      </ProfileWrapper>
    );
  }
};

export default Profile;
