import {
  Container,
  Head,
  Title,
  Description,
  Buttons,
  Button,
  SectionOne,
  SectionTwo,
  SectionThree,
  ButtonTwo,
} from "./styled.elements";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";


function index() {
  return (
    <Carousel showArrows={true} autoPlay={true} interval={1900} swipeable={true} width={"100%"} useKeyboardArrows={true}  emulateTouch={true} infiniteLoop={true} showStatus={false}>
    <SectionOne>
      <Container>

        {/* <Head>We are the best</Head> */}
        <Title>Your Expectations are Our Milestones</Title>
        <Description>We as a Specialist agency in Post Tensioning, offer efficient structural solution to Building and infrastructure works.</Description>
        <Buttons>
          <Button>Our Work</Button>
          <ButtonTwo>Contact</ButtonTwo>
        </Buttons>
      </Container>
    </SectionOne>
    <SectionTwo>
      <Container>

        {/* <Head>We are the best</Head> */}
        <Title>Sustainable Engineering Solution</Title>
        <Description>Customer Satisfaction is always our top priority in the operations.</Description>
        <Buttons>
          <Button>Our Work</Button>
          <ButtonTwo>Contact</ButtonTwo>
        </Buttons>
      </Container>
    </SectionTwo>
    <SectionThree>
      <Container>

        {/* <Head>We are the best</Head> */}
        <Title>Uncover the true Potential of your structure</Title>
        <Description>Strive towards greater cost competitiveness and work towards continued Financial Performance</Description>
        <Buttons>
          <Button>Our Work</Button>
          <ButtonTwo>Contact</ButtonTwo>
        </Buttons>
      </Container>
    </SectionThree>
    </Carousel>
  );
}

export default index;
