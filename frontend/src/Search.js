import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

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
    padding-left: 40px;
    padding-right: 40px;
    height: 500px;
`;

const Title = styled.div`
    width: 100%;
    height: 100px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;

    font-size: 36px;
    font-weight: 400;
`;
const Box = styled.div`
  width: 100%;
  height: 55px;
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;
const Input = styled.input`
  height: 48px;
  border: 2px solid black;
  padding-left: 20px;

  font-size: 15px;
`;

function Search() {
    return (
        <>
            <GlobalStyle />
            <Container>
                <Title>Search</Title>
                <Box>
                    <Input placeholder='Search all photos' />
                </Box>
            </Container>
        </>
    );
}

export default Search;
