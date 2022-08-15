import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
// import { Helmet } from 'react-helmet';
import { useState} from 'react';

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
    height: 844px;
`;

const Title = styled.div`
    width: 100%;
    height: 100px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;

    font-size: 36px;
    font-weight: 400;
`;

const Box = styled.div`
    height: 15px;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`;

const Img = styled.div`
    width: 13px;
    height: 13px;
    border-radius: 50%;
    border: none;
    margin-right: 10px;

    background-color: #D9D9D9;
    span{
        font-size: 13px;
        font-weight: bold;
    }
`;

const Subheading = styled.div`
    height: 15px;
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: bold;
`; 


const TagBox = styled.div`
    width: 100%;
    height: 60px;
    margin-bottom: 20px;
    padding-left: 24px;  
`;

const Tag = styled.button`
    float:left;
    margin-right: 8px;
    margin-bottom: 5px;
    background-color: #E7E7E7;
    justify-content: center;
    border-radius: 4px;
    padding: 4px;
    border: none;

    font-size: 10px;
`;

const InputBox = styled.form`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Input = styled.input`
    width: 110px;
    height: 15px;
    padding: 10px;
    border: 2px solid black;
    margin-bottom: 20px;
    
    color: gray;
    font-size: 10px;
`;

const FormBox = styled.div`
    height: 100px;
`;

const SubmitBox = styled.form`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Submit = styled.button`
    width: 300px;
    height: 40px;
    background-color: black;
    border: none;
    border-radius: 4px;

    font-size: 15px;
    color: white;
`;

const categorylist = [{id:1, fashion: "상의"}, {id:2, fashion: "원피스"}, {id:3, fashion:"바지"}, {id:4, fashion:"스커트"}, {id:5, fashion:"아우터"},
                      {id:6, fashion: "가방"}, {id: 7, fashion: "모자"}, {id:8, fashion: "신발"}, {id:9, fashion: "스니커즈"}, {id:10, fashion: "스포츠가방"},
                      {id:11, fashion: "스포츠모자"}, {id: 12, fashion: "스포츠신발"}
];

const coordilist = [{id:1, coordi: "캐주얼"}, {id:2, coordi: "스트릿"}, {id:3, coordi: "유니크"}, {id:4, coordi: "포멀"}, {id:5, coordi: "댄디"},
                    {id:6, coordi: "레트로"}, {id:7, coordi: "로맨틱"}, {id:8, coordi: "아메카지"}, {id:9, coordi: "걸리시"}, {id:10, coordi: "스포츠"},
                    {id:11, coordi: "골프"}, {id:12, coordi: "홈웨어"}
];

const weatherlist = [{id:1, weather: "봄"}, {id:2, weather: "여름"}, {id:3, weather: "가을"}, {id:4, weather: "겨울"}, {id:5, weather: "바람"}
];






function SelectTag() {
    const [fashion2, setFashion2] = useState([]);
    const [coordi2, setCoordi2] = useState([]);
    const [weather2, setWeather2] = useState([]);
    const [topn, setTopn] = useState();
    console.log(fashion2);
    console.log(coordi2);
    console.log(weather2);
    console.log(topn);

    const handleChange = ({target: {value}}) => setTopn(value);

    const [data, setData] = useState();
    const onSubmit = () =>  {        
        const getData = async() => {
            const json = await (
                await fetch("http://localhost:8000/", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        "main_category": fashion2.join(","),
                        "coordi": coordi2.join(","),
                        "input_text": weather2.join(" "),
                        "top_n": topn,
                    })
            })
            ).json();
            setData(json.name);
            console.log("데이터", data);
        }
        getData();
    };
    return (
        <>
            <GlobalStyle />
            <Container>
                <Title>Select your Tag</Title>
                <Box>
                    <Img> </Img>
                    <Subheading>패션</Subheading>
                </Box>
                <TagBox>
                {categorylist.map((item, index) =>
                    <Tag onClick={()=>
                        {setFashion2(fashion2.concat(item.fashion))}} 
                        key={item.id}>
                            {item.fashion}
                    </Tag>
                    )}
                </TagBox>
                <Box>
                <Img> </Img>
                <Subheading>코디</Subheading>
                </Box>
                <TagBox>
                {coordilist.map((item, index) =>
                    <Tag onClick={()=>
                        {setCoordi2(coordi2.concat(item.coordi))}}
                        key={item.id}>
                            {item.coordi}
                    </Tag>
                    )}
                </TagBox>
                
                <Box>
                <Img> </Img>
                <Subheading>날씨</Subheading>
                </Box>
                <TagBox>
                {weatherlist.map((item, index) =>
                    <Tag onClick={()=>
                        {setWeather2(weather2.concat(item.weather))}}
                        key={item.id}>
                            {item.weather}
                    </Tag>
                    )}
                </TagBox>
                <FormBox onSubmit={onSubmit}>
                    <InputBox>
                        <Input value={topn || ''} onChange={handleChange} placeholder="Top N"/>
                    </InputBox>

                    <SubmitBox>
                        <Submit>완료</Submit>
                    </SubmitBox>
                </FormBox>
            </Container>
        </>
    );
}

export default SelectTag;
