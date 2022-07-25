import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {IoIosArrowBack} from 'react-icons/io'   
import {BiSearch} from 'react-icons/bi'
import {BiShoppingBag} from 'react-icons/bi'
import styled from 'styled-components';

const MypageImg = styled.img`
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: none;
    position: absolute;
`;

function NavFavo() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
            <Navbar.Brand href="/register"><IoIosArrowBack className="icon" size="18" color="black" /></Navbar.Brand>
            <Nav.Link href="/register">Favorites</Nav.Link>
            <Nav.Link href="/search"><BiSearch className="icon" size="15" color="black" /></Nav.Link>
            <Nav.Link href="/custom"><BiShoppingBag className="icon" size="15" color="black" /></Nav.Link>
            <Nav.Link href="/custom"><MypageImg src = "https://post-phinf.pstatic.net/MjAyMTAzMzFfMTMg/MDAxNjE3MTgyNDY5OTQ2.7lToiE1uDhnZ60mKOC8ZdK3xe9PVOx2pNdefS_afqdkg.hiWgkZfjEygAmhUuHcpv61eB80v3pOgS8_3ph8bQ_Ywg.JPEG/%EA%BC%AC%EB%A6%AC%EC%95%BC_%281%29.jpg?type=w1200"></MypageImg></Nav.Link>

        </Container>
      </Navbar>
    </>
  );
}

export default NavFavo;