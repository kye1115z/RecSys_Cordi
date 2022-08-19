// import styled from 'styled-components';
// import { createGlobalStyle } from 'styled-components';
// import { Helmet, HelmetProvider } from "react-helmet-async";
// import { useLocation } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import qs from "query-string";
// import axios from 'axios';



// const GlobalStyle = createGlobalStyle`
// html, body, div, span, applet, object, iframe,
// h1, h2, h3, h4, h5, h6, p, blockquote, pre,
// a, abbr, acronym, address, big, cite, code,
// del, dfn, em, img, ins, kbd, q, s, samp,
// small, strike, strong, sub, sup, tt, var,
// b, u, i, center,
// dl, dt, dd, ol, ul, li,
// fieldset, form, label, legend,
// table, caption, tbody, tfoot, thead, tr, th, td,
// article, aside, canvas, details, embed, 
// figure, figcaption, footer, header, hgroup, 
// menu, nav, output, ruby, section, summary,
// time, mark, audio, video {
// 	margin: 0;
// 	padding: 0;
// 	border: 0;
// 	font-size: 100%;
// 	font: inherit;
// 	vertical-align: baseline;
// }
// /* HTML5 display-role reset for older browsers */
// article, aside, details, figcaption, figure, 
// footer, header, hgroup, menu, nav, section {
// 	display: block;
// }
// body {
// 	line-height: 1;
// }
// ol, ul {
// 	list-style: none;
// }
// blockquote, q {
// 	quotes: none;
// }
// blockquote:before, blockquote:after,
// q:before, q:after {
// 	content: '';
// 	content: none;
// }
// table {
// 	border-collapse: collapse;
// 	border-spacing: 0;
// }
// `;

// const Container = styled.div`
//     width: 100%;
//     height: 65px;
// `;

// const DropBox = styled.div`
//     width: 100%;
//     user-select: none;
//     position: relative;
// `;

// const DropdownBtn = styled.button`
//     width: 100%;
//     height: 40px;
//     padding: 15px 20px;
//     background-color: #fff;
//     border: none;
//     box-shadow: 3px 3px 10px 6px rgba(0, 0, 0, 0.06);
//     display: flex;
//     align-items: center;
//     justify-content: space-between;

//     font-weight: bold;
//     color: #333;
// `

// const DropContent = styled.div`
//     width: 95%;
//     position: absolute;
//     top: 110%;
//     padding: 10px;
//     background: #fff;
//     box-shadow: 3px 3px 10px 6px rgba(0, 0, 0, 0.06);
//     z-index: 1;

//     font-weight: 500;
//     color: #333;
// `;

// const DropItem = styled.div`
//     padding: 10px;
//     cursor: pointer;
//     transition: all 0.2s;

//     &:hover{
//         background-color: #f4f4f4;
//     }
// `;





// function Dropdown() {

//     const [isActive, setIsActive] = useState(false);

//     const [selected, setSelected] = useState("");

//     const options = [{id: "", value:'없음'},
//                      {id: "?ordering=-man", value:'전체 별점순'},
//                      {id: "?ordering=-woman", value:'남자 별점순'},
//                      {id: "?ordering=-rating", value:'여자 별점순'}];
    
//     // const ordering = ['', '?ordering=-man', '?ordering=-woman', '?ordering=-rating']

//     const [query, setQuery] = useState("");

//     const [man, setMan] = useState([]);
//     const getMan = async() => {
//         const json = await (    
//             await fetch(
//                 `http://localhost:8000/results/${query}`
//             )
//         ).json();
//         setMan(json)
//     };

//     // //여자
//     // const [woman, setWoman] = useState([]);
//     // const getWoman = async() => {
//     //     const json = await (    
//     //         await fetch(
//     //             `http://localhost:8000/results/?ordering=-woman`
//     //         )
//     //     ).json();
//     //     setWoman(json)
//     // };

//     // //별점
//     // const [rating, setRating] = useState([]);
//     // const getRating = async() => {
//     //     const json = await (    
//     //         await fetch(
//     //             `http://localhost:8000/results/?ordering=-rating`
//     //         )
//     //     ).json();
//     //     setRating(json)
//     // };
    

//     return (
//         <>
//             <GlobalStyle />
//             <HelmetProvider>
//                 <Helmet>
//                 <link rel="stylesheet" 
//                     href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
//                 </Helmet>
//             </HelmetProvider>
//             <Container>
//                 <DropBox>
//                     <DropdownBtn onClick={(e)=>{
//                         setIsActive(!isActive);
//                     }}>{selected}
//                         <span className="material-symbols-outlined">arrow_drop_down</span>
//                     </DropdownBtn>
//                     {isActive && (
//                         <DropContent>
//                             {options.map(option => (
//                                 <DropItem onClick={(e) => {
//                                     setSelected(option.value)
//                                     setQuery(option.id)
//                                     setIsActive(false)
//                                     }} >
//                                         {option.value}
//                                 </DropItem>
//                             ))}
//                         </DropContent>
//                     )}
//                 </DropBox>
//             </Container>


//         </>
//     );
// }


// export default Dropdown;
