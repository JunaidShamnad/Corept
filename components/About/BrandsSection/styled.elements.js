import styled from 'styled-components'

export const Section = styled.div`
display: flex;
flex-direction:row;
justify-content: center;
background-image: url("https://expert-themes.com/newwp/emarat/wp-content/uploads/2019/01/5.jpg");
background-repeat: no-repeat;
background-size: cover;
-webkit-filter: grayscale(100%);
filter: grayscale(75%);
`
export const Container = styled.div`
padding:50px 200px;
display: flex;
flex-direction:row;
width: 1200px;
justify-content: center;
@media(max-width: 768px){
    flex-direction: column;
    padding:50px 0;
    align-items: center;
}
`
export const Counter = styled.div`
@media(max-width:767px){
    margin-bottom:50px;
}
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

`
