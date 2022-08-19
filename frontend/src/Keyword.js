import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { useState } from 'react';
import { Helmet, HelmetProvider } from "react-helmet-async";
import axios from 'axios';
import KeyRecommendation from './KeyRecommendation';

const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`;

const Container = styled.div`
    max-width: 480px;
    margin: 0 auto;
    padding-top: 10px;
    padding-left: 20px;
    padding-right: 20px;
    height: 500px;
`;

const Title = styled.div`
    width: 100%;
    height: 60px;
    margin-top: 30px;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    font-size: 36px;
    font-weight: 400;
    border-bottom: 1px solid lightgray;
`;
const Box = styled.div`
  width: 100%;
  height: 55px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
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
            </Container>
        </>
    );
}

export default Keyword;