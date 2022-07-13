import {
  Section,
  Container,
  LeftContainer,
  FirstImage,
  SecondImage,
  RightContainer,
  Title,
  Description,
  Button
} from "./styled.elements";

function index() {
  return (
    <Section>
      <Container>
        <LeftContainer>
          <FirstImage src="http://construction.local/wp-content/uploads/2020/10/about-1.jpg" />
          <SecondImage src="http://construction.local/wp-content/uploads/2020/10/img-01-1.jpg" />
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
