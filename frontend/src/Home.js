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
    height: 70px;
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
    width: 100%;
    display: flex;
    justify-content: center;
`;

const FirstBox = styled.div`
    width: 145px;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-right: 20px;

`;

const SelectTagBtn = styled.button`
    width: 145px;
    height: 240px;
    box-shadow: 0px 0px 2px 1px lightgray;
    margin-bottom: 20px;

    border: none;
    border-radius: 30px;
    background: linear-gradient(180deg, rgb(254,218,229) 0%, rgb(253,173,198) 19%, rgb(253,156,187) 48%);
`;

const MusinsaBtn = styled.button`
    width: 145px;
    height: 130px;
    box-shadow: 0px 0px 2px 1px lightgray;

    border: none;
    border-radius: 30px;
    background: linear-gradient(180deg, rgb(182,182,182) 0%, rgb(70,70,70) 19%, rgb(13,13,13) 66%);

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
    box-shadow: 0px 0px 2px 1px lightgray;
    margin-bottom: 20px;

    border: none;
    border-radius: 30px;
    background: linear-gradient(180deg, rgb(250,238,218) 0%, rgb(243,212,163) 19%, rgb(235,186,107) 48%);
`;

const KeywordBtn = styled.button`
    width: 145px;
    height: 200px;
    box-shadow: 0px 0px 2px 1px lightgray;

    border: none;
    border-radius: 30px;
    background: linear-gradient(180deg, rgb(194,244,252) 0%, rgb(133,232,248) 19%, rgb(11,208,240) 48%);
`;

const BtnTopBox = styled.div`
    width: 80%;
    height: 85%;
    display: flex;
    justify-content: center;
    align-items: top;
    padding-left: 12px;
`;

const BtnBottomBox = styled.div`
    width: 80%;
    height: 80%;
    padding-top: 25%;
    padding-left: 12px;
`;

const BtnBottomRight = styled.div`
    width: 80%;
    height: 80%;
    padding-top: 40%;
    padding-left: 12px;
    display: flex;
    align-items: center;
`;

const BtnBox = styled.div`
    width: 80%;
    height: 80%;
    padding-top: 55%;
    padding-left: 12px;
    display: flex;
    align-items: center;
`

const Title = styled.div`
    height: 50px;
    font-size: 19px;
    font-weight: bold;
    color: white;
    vertical-align: bottom;
    p{
        float: left;
    }
`;



function Home({onClose}) {

    const onClick1 = () => {
        window.location.href="/selecttag"
    }

    const onClick2 = () => {
        window.location.href="https://www.musinsa.com/app/"
    }

    const onClick3 = () => {
        window.location.href="/search"
    }

    const onClick4 = () => {
        window.location.href="/keyword"
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
                <Header>❤무지사랑해❤</Header>
                <Box>
                    <FirstBox>
                        <SelectTagBtn onClick={onClick1}>
                            <BtnTopBox>
                                <Title><div>
                                        <p>태그로</p>
                                        <p>추천받기</p>
                                        </div>
                                </Title>
                            </BtnTopBox>
                        </SelectTagBtn>

                        <MusinsaBtn>
                            <BtnBottomBox onClick={onClick2}>
                                <Title><div>
                                        <p>무신사</p>
                                        <p>스토어</p>
                                        <p>바로가기</p>
                                        </div>
                                </Title>
                            </BtnBottomBox>
                        </MusinsaBtn>
                    </FirstBox>

                    <SecondBox>
                        <SearchBtn>
                            <BtnBottomRight onClick={onClick3}>
                                <Title><div>
                                        <p>키워드로</p>
                                        <p>검색하기</p>
                                        </div>
                                </Title>
                            </BtnBottomRight>
                        </SearchBtn>

                        <KeywordBtn>
                            <BtnBox onClick={onClick4}>
                                <Title><div>
                                        <p>상품</p>
                                        <p>검색하기</p>
                                        </div>
                                </Title>
                            </BtnBox>
                        </KeywordBtn>
                    </SecondBox>
                </Box>
                <p>색 조합 추천해주세요</p>
            </Container>
        

        </>
    );
}

export default Home;
