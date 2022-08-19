// import { useEffect, useState } from 'react';
// import DetailView from './DetailView';
// import Recommendation from './Recommendation';

// function ProductInfo() {

//     const [loading, setLoading] = useState(true);
//     const [product, setProduct] = useState([]);
//     const getProduct = async() => {
//         const json = await (    
//             await fetch(
//                 `http://localhost:8000/results/`
//             )
//         ).json();
//         console.log(json)
//         setProduct(json)
//         setLoading(false);
//     };
//     useEffect(() => {
//        getProduct()
//     }, []);


//     return (
//         <>
//             <div>
//             {loading ? (
//                 <h1>Loading...</h1>
//             ) : (
//                 <div>
//                 {product.map((item) => (
//                     <Recommendation
//                     id={item.id}
//                     name={item.name}
//                     img={item.img}
//                     review={item.review}
//                     price={item.price}
//                     man={item.man}
//                     woman={item.woman}
//                     rating={item.rating}
//                     coordi={item.coordi}
//                     cosine_sim = {item.cosine_sim}
//                     />
//                     ))}

//                 {product.map((item) => (
//                     <DetailView 
//                     id={item.id}
//                     name={item.name}
//                     img={item.img}
//                     review={item.review}
//                     price={item.price}
//                     man={item.man}
//                     woman={item.woman}
//                     rating={item.rating}
//                     coordi={item.coordi}
//                     cosine_sim = {item.cosine_sim}
//                     />
//                 ))}
//                 </div>
//             )}
//             </div>
//         </>
//     );
// }

// export default ProductInfo;