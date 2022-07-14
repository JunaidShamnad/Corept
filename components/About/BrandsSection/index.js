import { Section, Container, Title, Counter, Image } from "./styled.elements";

function index() {
  return (
    <Section>
      <Container>
        <Counter>
          <Image src="http://construction.local/wp-content/uploads/2019/01/5.png"/>
        </Counter>
        <Counter>
        <Image src="http://construction.local/wp-content/uploads/2019/01/2.png"/>
        </Counter>
        <Counter>
        <Image src="http://construction.local/wp-content/uploads/2019/01/1.png"/>
        </Counter>
        <Counter>
        <Image src="https://expert-themes.com/newwp/emarat/wp-content/uploads/2019/01/3.png"/>
        </Counter>
        <Counter>
        <Image src="http://construction.local/wp-content/uploads/2019/01/2.png"/>
        </Counter>
      </Container>
    </Section>
  );
}

export default index;
