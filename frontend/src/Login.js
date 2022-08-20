import styled from "styled-components";
import GlobalStyle from './GlobalStyle';

const Container = styled.div` 
  max-width: 480px; 
  margin: 0 auto; 
  padding-top: 10px;
  padding-left: 15px;
  padding-right: 15px;
  height: 500px;
`;
const Header = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  margin-top: 60px; 
`;
const Title = styled.div`
  width: 100%;
  height: 50px;
  margin-bottom: 40px;
  display: flex;
  align-items: center;

  font-size: 36px;
  font-weight: 400;
`;
const Box = styled.div`
  width: 100%;
  height: 160px;
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
const Input = styled.input`
  height: 60px;
  border: 2px solid black;
  padding-left: 15px;
  margin-bottom: 10px;

  font-size: 15px;
`;
const Button = styled.button`
  width: 100%;
  height: 60px;
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


function Login() {
  return (
   <> 
    <GlobalStyle />
    <Container>
      <Header>⬅</Header>
      <Title>Log in</Title>
      <Box>
        <Input placeholder="jane@example.com"/>
        <Input placeholder="············"/>
      </Box>
      <Button>LOG IN</Button>
    </Container>
  </>
  );
}

export default Login;
