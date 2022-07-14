import styled from 'styled-components'

export const Section = styled.div`
padding:100px 0 ;
margin-bottom:100px;
background-color: #f5f5f5;
`
export const Container = styled.div`
display: flex;
flex-direction: row;

overflow-x: scroll;
@media(max-width: 768px){
    flex-direction: column;
}
`
export const LeftContainer = styled.div`


`
export const Image = styled.img`
width: 770px;
height:450px;
@media(max-width: 768px){
    width: 90%;
    object-fit: cover;
}
`
export const Project = styled.div`
display: flex;
flex-direction: row;
@media(max-width: 768px){
    flex-direction: column;
}
`

export const RightContainer = styled.div`
width: 370px;
height:473px;
padding: 95px 20px 0 20px;
@media(max-width: 768px){
    width: 90%;
}
`
export const IndexNo = styled.h1`
    position: relative;
    color: #febc35;
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 50px;
`
export const Title = styled.h1`
    position: relative;
    margin-bottom: 30px;
`
export const Description = styled.p`
    position: relative;
    line-height: 1.8em;
    margin-bottom: 1rem;

`
export const Button = styled.button`
position: relative;
color: #222222;
font-size: 14px;
font-weight: 700;
text-transform: uppercase;
-webkit-transition: all 300ms ease;
-moz-transition: all 300ms ease;
-ms-transition: all 300ms ease;
-o-transition: all 300ms ease;
transition: all 300ms ease;
background-color:transparent;
border:none;
`
export const Span = styled.span`

`
export const QuestionSection = styled.div`

`
export const Icon = styled.div`

`