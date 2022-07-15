import {
  Container,
  FooterBottomWrapper,
  FooterCopyRightText,
  FooterCopyRightTextSpan,
  FooterLogoDiv,
  FooterLogoDivDesc,
  FooterLogoDivImage,
  FooterLogoDivLink,
  FooterLogoDivLinkA,
  FooterLogoDivSocial,
  FooterLogoDivSocialFacebook,
  FooterLogoDivSocialInsta,
  FooterLogoDivSocialTwitter,
  FooterTopWrapper,
  FooterWorkingDiv,
  FooterWorkingTitle,
  FooterWorkingTitleUnderline,
  FooterWrapper,
  IconContainer,
  IconContainerLocation,
  IconContainerMail,
  IconContainerPhone,
  IconContainerText,
  IconContainerTime,
  Section,
} from "./Footer.styled";

const Footer = () => {
  return (
    <Section>
      <Container>
        <FooterWrapper>
          <FooterTopWrapper>
            <FooterLogoDiv>
              <FooterLogoDivImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyebtd1EtHzb3yStiqATU1n3Zu6V393BhXjg&usqp=CAU"/>
              <FooterLogoDivDesc>Emarat ipsum amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore agna aliquam erat. ipsum dolor sit amet, consectetuer adipiscing.</FooterLogoDivDesc>
              <FooterLogoDivSocial>
                <FooterLogoDivLink href="facebook.com">
                  <FooterLogoDivLinkA>
                    <FooterLogoDivSocialFacebook />
                  </FooterLogoDivLinkA>
                </FooterLogoDivLink>

                <FooterLogoDivLink href="instagram.com">
                  <FooterLogoDivLinkA>
                    <FooterLogoDivSocialInsta />
                  </FooterLogoDivLinkA>
                </FooterLogoDivLink>

                <FooterLogoDivLink href="twitter.com">
                  <FooterLogoDivLinkA>
                    <FooterLogoDivSocialTwitter />
                  </FooterLogoDivLinkA>
                </FooterLogoDivLink>
              </FooterLogoDivSocial>
            </FooterLogoDiv>

            <FooterWorkingDiv>
              <FooterWorkingTitle>Working Hours</FooterWorkingTitle>
              <FooterWorkingTitleUnderline/>
              <IconContainer>
                <IconContainerMail/> <IconContainerText>info@example.com</IconContainerText>
              </IconContainer>
              <IconContainer>
                <IconContainerPhone/> <IconContainerText>1-800-985-357</IconContainerText>
              </IconContainer>
              <IconContainer>
                <IconContainerLocation/> <IconContainerText>185, Pickton Near Street, Los Angeles, USA</IconContainerText>
              </IconContainer>
              <IconContainer>
                <IconContainerTime/> <IconContainerText>09:00 am - 06:00 pm</IconContainerText>
              </IconContainer>
            </FooterWorkingDiv>
          </FooterTopWrapper>

          <FooterBottomWrapper>
            <FooterCopyRightText>
              Copyrights 2022. All Rights are Reserved by&nbsp;<FooterCopyRightTextSpan>Intelpik</FooterCopyRightTextSpan>
            </FooterCopyRightText>
          </FooterBottomWrapper>
        </FooterWrapper>
      </Container>
    </Section>
  );
};

export default Footer;
