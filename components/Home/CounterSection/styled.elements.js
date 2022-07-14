import styled from 'styled-components'

export const Section = styled.div`
display: flex;
flex-direction:row;
justify-content: center;
`
export const Container = styled.div`
padding:50px 200px;
display: flex;
flex-direction:row;
width: 1200px;
justify-content: center;
@media(max-width: 768px){
    flex-direction: column;
    padding: 0;
}
`
export const Counter = styled.div`

`

export const Title = styled.h1`

`
export const Image = styled.img`
width: 234px;
display: inline-block;
transition: all 0.3s ease;
-moz-transition: all 0.3s ease;
-webkit-transition: all 0.3s ease;
-ms-transition: all 0.3s ease;
-o-transition: all 0.3s ease;
-webkit-filter: grayscale(100%);
filter: grayscale(100%);
@media(max-width: 768px){
    width: 90%;
}
`
