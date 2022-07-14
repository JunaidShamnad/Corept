import {
  Section,
  Container,
  Head,
  Title,
  Description,
  Buttons,
  Button,
} from "./styled.elements";

function index() {
  return (
    <Section>
      <Container>
        <Head>We are the best</Head>
        <Title>Construction Experts</Title>
        <Description>lorem ipsum is a text generator</Description>
        <Buttons>
          <Button>Our Work</Button>
          <Button>Contact</Button>
        </Buttons>
      </Container>
    </Section>
  );
}

export default index;
