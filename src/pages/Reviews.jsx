import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchReviewById } from "API/API";

export const Reviews = () => {
    const { movieId } = useParams();
    const[reviews,setReviews] = useState([]);

    useEffect(()=>{
        const getReview = async () => {
            try {
              const res = await fetchReviewById(movieId) 
              const {results} = res;
              setReviews(results)
             
            } catch (error) {
              console.log(error.message);
            }
          }
        getReview()
      },[movieId]);

    return(
       <>
       {reviews.length ? (
        <ul>{reviews.map(review => 
            <li key={review.id}>
                
                <h3>Author: {review.author}</h3>
                <p>{review.content}</p>
            </li>)}</ul> ) : (
               <p>This movie has no reviews</p> 
            )

       }
       </>
    )
}