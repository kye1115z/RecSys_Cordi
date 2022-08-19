import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import StarRating from './StarRating';
import { Helmet, HelmetProvider } from "react-helmet-async";

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
    height: 844px;

`;

const Header = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    padding-bottom: 5px;
    justify-content: center;
    border-bottom: 1px solid lightgray;
    margin-bottom: 20px;

    font-size: 25px;
    font-weight: lighter;
`;

const Box = styled.div`
    width: 90%;
    padding-left: 25px;
    display: flex;
`;

const FirstBox = styled.div`
    width: 145px;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-right: 20px;

`

const SelectTagBtn = styled.button`
    width: 145px;
    height: 240px;
    box-shadow: 0px 0px 3px 3px lightgray;
    margin-bottom: 20px;

    border: none;
    border-radius: 30px;
`;

const SecondBox = styled.div`
    width: 145px;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: top;
    flex-direction: column;
`;
const SearchBtn = styled.button`
    width: 145px;
    height: 170px;
    box-shadow: 0px 0px 3px 3px lightgray;
    margin-bottom: 20px;

    border: none;
    border-radius: 30px;
`;

const KeywordBtn = styled.button`
    width: 145px;
    height: 200px;
    box-shadow: 0px 0px 3px 3px lightgray;

    border: none;
    border-radius: 30px;
`;

const MusinsaBtn = styled.button`
    width: 145px;
    height: 130px;
    box-shadow: 0px 0px 3px 3px lightgray;

    border: none;
    border-radius: 30px;

`;

const BtnTopBox = styled.div`
    width: 80%;
    height: 80%;
    display: flex;
    justify-content: left;
    align-items: top;
    padding: 8px;
`;

const BtnBottomBox = styled.div`
    width: 80%;
    height: 80%;
    display: flex;
    justify-content: left;
    align-items: bottom;
    padding: 8px;
`;

const Title = styled.div`
    font-size: 20px;
    font-weight: bold;
    color: white;
    text-align: bottom;
    justify-content: left;
`;



function Home({onClose}) {

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
                <Header>❤무지사랑해❤</Header>
                <Box>
                    <FirstBox>
                        <SelectTagBtn>
                            <BtnTopBox>
                                <Title><p>태그로</p>
                                        <p>추천받기</p>
                                </Title>
                            </BtnTopBox>
                        </SelectTagBtn>

                        <MusinsaBtn>
                            <BtnBottomBox>
                                <Title><p>무신사에서</p>
                                       <p>더 찾아보기</p>
                                </Title>
                            </BtnBottomBox>
                        </MusinsaBtn>
                    </FirstBox>

                    <SecondBox>
                        <SearchBtn>
                            <BtnBottomBox>
                                <Title><p>상품</p>
                                       <p>검색하기</p>
                                </Title>
                            </BtnBottomBox>
                        </SearchBtn>

                        <KeywordBtn>
                            <BtnBottomBox>
                                <Title><p>키워드로</p>
                                       <p>검색하기</p>
                                </Title>
                            </BtnBottomBox>
                        </KeywordBtn>
                    </SecondBox>
                </Box>
            </Container>
        

        </>
    );
}

export default Home;
