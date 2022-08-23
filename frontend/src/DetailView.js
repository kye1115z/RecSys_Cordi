import styled from 'styled-components';
import StarRating from './StarRating';
import { Helmet, HelmetProvider } from "react-helmet-async";
import GlobalStyle from './GlobalStyle';

const Overlay = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Box = styled.div`
    float:left;
    padding: 10px;
    border-radius: 15px;
    box-shadow:0 2px 13px rgba(0, 0, 0, 0.25);
    background-color: #fff;
`;

const CloseBox = styled.div`
    width: 100%;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
`;

const Close = styled.button`
    width: 80px;
    height: 20px;
    border-radius: 20px;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;

    color: white;
    font-size: 15px;

    span   {
        color: white;
        font-size: 20px;
    }
`


const ImgBox = styled.div`
    width: 270px;
    height: 270px;
    display: flex;
    justify-content: center;
    margin-bottom: 17px;
    padding-top: 3px;

`;

const Img = styled.img`
    width: 260px;
    height: 270px;
    object-fit: cover;
    border-radius: 15px;
    box-shadow: 1px 1px 4px 2px rgba(0, 0, 0, 0.25);
`;

const Description = styled.div`
    width: 100%;
    height: 300px;
    padding-left: 10px;
`;

const Category = styled.div`
    width: 255px;
    height: 13px;
    display: flex;
    align-items: center;
    margin-bottom: 5px;

    font-size: 12px;
    color: #BFBFBF;
`;

const Name = styled.div`
    width: 255px;
    height: 40px;
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    line-height: 130%;
    font-size: 15px;
    font-weight: bold;
`;

const Price = styled.div`
    width: 255px;
    height: 20px;
    border-bottom: 1px solid gray;
    margin-top: 10px;
    margin-bottom: 3px;
    padding-bottom: 5px;

    font-size: 15px;
    font-weight: bold;
`;

const Title = styled.div`
    height: 30px;
    margin-bottom: 3px;
    display: flex;
    align-items: center;

    font-size: 15px;
    font-weight: bold;
`;

const Rating = styled.div`
    width: 100px;
    height: 13px;
    margin-left: 2px;
    padding-top: 1.5px;

    font-size: 13px;
    font-weight: bold;
`;

const MiniBox = styled.div`
    width: 255px;
    height: 20px;
    display: flex;
    margin-bottom: 5px;
`;


const Profile = styled.div`
    width: 20px;
    height: 20px; 
    border-radius: 50%;
    margin-right: 5px;
    span {
        font-size: 20px;
    }
`;

const User = styled.div`
    width: 200px;
    height: 20px;
    display: flex;
    align-items: center;

    font-size: 15px;
    font-weight: bold;
`
const Review = styled.div`
    width: 230px;
    max-height: 144px;
    padding-left: 22px;
    float:left;
    font-size: 15px;
    line-height: 120%;
    overflow: scroll;
`;



function DetailView({onClose, product}) {

    //Modal
    const handleClose = () => {
        onClose?.();
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
            <Overlay>
                <Box>
                    <CloseBox>
                        <Close onClick = {handleClose}>
                        <span className="material-symbols-outlined">close</span>
                        close
                        </Close>
                    </CloseBox>
                    <ImgBox>
                        <Img src={product.img} />
                    </ImgBox>
                    <Description> 
                        <Category>{product.coordi}</Category>
                        <Name>{product.name}</Name>
                        <MiniBox>
                            <StarRating value={product.rating}/>
                            <Rating>{(product.rating*10).toFixed()/10}</Rating>
                        </MiniBox>
                        <Price>{product.price}</Price>
                        <Title>구매후기</Title>
                        <MiniBox>
                            <Profile>
                            <span className="material-symbols-outlined">account_circle</span>
                            </Profile>
                            <User>User</User>
                        </MiniBox>
                        <Review>
                            {/* {product.review.length() > 170 ? `${product.review.slice(0, 170)}...` : product.review} */}
                            {product.review}
                        </Review>
                    </Description>

                </Box>
            </Overlay>

        </>
    );
}

// ProductInfo.propTypes = {
//     id: PropTypes.number.isRequired,
// };
export default DetailView;
