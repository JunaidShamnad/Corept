import React, { CSSProperties } from "react";
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
  Span,
} from "./styled.elements";
import { FaLongArrowAltRight } from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function index() {
  return (
    <Section>
      <Container>
        <Carousel
          infiniteLoop={true}
          showArrows={true}
          autoPlay={true}
          interval={1900}
          swipeable={true}
          width={"100%"}
          useKeyboardArrows={true}
          emulateTouch={true}
          showStatus={false}
        >
          <Project>
            <LeftContainer>
              <Image
                src="https://expert-themes.com/newwp/emarat/wp-content/uploads/2019/01/project-2.jpg"
                alt="image"
              />
            </LeftContainer>

            <RightContainer>
              <IndexNo>
                01<Span>/03</Span>
              </IndexNo>
              <Title>VILLA AT RIFFA</Title>
              <Description>
                In the year 2021 CPC Acquired Specialised Engineering a leading
                Post Tensioning Company in the Kingdom of Bahrain as a part of
                the diversification strategy.
              </Description>
              <Button>
                See Project <FaLongArrowAltRight />
              </Button>
            </RightContainer>
          </Project>

          <Project>
            <LeftContainer>
              <Image
                src="https://expert-themes.com/newwp/emarat/wp-content/uploads/2019/01/project-2.jpg"
                alt="image"
              />
            </LeftContainer>
            <RightContainer>
              <IndexNo>
                02<Span>/03</Span>
              </IndexNo>
              <Title> VILLA AT DIYAR AL MUHARRAQ</Title>
              <Description>
                Our goal is to strengthen our position as a trusted post
                tensioning service provider in Kingdom of Bahrain through the
                development of our technical expertise&amp; satisfy the
                customer.
              </Description>
              <Button>
                See Project <FaLongArrowAltRight />
              </Button>
            </RightContainer>
          </Project>

          <Project>
            <LeftContainer>
              <Image
                src="https://expert-themes.com/newwp/emarat/wp-content/uploads/2019/01/project-2.jpg"
                alt="image"
              />
            </LeftContainer>
            <RightContainer>
              <IndexNo>
                03<Span>/03</Span>
              </IndexNo>
              <Title> VILLA AT MURQOBAN</Title>
              <Description>
                &quot;Customer Satisfaction&quot; is always our top priority in the
                operations. HSE, Quality and Reliability are the comer-stones of
                CPC&apos;s business venture.
              </Description>
              <Button>
                See Project <FaLongArrowAltRight />
              </Button>
            </RightContainer>
          </Project>
        </Carousel>
      </Container>
    </Section>
  );
}

export default index;
