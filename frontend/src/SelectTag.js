import styled from 'styled-components';
// import { Helmet } from 'react-helmet';
import { useState } from 'react';
import axios from 'axios';
import NavHome from './NavHome';
import { Helmet, HelmetProvider } from "react-helmet-async";
import GlobalStyle from './GlobalStyle';

const Container = styled.div`
    max-width: 480px;
    margin: 0 auto;
    padding-top: 10px;;
    height: 844px;
    padding-left: 15px;
    padding-right: 15px;
    overflow: scroll;
`;

const SubContainer = styled.div`
    max-width: 480px;
    padding-left: 25px;
    padding-right: 25px;

`

const Title = styled.div`
    width: 100%; 
    height: 60px;   
    margin-top: 20px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid lightgray;
    margin-bottom: 20px;
    padding-left: 2px;

    font-size: 30px;
    font-weight: bolder;
`;

const Box = styled.div`
    height: 15px;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`;

const Img = styled.div`
    width: 14px;
    height: 14px;
    border-radius: 25%;
    box-shadow: 1px 1px 2px 0.3px;
    margin-right: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    span{
        font-size: 14px;
        color: #303030;
        font-weight: 300;
    }
`;

const Subheading = styled.div`
    height: 15px;
    display: flex;
    align-items: center;
    font-size: 13px;
    font-weight: bold;
`; 


const TagBox = styled.div`
    width: 95%;
    height: 130px;
    margin-bottom: 20px;
    padding-left: 20px;  
    vertical-align: middle;
`;

const TagLabel = styled.div`
    width: fit-content;
    float: left;
    margin-right: 8px;
    margin-bottom: 5px;
    background-color: white;
    border: 2px solid ${props => props.checked ? "black" : "rgb(240, 240, 240)"};
    justify-content: center;
    border-radius: 5px;
    padding-top: 4px;
    padding-bottom: 4px;
    padding-left: 7px;
    padding-right: 7px;
    display: flex;
    align-items: center;

    font-size: 10px;
    color: gray;
`;

const TagInput = styled.input`
    width: 13px;
    height: 13px;
    appearance: none;
    border-radius: 50%;
    background-color: rgb(240, 240, 240);
    margin: 0px;

    &:checked {
        background-color: transparent;

        background-size: 100% 100%;
        background-image: 
        url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
        background-position: 50%;
        background-repeat: no-repeat;
        background-color: black;
    }
`;


const TagText = styled.div`
    font-size: 10px;
    margin-left: 6px;
`;

const InputBox = styled.form`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;

`;

const Input = styled.input`
    width: 33%;
    height: 30px;
    padding-left: 15px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border: 2px solid black;
    border-right: 2px solid black;
    
    color: gray;
    font-size: 12px;
`;

const FormBox = styled.div`
    height: 100px;
`;


const Submit = styled.button`
    width: 15%;
    height: 36px;
    background-color: black;
    border: 2px solid black;
    border-left: 1px solid black;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;

    span{
        font-size: 27px;
        color: white;
    }
`;



function SelectTag() {

    const categorylist = [{id:1, fashion: "상의"}, {id:2, fashion: "원피스"}, {id:3, fashion:"하의"}, {id:4, fashion:"스커트"}, {id:5, fashion:"아우터"},
                      {id:6, fashion: "가방"}, {id: 7, fashion: "모자"}, {id:8, fashion: "신발"}, {id:9, fashion: "스니커즈"}, {id:10, fashion: "스포츠가방"},
                      {id:11, fashion: "스포츠모자"}, {id: 12, fashion: "스포츠신발"}
];

    const coordilist = [{id:1, coordi: "캐주얼", value: "캐주얼"}, {id:2, coordi: "스트릿", value: "스트릿"}, {id:3, coordi: "유니크", value: "유니크"}, {id:4, coordi: "포멀", value: "포멀"}, {id:5, coordi: "댄디", value: "댄디"},
                        {id:6, coordi: "레트로", value: "레트로"}, {id:7, coordi: "로맨틱", value: "로맨틱"}, {id:8, coordi: "아메카지", value: "아메카지"}, {id:9, coordi: "걸리시", value: "걸리시"}, {id:10, coordi: "스포츠", value: "스포츠"},
                        {id:11, coordi: "골프", value: "골프"}, {id:12, coordi: "홈웨어", value: "홈웨어"}, {id: 13, coordi: "선택안함", value: ""}
    ];

    const detailList = [{id:1, detail: "봄", value: "봄"}, {id:2, detail: "여름", value: "여름"}, {id:3, detail: "가을", value: "가을"}, {id:4, detail: "겨울", value: "겨울"}, 
                        {id:5, detail: "사이즈", value: "사이즈"}, {id: 6, detail: "오버", value: "오버"}, {id: 7, detail: "와이드", value: "와이드"}, {id: 8, detail: "기장", value: "기장"}, {id: 9, detail: "디자인", value: "디자인"},
                        {id: 10, detail: "재질", value: "재질"}, {id: 11, detail: "원단", value: "원단"}, {id: 12, detail: "가성비", value: "가성"}
    ];

    //체크된 요소들 담는 곳
    const [fashion2, setFashion2] = useState([]);
    const [coordi2, setCoordi2] = useState([]);
    const [detail2, setDetail2] = useState([]);
    const [topn, setTopn] = useState();
    console.log(fashion2);
    console.log(coordi2);
    console.log(detail2);
    console.log(topn);

    //topn 변화 관리
    const handleChange = ({target: {value}}) => setTopn(value);

    // const [data, setData] = useState();
    const onSubmit = (e) =>  {   
        e.preventDefault();
        const getData = async () => {
            await axios
                .post('http://localhost:8000/predict/', {
                    main_category: fashion2.toString(),
                    coordi: coordi2.toString(),
                    input_text: detail2.join(' '),
                    top_n: topn,
                })
                .then((response) => {
                    console.log(response.data)
                    if(response.data.name==="해당되는 추천이 없습니다. 다시 입력해주세요") {
                        alert("해당되는 추천이 없습니다. 다시 입력해주세요.")
                   } else {
                    alert("오래 기다리셨습니다!")
                    window.location.href="http://localhost:3000/recommendation"
                   }
                })
                .catch((err) => console.log(err));

            // if( !== undefined){
                // }
            // else {
            // return null;
            // }
            // console.log("데이터", data);
        };
        getData();
    };



    //체크박스 선택 되었는지 아닌지
    // const [tagActive, setTagActive] = useState(false);

    // const toggleActive = ({target}) =>  {
    //     setTagActive((tagActive)=>!tagActive)
    // };
    
    //변화감지(체크여부), 필요한 값 받아오기
    const [radiohandle, setRadiohandle] = useState([]);
    const onChangeFa = (item) => {
        setRadiohandle(item)
        setFashion2(item)
    };

    const onChangeCo = (checked, item) => {
        if(checked) {
            setCoordi2([...coordi2, item]);

        } else if (!checked && coordi2.includes(item)) {
           console.log(setCoordi2(coordi2.filter((el => el !== item))));

        }
    };

    const onChangeDe = (checked, item) => {
        if(checked) {
            setDetail2([...detail2, item]);

        } else if (!checked && detail2.includes(item)) {
           console.log(setDetail2(detail2.filter((el => el   !== item))));

        }
    };


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
                    <Title>태그를 선택하세요</Title>
                    <Box>
                        <Img>
                            <span className="material-symbols-outlined">laundry</span>
                        </Img>
                        <Subheading>패션</Subheading>
                    </Box>
                    <TagBox>
                    {categorylist.map((item, index) =>
                        <TagLabel key={item.id} checked={fashion2.includes(item.fashion) ? true : false}>
                            <TagInput
                                type="radio"
                                value={item.fashion} 
                                // onClick={() => {toggleActive()}}
                                onChange={(e) => {
                                    onChangeFa(e.target.value)
                                }}
                                checked={radiohandle === item.fashion}
                                />
                            <TagText>{item.fashion}</TagText>
                        </TagLabel>
                        )}
                    </TagBox>
                    
                    <Box>
                    <Img>
                        <span className="material-symbols-outlined">styler</span>
                    </Img>
                    <Subheading>코디</Subheading>
                     </Box>
                    <TagBox>
                     {coordilist.map((item, index) =>
                     <TagLabel key={item.id} checked = {coordi2.includes(item.coordi) ? true : false}>
                            <TagInput
                                type="checkbox"
                                value={item.coordi} 
                                // onClick={() => {toggleActive()}}
                                onChange={(e) => {
                                    onChangeCo(e.target.checked, e.target.value)
                                }} 
                                checked = {coordi2.includes(item.coordi) ? true : false}
                                />
                                    <TagText>{item.coordi}</TagText>
                        </TagLabel>
                    )}
                    </TagBox>
                    <Box>

                    <Img> 
                        <span className="material-symbols-outlined">more</span>
                    </Img>
                    <Subheading>More</Subheading>
                    </Box>
                    <TagBox>
                        {detailList.map((item, index) =>
                        <TagLabel key={item.id} checked = {detail2.includes(item.detail) ? true : false}>
                            <TagInput
                                type="checkbox"
                                value={item.detail} 
                                // onClick={() => {toggleActive()}}
                                onChange={(e) => {
                                    onChangeDe(e.target.checked, e.target.value)
                                }} 
                                checked = {detail2.includes(item.detail) ? true : false}
                                />
                                    <TagText>{item.detail}</TagText>
                        </TagLabel>
                    )}
                    </TagBox>

                    <FormBox onSubmit={onSubmit}>
                        <InputBox>
                            <Input value={topn || ''} onChange={handleChange} placeholder="Top N"/>
                            <Submit>
                                <span className="material-symbols-outlined">manage_search</span>
                            </Submit>
                        </InputBox>
                    </FormBox>
                </SubContainer>
            </Container>
        </>
    );
}
export default SelectTag;
