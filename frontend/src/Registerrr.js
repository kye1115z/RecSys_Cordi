import styled from "styled-components";
import { Link } from "react-router-dom";
import GlobalStyle from './GlobalStyle';

const Container = styled.div` 
  max-width: 480px; 
  margin: 0 auto; 
  padding-top: 10px;
  padding-left: 40px;
  padding-right: 40px;
  height: 500px;
`;
const Header = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
`;
const Title = styled.div`
  width: 100%;
  height: 50px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;

  font-size: 36px;
  font-weight: 400;
`;
const Box = styled.div`
  width: 100%;
  height: 62px;
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;
const Input = styled.input`
  height: 52px;
  border: 2px solid black;
  padding-left: 15px;

  font-size: 15px;
`;
const Button = styled.button`
  width: 100%;
  height: 52px;
  border-radius: 6px;
  border: none;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;

  color: white;
  font-size: 13px;
  font-weight: bold;
`;
const Ref = styled.div`
  width: 100%;
  height: 50px;
  padding-left: 2px;
  padding-right: 2px;
  margin-top: 30px;
  background-color: white;
  display: flex;
  align-items: center;  
`;

const Text = styled.p`
  width: 100%;

  font-size: 13px;
`;

const LinkText = styled(Link)`
  color: inherit;
`


function Registerrr() {
  return (
   <> 
    <GlobalStyle />
    <Container>
      <Header>⬅</Header>
      <Title>Register2</Title>
      <Box>
        <Input placeholder="the_jane"/>
      </Box>
      <Button>SIGN UP</Button>
      <Ref>
        <Text>By singing up, you agree to Photo's <LinkText to="https://youtu.be/0SvHoaVUzkk">Terms of Service</LinkText> and <LinkText to="https://m.musinsa.com/?mod=private">Privacy Policy.</LinkText></Text>
      </Ref>
    </Container>
  </>
  );
}

export default Registerrr;
