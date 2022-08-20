import styled from 'styled-components';
import { BsCheckCircle } from "react-icons/bs"
import { Link } from "react-router-dom";
import GlobalStyle from './GlobalStyle';

const Container = styled.div`
    max-width: 480px;
    padding-top: 10px;
    padding-left: 36px;
    padding-right: 36px;
    height: 800px;
    display: flex;
    justify-content: center;
`;

const Box = styled.div`
  width: 100%;
  height: 325px;
  display: flex;
  margin-top: 190px;
  flex-direction: column;
  align-items: center;
`;

const IconBox = styled.div`
    width: 100%;
    height: 130px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ConfirmText = styled.p`
    width: 100%;
    height:30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;

    font-size: 24px;
    font-weight: 400;
`;

const AddText = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;

    font-size: 20px;
    font-weight: 300;
`

const Button = styled.button`
  width: 180px;
  height: 51px;
  border-radius: 41px;
  border: none;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 3px 10px gray;
  margin-bottom: 10px;

  color: white;
  font-size: 24px;
  font-weight: bold;
`;

const BackLink = styled(Link)`
  width: 100%;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;

  font-size: 16px;
  color: #0C15EB;
  text-decoration: none;
`;


function OrderConfirmed() {
    return (
        <>
            <GlobalStyle />
            <Container>
               <Box>
                    <IconBox>
                        {/* <Icon class="material-icons-sharp" style="color: #0C15EB">check_circle_outline</Icon> */}
                        <BsCheckCircle className='icon' size='116' color='#0C15EB'/>
                    </IconBox>
                    <ConfirmText>Your Order is Confimed</ConfirmText>
                    <AddText>Thank for your Order</AddText>
                    <Button>Done</Button>
                    <BackLink to="/register">Back to Home</BackLink>
                </Box>
            </Container>
        </>
    );
}

export default OrderConfirmed;
