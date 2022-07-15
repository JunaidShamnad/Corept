import {
  Section,
  Container,
  Head,
  Title,
  Description,
  Buttons,
  Button,
} from "./styled.elements";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";


function index() {
  return (
    <Carousel showArrows={true} autoPlay={true} interval={1900} swipeable={true} width={"100%"} useKeyboardArrows={true}  emulateTouch={true} infiniteLoop={true}>
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
    </Carousel>
  );
}

export default index;
