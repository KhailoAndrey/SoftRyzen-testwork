import styled from 'styled-components';
    
export const Wrapper = styled.div`
    width: 320px;
    margin-top: 36px;
`
export const FaqTitle = styled.h2`
    color: var(--main-clr-dark-green);
font-family: Oswald;
font-size: 28px;
font-style: normal;
font-weight: 400;
line-height: 28px; 
text-transform: uppercase;
margin-bottom: 24px;
`
export const FaqBlock = styled.div`
    margin-bottom: 36px;
    display: flex;
    flex-direction: column;
    gap: 16px;
`
export const FaqModule = styled.div`
display: flex;
flex-direction: column;
gap: 16px;
justify-content: space-between;
align-items: end;
`

export const BtnQ = styled.button`
    border: none;
    width: 16px;
    height: 16px;

`

export const QBlock = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
gap: 8px;
    
`
export const Question = styled.p`
color: var(--main-clr-dark-green);
text-align: justify;
font-family: Fira Sans;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: -0.72px;
width: 296px;
    
`
export const Answer = styled.p`
color: var(--main-clr-dark-green);
text-align: justify;
font-family: Fira Sans;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: -0.56px;
width: 296px;
    
`