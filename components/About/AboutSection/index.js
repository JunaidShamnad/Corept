import {
  Section,
  Container,
  LeftContainer,
  FirstImage,
  SecondImage,
  RightContainer,
  Title,
  Description,
  Button,
  Head,
  Head2,
  DotImage
} from "./styled.elements";

function index() {
  return (
    <Section>
      <DotImage src="https://expert-themes.com/newwp/emarat/wp-content/themes/emarat/assets/images/resource/curve-1.png"/>
      <Container>
        <LeftContainer>
          <Head>About us</Head>
          <FirstImage src="https://expert-themes.com/newwp/emarat/wp-content/uploads/2020/10/about-1.jpg" />
          <SecondImage src="https://expert-themes.com/newwp/emarat/wp-content/uploads/2020/10/img-01-1.jpg" />
          <Head2>About Us</Head2>
        </LeftContainer>
        <RightContainer>
          <Title>Any Complexity For Any Cat</Title>
          <Description>
            Our company has many years experience and specializes in
            manufacturing, salling, serviceing and repairing cardan shafts
            (cardans) for various vehicles, technological equipment, tractor,
            special machinery and agricultural machinery of verious domestic and
            foreign manufacturers.
          </Description>
          <Button>About Us</Button>
        </RightContainer>
      </Container>
    </Section>
  );
}

export default index;
