import {
  Section,
  Container,
  LeftContainer,
  RightContainer,
  Head,
  Title,
  Faqs,
  Question,
  Answer,
  Image,
  Icon,
  QuestionSection,
} from "./styled.elements";
import{FaPlus,FaMinus} from 'react-icons/fa'
function index() {
  return (
    <Section>
      <Container>
        <LeftContainer>
          <Image src="https://expert-themes.com/newwp/emarat/wp-content/uploads/2019/02/faq.jpg"/>
        </LeftContainer>
        <RightContainer>
          <Head>Fequality Ask Question</Head>
          <Title>Some FAQ’s</Title>
          <Faqs>
            <QuestionSection>
              
              <Question>Best Company Ever<FaMinus/></Question>
            </QuestionSection>
            
            <Answer>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia .</Answer>
          </Faqs>
          <Faqs>
            <Question>Best Company Ever<FaMinus/></Question>
            <Answer>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia .</Answer>
          </Faqs>
          <Faqs>
            <Question>Best Company Ever<FaMinus/></Question>
            <Answer>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia .</Answer>
          </Faqs>
          
        </RightContainer>
      </Container>
    </Section>
  );
}

export default index;
