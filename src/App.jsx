/* eslint-disable no-unused-vars */
import styled from 'styled-components'
import Checkbox from './components/Checkbox'
import { useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { 
  ContainerGeneral,
  Container,
  ContainerPassword,
  InputStyled,
  ButtonStyled,
  ButtonStyledCopy,
  Title,
  ContainerIcons,
  ContainerOptions,
  TextOption,
  ContainerRange,
  InputStyledRange,
  ContainerFooter,
  FooterText,
  } from './app.styles';


function App() {
  const [password, setPassword] = useState({
    length: 10,
    uppercase: true,
    lowercase: false,
    numbers: false,
    symbols: false
  })
  const [resultPass, setResultPass] = useState("")
  const [copied, setCopied] = useState(false)

  const chechIfCopied = () => {
    if(resultPass.length > 0) {
      navigator.clipboard.writeText(resultPass)
      setCopied(true)
      setInterval(() => {
        setCopied(false)
      }, 3000)
    }
  }

  const generatePassword = () => {
    const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz".split("")
    const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
    const numbersOptions = [1,2,3,4,5,6,7,8,9,0]
    const symbolsOptions = "!@#$%^&*()_+-=[]{}".split("")

    const { length, uppercase, lowercase, numbers, symbols  } = password;

    const generateWord = (length, uppercase, lowercase, numbers, symbols) => {
      const availableCharacters = [
        ...(uppercase ? uppercaseLetters : []),
        ...(lowercase ? lowercaseLetters : []),
        ...(numbers ? numbersOptions : []),
        ...(symbols ? symbolsOptions : [])
      ]
      const shuffleArray = (array) => array.sort(() => Math.random() - 0.5)
      const characters = shuffleArray(availableCharacters).slice(0, length)
      setResultPass(characters.join(""))
      return characters
    }

    generateWord(length, uppercase, lowercase, numbers, symbols);
    
  }

  return (
    <ContainerGeneral>
      <Title>
          Password Generator
        </Title>
      <Container>
        <ContainerPassword>
          <InputStyled type='text' value={resultPass} onChange={(e) => setResultPass(e.target.value)} readOnly={true} />
          <ButtonStyledCopy onClick={chechIfCopied}>
            {copied ? "Copied!" : "Copy"}
          </ButtonStyledCopy>
        </ContainerPassword>
        <ContainerOptions>
          <TextOption>Password Length</TextOption>
          <ContainerRange>
            <InputStyledRange type='range' min='8' max='20' step='1' value={password.length} onChange={(event) => setPassword({...password, length: Number(event.target.value)})}/>
            {password.length}
          </ContainerRange>
        </ContainerOptions>
        <ContainerOptions>
          <TextOption>Include uppercase letters</TextOption>
          <Checkbox value={password.uppercase} />
        </ContainerOptions>
        <ContainerOptions>
          <TextOption>Include lowercase letters</TextOption>
          <Checkbox value={password.lowercase} onChange={() => setPassword({...password, lowercase: !password.lowercase})} />
        </ContainerOptions>
        <ContainerOptions>
          <TextOption>Include numbers</TextOption>
          <Checkbox value={password.numbers} onChange={() => setPassword({...password, numbers: !password.numbers})} />
        </ContainerOptions>
        <ContainerOptions>
          <TextOption>Include symbols</TextOption>
          <Checkbox value={password.symbols} onChange={() => setPassword({...password, symbols: !password.symbols})} />
        </ContainerOptions>
      </Container>
        <ButtonStyled onClick={generatePassword}>
          Generate Password
        </ButtonStyled>
        <ContainerFooter>
          <FooterText>
            Desarollado por Carlos Stoll
          </FooterText>
          <ContainerIcons>
            <a href="https://github.com/CarRoc07" target='_blank' rel='noreferrer noopener'><FaGithub size={30} color='#ccc'/></a>
            <a href="https://www.linkedin.com/in/carlos-stoll-54242b221/" target='_blank' rel='noreferrer noopener'><FaLinkedin size={30} color='#ccc'/></a>
          </ContainerIcons>
        </ContainerFooter>
    </ContainerGeneral>
  )
}

export default App
