import { useParams } from "react-router-dom";
import { fetchById } from "API/API";

export const MovieDetails = () => {
    const { movieId } = useParams();
    console.log(movieId);
    const movie = fetchById(movieId);
    return (
        <>
        <div>{movie}</div>
        <div>Now showing product with movieId - {movieId}</div>;
        </>
    )
  };

//   const ProductDetails = () => {
//     const { productId } = useParams();
//     return <div>Now showing product with id - {productId}</div>;
//   };


 

// export const ProductDetails = () => {
//   const { id } = useParams();
//   const product = getProductById(id);
//   return (
//     <main>
//       <img src="https://via.placeholder.com/960x240" alt="" />
//       <div>
//         <h2>
//           Product - {product.name} - {id}
//         </h2>
//         <p>
//           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
//           sunt excepturi nesciunt iusto dignissimos assumenda ab quae cupiditate
//           a, sed reprehenderit? Deleniti optio quasi, amet natus reiciendis
//           atque fuga dolore? Lorem, ipsum dolor sit amet consectetur adipisicing
//           elit. Impedit suscipit quisquam incidunt commodi fugiat aliquam
//           praesentium ipsum quos unde voluptatum?
//         </p>
//       </div>
//     </main>
//   );
// };