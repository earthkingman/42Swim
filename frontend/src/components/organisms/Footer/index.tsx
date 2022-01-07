import Text from "../../atoms/Text";
import WhiteLogo from "../../asset/logo/logoWhite";
import * as S from "./style.ts";

const Footer = () => {
  return (
    <S.Wrapper>
      <S.LogoWrapper>
        <WhiteLogo />
      </S.LogoWrapper>
      <S.MainWrapper>
        <S.ListWrapper>
          <Text size="18" color="primary" weight="bold">
            MAKER
          </Text>
          <S.A target="_blank" href="https://github.com/Yenowme">
            yejeong
          </S.A>
          <S.A target="_blank" href="https://github.com/Chloekkk">
            nkim
          </S.A>
          <S.A target="_blank" href="https://github.com/hainho">
            iha
          </S.A>
          <S.A target="_blank" href="https://github.com/earthkingman">
            ji-park
          </S.A>
        </S.ListWrapper>
        <S.ListWrapper>
          <Text size="16" color="primary" weight="bold">
            ABOUT
          </Text>
          <S.A
            target="_blank"
            href="https://github.com/innovationacademy-kr/42Swim"
          >
            GitHub
          </S.A>
          <S.A
            target="_blank"
            href="https://github.com/innovationacademy-kr/42Swim/wiki"
          >
            Wiki
          </S.A>
        </S.ListWrapper>
        <S.ListWrapper>
          <Text size="16" color="primary" weight="bold">
            CONTACT
          </Text>
          <S.A style={{ textDecoration: "none" }}>42sof.staff@gmail.com</S.A>
          <S.A
            target="_blank"
            href="https://github.com/innovationacademy-kr/42Swim/issues/new?assignees=&labels=&template=bug_report.md&title="
          >
            Bug Report
          </S.A>
        </S.ListWrapper>
      </S.MainWrapper>
      <Text size="14" color="white">
        Copyright © 2019 - 2021 42Seoul inno. All rights reserved.
      </Text>
      <S.BackGround />
    </S.Wrapper>
  );
};

export default Footer;
