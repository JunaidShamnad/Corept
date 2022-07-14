import styled from "styled-components";


export const Section = styled.div`
background-image: url("https://expert-themes.com/newwp/emarat/wp-content/uploads/revslider/Home/slider-3.jpg");
width:100%;
height:100vh;
background-size:cover;
background-repeat: no-repeat;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
@media(max-width: 768px){
    flex-direction: column;
}
`
export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
export const Head = styled.div`
/* opacity: 1;
width: 64px;
height: 18px;
transform: translate(-32px, -38px);
top: 100%;
left: 50%; */
@media(max-width: 768px){
    
}
`
export const Title = styled.h1`
font-size:54px;
color:#fff;
text-align: center;
@media(max-width: 768px){
    font-size: 37px;
    width: 75%;
}

`
export const Description = styled.p`
font-size:18px;
text-align: center;
margin-top: 15px;
color:#fff;
@media(max-width: 768px){
    /* opacity: 1;
    width: 64px;
    height: 18px;
    transform: translate(-32px, -38px);
    top: 100%;
    left: 50% */
}
`
export const Buttons = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
`
export const Button = styled.button`
    background: #ffb200;
    border-color: #ffb200;
    width: 140px;
    height: 42px;
    border-radius: 50px;
    border: none;
    color: #fff;
    margin-left: 15px;
    margin-right: 15px;
    margin-top: 30px;
    font-weight:500;
    font-size:18px;
`
