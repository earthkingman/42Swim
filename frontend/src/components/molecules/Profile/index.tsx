import Text from "../../atoms/Text";
import { ProfileWrapper, ProfileCircleImg } from "./style";

type sizeType = "sm" | "lg";

interface SProfileProps {
  size: sizeType;
}
export interface ProfileProps extends SProfileProps {
  id: number;
  nickname: string;
  photo?: string;
}

const Profile = ({ nickname, size, photo, ...props }: ProfileProps) => {
  if (size === "sm") {
    return (
      <ProfileWrapper size={size} {...props}>
        <ProfileCircleImg size="xsm" img={photo ? "" : photo} />
        <Text size="14" color="grey">
          {nickname}
        </Text>
      </ProfileWrapper>
    );
  } else {
    return (
      <ProfileWrapper size={size} {...props}>
        <ProfileCircleImg size="sm" img={photo ? "" : photo} />
        <Text size="18" weight="bold">
          {nickname}
        </Text>
      </ProfileWrapper>
    );
  }
};

export default Profile;
