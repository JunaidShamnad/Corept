import React,{useState} from 'react';
import {Data} from '../../../data/FaqData';
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
  QuestionWrapper,
} from "./styled.elements";
import{FiPlus,FiMinus} from 'react-icons/fi'
function index() {
  const [clicked, setClicked] = useState(false);

  const Toggle = (index) => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <Section>
      <Container>
        <LeftContainer>
          <Image src="https://expert-themes.com/newwp/emarat/wp-content/uploads/2019/02/faq.jpg" alt="image"/>
        </LeftContainer>
        <RightContainer>
          <Head>Fequality Ask Question</Head>
          <Title>Some FAQ’s</Title>
          <Faqs>
          {Data.map((item, index) => {
            return (
              <>
              <QuestionWrapper>
            <QuestionSection onClick={() => Toggle(index)} key={index}>
              
              <Question>{item.question} {clicked === index ?<FiMinus/>: <FiPlus />}</Question>
            </QuestionSection>
            {clicked === index ? (
            <Answer>{item.answer}</Answer>
            ) : null}
            </QuestionWrapper>
           </>
            );
          })}
            </Faqs>
{/*           
          <Faqs>
            <Question>Best Company Ever<FaMinus/></Question>
            <Answer>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia .</Answer>
          </Faqs>
          <Faqs>
            <Question>Best Company Ever<FaMinus/></Question>
            <Answer>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia .</Answer>
          </Faqs> */}
          
        </RightContainer>
      </Container>
    </Section>
  );
}

export default index;
