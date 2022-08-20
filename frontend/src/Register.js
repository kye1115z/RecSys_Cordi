import styled from 'styled-components';
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
    height: 60px;
    margin-bottom: 15px;
    display: flex;
    align-items: center;

    font-size: 36px;
    font-weight: 400;
`;
const Box = styled.div`
    width: 100%;
    height: 124px;
    flex-direction: column;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
`;
const Input = styled.input`
    height: 52px;
    border: 2px solid black;
    padding-left: 15px;
    margin-bottom: 10px;

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

function Register() {
    return (
        <>
            <GlobalStyle />
            <Container>
                <Header>⬅</Header>
                <Title>Register</Title>
                <Box>
                    <Input placeholder='jane@example.com' />
                    <Input placeholder='············' />
                </Box>
                <Button>NEXT</Button>
            </Container>
        </>
    );
}

export default Register;
