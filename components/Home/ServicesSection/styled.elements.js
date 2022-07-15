import styled from 'styled-components'

export const Section = styled.div`
padding: 100px 0px;

text-align: center;
width:100vw;
height:100%;
`
export const Container = styled.div`
padding:50px 200px;
margin: 0 auto;
display: flex;
flex-direction: row;
justify-content: space-evenly;
@media(max-width: 768px){
    flex-direction: column;
    padding:0;
    
}
`
export const Service = styled.div`
margin: 25px;
width:100%;
`
export const Icon = styled.i`
background-color: #ffb200;
position: absolute;
left: 0px;
top: 0px;
width: 70px;
height: 71px;
color: #222222;
font-size: 34px;
line-height: 68px;
text-align: center;
font-size: 34px;
margin-left: 0px;
`
export const Image = styled.img`
width: 370px;
height: 270px;
@media(max-width: 768px){
    width: 90%;
}

`
export const ServiceDiv = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
position: relative;
padding: 11px 0px;
height:71px;
background-color: rgba(0,0,0,0.90);
color:#fff;
`
export const Button = styled.button`

`

export const Overlay = styled.div`
display: none;
`

export const Title = styled.h1`
    position: relative;
    color: #ffffff;
    font-size: 20px;
    font-weight: 600;
    padding: 11px 0px;
    padding-left: 100px;

`
export const Description = styled.h1`

`
export const SectionTitle = styled.h1`
position: relative;
color: #222222;
font-size: 36px;
font-weight: 700;
line-height: 1.4em;
`
export const SectionHead = styled.h1`
position: relative;
color: #fbb908;
font-size: 18px;
font-weight: 700;
margin-bottom: 15px;
text-transform: capitalize;
`
