import {
  Section,
  Container,
  LeftContainer,
  IndexNo,
  RightContainer,
  Title,
  Image,
  Description,
  Button,
  Project,
  Span
} from "./styled.elements";
import{FaLongArrowAltRight} from 'react-icons/fa'
function index() {
  return (
    <Section>
      <Container>
        <Project>
          <LeftContainer>
            <Image src="https://expert-themes.com/newwp/emarat/wp-content/uploads/2019/01/project-2.jpg" alt="image"/>
          </LeftContainer>
          <RightContainer>
            <IndexNo>01<Span>/01</Span></IndexNo>
            <Title>Ocean Museum on Italy</Title>
            <Description>
            Well we’re movin’ on up to the east side. To a deluxe apartment in the sky. The weather started getting rough – the tiny ship was tossed. If not for…
            </Description>
            <Button>See Project <FaLongArrowAltRight/></Button>
          </RightContainer>
        </Project>
        <Project>
          <LeftContainer>
            <Image src="https://expert-themes.com/newwp/emarat/wp-content/uploads/2019/01/project-2.jpg" alt="image"/>
          </LeftContainer>
          <RightContainer>
            <IndexNo>01<Span>/01</Span></IndexNo>
            <Title>Ocean Museum on Italy</Title>
            <Description>
            Well we’re movin’ on up to the east side. To a deluxe apartment in the sky. The weather started getting rough – the tiny ship was tossed. If not for…
            </Description>
            <Button>See Project <FaLongArrowAltRight/></Button>
          </RightContainer>
        </Project>
        <Project>
          <LeftContainer>
            <Image src="https://expert-themes.com/newwp/emarat/wp-content/uploads/2019/01/project-2.jpg" alt="image"/>
          </LeftContainer>
          <RightContainer>
            <IndexNo>01<Span>/01</Span></IndexNo>
            <Title>Ocean Museum on Italy</Title>
            <Description>
            Well we’re movin’ on up to the east side. To a deluxe apartment in the sky. The weather started getting rough – the tiny ship was tossed. If not for…
            </Description>
            <Button>See Project <FaLongArrowAltRight/></Button>
          </RightContainer>
        </Project>
      </Container>
    </Section>
  );
}

export default index;
