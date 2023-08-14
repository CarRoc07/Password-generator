import { styled } from "styled-components";

export const ContainerGeneral = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    width: 100%;
    flex-direction: column;
    gap: 30px;
`

export const Container = styled.div`
    background: #2c2b31;
    width: auto;
    height: 450px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    padding: 18px;

    @media (max-width: 500px) {
        width: auto;
    }
`

export const Title = styled.h1`
    background: linear-gradient(90deg, #ffbc42 0%, #d81159 100%);
    color: transparent;
    -webkit-background-clip: text;
    color: transparent;
    font-weight: 700;
    font-size: 35px;

    @media (max-width: 500px) {
        text-align: center;
}
`

export const ContainerOptions = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    @media (max-width: 500px) {
        width: 95%;
    }
`

export const ContainerPassword = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 12px;

    @media (max-width: 500px) {
        width: 95%;
        justify-content: center;
}
`

export const ButtonStyledCopy = styled.button`
    background: linear-gradient(90deg, #ffbc42 0%, #d81159 100%);
    border: none;
    border-radius: 10px;
    font-size: 20px;
    font-weight: 800;
    padding: 10px;
    cursor: pointer;
    width: 110px;

    @media (max-width: 500px) {
        padding: 7px;
    }
`

export const ButtonStyled = styled.button`
    background: linear-gradient(90deg, #ffbc42 0%, #d81159 100%);
    border: none;
    border-radius: 10px;
    font-size: 28px;
    font-weight: 800;
    padding: 10px;
    cursor: pointer;
    transition: all 0.3s ease-in;

    &:hover {
        scale: 1.1;
    }

    @media (max-width: 500px) {
        font-size: 24px;
    }
`

export const InputStyled = styled.input`
    font-size: 20px;
    font-weight: 800;
    padding: 10px;
    border-radius: 10px;
    outline: none;
    border-bottom: 2px solid #ffbc42;
    border-right: 2px solid #ffbc42;
    border-top: 2px solid #d81159;
    border-left: 2px solid #d81159;

    @media (max-width: 500px) {
        width: 75%;
        font-size: 13px;
    }
`

export const InputStyledRange = styled.input`
`

export const TextOption = styled.p`
    font-size: 18px;

    @media (max-width: 500px) {
        font-size: 16px;
    }
`

export const ContainerRange = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`

export const FooterText = styled.p`
    font-size: 18px;
    opacity: 0.7;
`

export const ContainerFooter = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const ContainerIcons = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
`