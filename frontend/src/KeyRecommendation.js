import styled from 'styled-components';
import { useState } from 'react';
import { Helmet, HelmetProvider } from "react-helmet-async";
import DetailView from './DetailView';
import GlobalStyle from './GlobalStyle';


const Container = styled.div`
    max-width: 480px;
    margin: 0 auto;
    padding-top: 10px;
    height: 844px;
`;

const Box = styled.div`
    width: 100%;
    height: 700px;
    padding-left: 5px;
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






function KeyRecommendation({name, product}) {


    console.log(product);
    const [clothes, setClothes] = useState({});
  
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

            <Container>
                <Box>
                {product&&product.map((item, index) =>
                <ImgBox key={index}>
                    <Img src={item.img} />
                    <Name onClick={(e) => {
                        setIsOpen(true);
                        setClothes(item);


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
                            product={clothes}
                        />
                        )}
                </Box>
            </Container>
        </>
    );
}

	
// Recommendation.propTypes = {
//     id: PropTypes.number.isRequired,
//   };

export default KeyRecommendation;
