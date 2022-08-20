import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { Helmet, HelmetProvider } from "react-helmet-async";
import DetailView from './DetailView';
import NavRecommendation from './NavRecommendation';
import axios from 'axios';
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
    width: 97%;
    height: 60px;
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid lightgray;
    padding-left: 2px;

    font-size: 30px;
    font-weight: bolder;
`;

// const FilterBox = styled.div`
//     width: 100%;
//     height: 40px;
//     display: flex;
//     align-items: center;
//     justify-content: right;
//     margin-bottom: 20px;
// `;

// const Filterbtn = styled.button`
//     width: 23px;
//     height: 23px;
//     border-radius: 4px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     border: 3px;
//     border-color: black;
//     background-color: ${props => props.color};;
//     margin-right: 10px;

//     font-size: 10px;
// `;


const Box = styled.div`
    width: 100%;
    height: 700px;
    padding-left: 3px;
`;
const ImgBox = styled.div`
    width: 100px;
    height: 173px;
    padding-top: 3px;
    padding-left: 3px;
    padding-right: 3px;
    box-shadow:0px 0px 4px 0.5px gray;
    margin-bottom: 10px;
    margin-right: 10px;
    flex-direction: column;
    float: left;
    
`;

const Img = styled.img`
    width: 100px;
    height: 120px;
    border: none;
    object-fit: cover;
`;

const Name = styled.button`
    width: 100px;
    height: 50px;
    font-size: 10px;
    font-weight: bold;
    border: none;
    background-color: white;
    text-align: left;
    display: flex;
    justify-content: left;
    align-items: top;
    padding-top: 6px;
`;

const Loading = styled.div`
    width: 100%;
    height: 800px;
    display: flex;
    align-items: center;
    justify-content: center;

    span{
        font-size: 70px;
        color: black;
    }
`;

//드롭다운
const DropBox = styled.div`
    width: 97%;
    user-select: none;
    position: relative;
`;

const DropdownBtn = styled.button`
    width: 100%;
    height: 40px;
    padding: 15px 20px;
    background-color: #fff;
    border: none;
    box-shadow: 3px 3px 10px 6px rgba(0, 0, 0, 0.06);
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;

    font-weight: bold;
    color: #333;
`

const DropContent = styled.div`
    width: 95%;
    position: absolute;
    top: 110%;
    padding: 10px;
    background: #fff;
    box-shadow: 3px 3px 10px 6px rgba(0, 0, 0, 0.06);
    z-index: 1;

    font-weight: 500;
    color: #333;
`;

const DropItem = styled.div`
    padding: 10px;
    cursor: pointer;
    transition: all 0.2s;

    &:hover{
        background-color: #f4f4f4;
    }
`;







function Recommendation() {

    // if(selected === "없음") {
    //     getProduct()
    // } else if (selected === "전체 별점순") {
    //     getRating()
    // } else if (selected === "남자 별점순") {
    //     getMan()
    // } else if (selected === "여자 별점순") {
    //     getWoman()
    // }

    //드롭다운
    const [isActive, setIsActive] = useState(false);

    const [selected, setSelected] = useState("");

    const options = [{id: "", value:'-'},
                     {id: "?ordering=-rating", value:'전체 별점순'},
                     {id: "?ordering=-man", value:'남자 별점순'},
                     {id: "?ordering=-woman", value:'여자 별점순'},
                    {id: "?ordering=-cosine_sim", value:'유사도 높은 순'}, 
                    {id: "?ordering=cosine_sim", value:'유사도 낮은 순'}];
    

    const [query, setQuery] = useState("");

    //post
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState([]);
    const [id, setId] = useState({});

    const getProduct = async() => {
        const json = await (    
            await fetch(
                `http://localhost:8000/results/${query}`
            )
        ).json();
        setProduct(json)
        setLoading(false);
    };
    useEffect(()=>{
        getProduct()
    })
    
    //getID
        const getID = (id) => {axios.get(
            `http://localhost:8000/results/${id}`
        )
            .then((response)=>setId(response.data))
        }

    //모달
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <GlobalStyle />
            <HelmetProvider>
                <Helmet>
                <link rel="stylesheet" 
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
                </Helmet>
            </HelmetProvider>

            {loading ? (<Loading>
                            <span className="material-symbols-outlined">autorenew</span>
                        </Loading>
            ) : (
            <Container>
                <NavRecommendation />
                <SubContainer>
                <Title>Recommendation</Title>
                {/* <FilterBox>
                    <Filterbtn color={mancolor} onClick={onManClick}>남</Filterbtn>
                    <Filterbtn color={womancolor} onClick={onWomanClick}>여</Filterbtn>
                </FilterBox> */}
                {/* <Dropdown /> */}
                <DropBox>
                    <DropdownBtn onClick={(e)=>{
                        setIsActive(!isActive);
                    }}>{selected}
                        <span className="material-symbols-outlined">arrow_drop_down</span>
                    </DropdownBtn>
                    {isActive && (
                        <DropContent>
                            {options.map(option => (
                                <DropItem onClick={(e) => {
                                    setSelected(option.value)
                                    setQuery(option.id)
                                    setIsActive(false)
                                    }} >
                                        {option.value}
                                </DropItem>
                            ))}
                        </DropContent>
                    )}
                </DropBox>
                <Box>
                {product&&product.map((item, index) =>
                <ImgBox key={index}>
                    <Img src={item.img} />
                    <Name onClick={(e) => {
                        setIsOpen(true);
                        getID(item.id);

                    }}>{item.name.length > 30 ? `${item.name.slice(0, 30)}...` : item.name}</Name>
                    {/* <DetailView open={setModalOpen} close={onClose}></DetailView> */}
                </ImgBox>
                    )}
                   {isOpen && (
                            <DetailView 
                            open={isOpen}
                            onClose={()=> {
                                setIsOpen(false);
                            }}
                            product={id}
                        />
                        )}
                </Box>
                </SubContainer>
            </Container>
            )}
        </>
    );
}

	
// Recommendation.propTypes = {
//     id: PropTypes.number.isRequired,
//   };

export default Recommendation;
