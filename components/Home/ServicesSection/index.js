import {
  Section,
  Container,
  Service,
  Icon,
  Image,
  ServiceDiv,
  Button,
  Overlay,
  Description,
  Title,
  BackgroundText,
  SectionHead,
  SectionTitle

} from "./styled.elements";

function index() {
  return (
    <Section>
      <SectionHead>Our Services</SectionHead>
      <SectionTitle>Whats Our Offers</SectionTitle>
      <Container>
        <Service>
          <Image src="https://expert-themes.com/newwp/emarat/wp-content/uploads/2019/02/blog-4-370x270.jpg" alt="image"/>
          <ServiceDiv>
            <Icon></Icon>
            <Title>POST TENSIONING SERVICES</Title>
            <Overlay>
              <Description>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium dolore mque laudantium, totam rem aperiam, eaque ips
                quae ab illo invent ore veritatis…
              </Description>
              <Button>Read More</Button>
            </Overlay>
          </ServiceDiv>
        </Service>
        <Service>
          <Image src="https://expert-themes.com/newwp/emarat/wp-content/uploads/2019/01/services1-370x270.jpg" alt="image"/>
          <ServiceDiv>
            <Icon></Icon>
            <Title>POST TENSIONING SYSTEM</Title>
            <Overlay>
              <Description>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium dolore mque laudantium, totam rem aperiam, eaque ips
                quae ab illo invent ore veritatis…
              </Description>
              <Button>Read More</Button>
            </Overlay>
          </ServiceDiv>
        </Service>
        {/* <Service>
          <Image src="https://expert-themes.com/newwp/emarat/wp-content/uploads/2019/01/service-5-370x270.jpg" />
          <ServiceDiv>
            <Icon></Icon>
            <Title>Interior Design</Title>
            <Overlay>
              <Description>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium dolore mque laudantium, totam rem aperiam, eaque ips
                quae ab illo invent ore veritatis…
              </Description>
              <Button>Read More</Button>
            </Overlay>
          </ServiceDiv>
        </Service> */}
      </Container>
    </Section>
  );
}

export default index;
