import styled from 'styled-components';
import { useState } from 'react';
import axios from 'axios';
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
    padding-left: 25px;
    padding-right: 25px;

`;

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
    height: 15px;
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    padding-left: 5px;
`;

const Subheading = styled.div`
    height: 13px;
    display: flex;
    align-items: center;
    font-size: 13px;
    font-weight: bold;
`; 

const TagBox = styled.div`
    width: 100%;
    height: 130px;
    margin-bottom: 20px; 
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
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 7px;
    padding-right: 7px;
    display: flex;
    align-items: center;

    font-size: 15px;
`;
const Tag = styled.input`
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
    margin-left: 5px;
`;

const InputBox = styled.div`
  width: 100%;
  height: 32px;
  display: flex;
  float: left;
  margin-bottom: 20px;
  justify-content: center;
`;
const InputText = styled.input`
  width: 52%;
  height: 30px;
  border: 2px solid black;
  padding-left: 10px;
  margin-right: 10px;

  font-size: 12px;
`;

const InputTopn = styled.input`
    width: 34%;
    height: 30px;
    border: 2px solid black;
    padding-left: 10px;

    font-size: 12px;
`

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
    width: 100%;
    height: 40px;
    background-color: black;
    border: none;
    border-radius: 4px;

    font-size: 15px;
    color: white;
`;

function Search() {
    const categorylist = [{id:1, fashion: "상의"}, {id:2, fashion: "원피스"}, {id:3, fashion:"하의"}, {id:4, fashion:"스커트"}, {id:5, fashion:"아우터"},
                      {id:6, fashion: "가방"}, {id: 7, fashion: "모자"}, {id:8, fashion: "신발"}, {id:9, fashion: "스니커즈"}, {id:10, fashion: "스포츠가방"},
                      {id:11, fashion: "스포츠모자"}, {id: 12, fashion: "스포츠신발"}
];
    const [fashion2, setFashion2] = useState([]);
    const [input_text, setInput_text] = useState('');
    const [topn, setTopn] = useState();
    console.log(fashion2);
    console.log(input_text)
    console.log(topn);

    //topn
    const handleChange = ({target: {value}}) => setTopn(value);
    
    //input 
    const [inputs, setInputs] = useState([]);

    const onCreate = () => {
      setInputs(inputs => [...inputs, input_text])
    };

    const onReset = () => {
        setInputs('')
    };


    const handleChange2 = (e) =>  {
        setInput_text(e.target.value);
    };


//submit
    const onSubmit = (e) =>  {   
        e.preventDefault();
        const getData = async () => {
            await axios
                .post('http://localhost:8000/img-predict/', {
                    main_category: fashion2.toString(),
                    input_text: input_text.toString(),
                    top_n: topn,
                })
                .then((response) => {
                    console.log(response.data)
                   if(response.data.name==="해당되는 추천이 없습니다. 다시 입력해주세요") {
                        alert("해당되는 추천이 없습니다. 다시 입력해주세요.")
                   } else {
                    alert("오래 기다리셨습니다!", response.data.name, response.data.time)
                    window.location.href="http://localhost:3000/recommendation"
                   }
                })
                .catch((err) => console.log(err));


            // if( !== undefined){
                // window.location.href="http://localhost:3000/recommendation"
                // }
            // else {
            // return null;
            // }
            // console.log("데이터", data);
        };
        getData();
    };
    
    //TAG 클릭 배열 삭제, 추가
    const [radiohandle, setRadiohandle] = useState("");
    const onChangeFa = (item) => {
        setRadiohandle(item)
        setFashion2(item)
    };

    return (
        <>
            <GlobalStyle />
            <Container>
                <NavHome />
                <SubContainer>
                <Title>키워드 검색</Title>
                <Box>
                    <Subheading>카테고리 선택</Subheading>
                </Box>
                <TagBox>
                {categorylist.map((item, index) =>
                    <TagLabel key={item.id} checked={fashion2.includes(item.fashion) ? true : false}>
                    <Tag
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
                <FormBox onSubmit={onSubmit}>
                    <InputBox>
                        <InputText value={input_text || ''} onChange={handleChange2} placeholder='키워드를 입력하세요.' />
                        <InputTopn value={topn || ''} onChange={handleChange} placeholder="Top N"/>
                    </InputBox>

                    <SubmitBox>
                        <Submit onClick={()=>{
                                        onCreate()
                                        onReset()}}>완료</Submit>
                    </SubmitBox>
                </FormBox>
                </SubContainer>
            </Container>
        </>
    );
}

export default Search;
