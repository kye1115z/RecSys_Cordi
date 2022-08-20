import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';

const Container = styled.div`
    width: 430px;
    margin: 0 auto;
    padding-top: 44px;
    height: 700px;
`;

const Title = styled.div`
    width: 100%;
    height: 78px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid gray;

    font-size: 36px;
    font-weight: 400;
`;
const Box = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  border-bottom: 1px solid gray;

  padding-left: 20px;
  padding-right: 20px;
`;

const stylelist = [{id: "1", Img: "https://static.lookpin.co.kr/20210301163656-7cb2/090975809a1d8a1c520b08b9a6248bd9.jpg?resize=880", sname: '댄디', description: '흐린 날씨의 댄디함'},
                {id: "2", Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx3znK8-sksrkd13YERneLzdbY3V57wEi2pg&usqp=CAU", sname: '스트릿', description: '나에게 어울리는 스트릿'}
                            ];

const Imgbox = styled.div`
width: 60px;
height: 57px;
margin-right: 24px;

overflow: hidden;

`;                    
const Img = styled.img`
    width: 57px;
    height: 57px;
    border-radius: 50%;
    border: none;
    margin-right: 24px;

    position: absolute;

`;

const Textbox = styled.div`
    width: 100%;
    height: 60px;
    flex-direction: column;
    justify-content: center;
    display: flex;
    align-items: center;
`;

const Sname = styled.p`
    width: 100%;
    height: 20px;
    display: flex;
    align-items: center;
    padding-top: 10px;

    font-size: 15px;
    font-weight: bold;
`;

const Description = styled.p`
    width: 100%;
    height: 28px;
    display: flex;
    align-items: center;
    padding-bottom: 2px;

    font-size: 13px;
    font-weight: 200;
`;



function Custom() {
    return (
        <>
            <GlobalStyle />
            <Container>
                <Title>Custom</Title>
                    {stylelist.map((item, index) => (
                        <Box key={item.id}>
                            <Imgbox>
                                <Img src = {item.Img}></Img>
                            </Imgbox>
                            <Textbox>
                                <Sname>{item.sname}</Sname>
                                <Description>{item.description}</Description>
                            </Textbox>
                         </Box>

                        )
                    )}
            </Container>
        </>
    );
}

export default Custom;
