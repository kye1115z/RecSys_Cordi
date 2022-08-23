import styled from 'styled-components';
import { useState } from 'react';
import { Helmet, HelmetProvider } from "react-helmet-async";
import axios from 'axios';
import KeyRecommendation from './KeyRecommendation';
import NavHome from './NavHome';
import GlobalStyle from './GlobalStyle';

const Container = styled.div`
    max-width: 480px;
    margin: 0 auto;
    padding-top: 10px;;
    height: 844px;
    padding-left: 15px;
    padding-right: 15px;

`;

const SubContainer = styled.div`
    max-width: 480px;
    padding-left: 8px;

`

const Title = styled.div`
    width: 100%;
    height: 60px;
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid lightgray;
    padding-left: 5px;

    font-size: 30px;
    font-weight: bolder;
`;

const Box = styled.div`
  width: 100%;
  height: 55px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  float:left;
`;

const Input = styled.input`
width: 80%;
  height: 40px;
  border: 1px solid black;
  border-right: none;
  padding-left: 20px;
  font-size: 15px;
`;


const Btn = styled.button`
    width: 20%;
    height: 44px;
    border: none;
    background-color: white;
    border: 1px solid black;
    border-left: none;
    padding-top: 5px;


    span{    
    font-size: 20px;
    color: black;
    }
`;

function Keyword() {
    const [text, setText] = useState('')
    const [clicked, setClicked] = useState(false)
    const [product, setProduct] = useState([]);

    const onChange = (e) => {
        setText(e.target.value);
    }

    console.log(text)

    const fetchData = (text) => {
        axios.get(`http://localhost:8000/product/?name=${text}`)
        .then((response) => {setProduct(response.data.postList);
        console.log(response)})
    } 





    return (
        <>
            <GlobalStyle />
            <HelmetProvider>
                <Helmet>
                <link rel="stylesheet" 
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
                </Helmet>
            </HelmetProvider>
            <Container>
            <NavHome />
                <SubContainer>
                <Title>상품명 검색</Title>
                <Box>
                    <Input onChange={onChange} placeholder='Search all products' />
                    <Btn onClick={()=>{
                                setClicked(true);
                                setText('');
                                fetchData(text)}
                                }>
                        <span className="material-symbols-outlined">search</span>
                    </Btn>
                </Box>
                {clicked && (
                            <KeyRecommendation
                            name={text}
                            product={product}
                        />
                        )}
            </SubContainer>
            </Container>
        </>
    );
}

export default Keyword;