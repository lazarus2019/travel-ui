import {useState} from 'react'
import { useSelector } from "react-redux";
import ReviewBody from "./ReviewBody";

function Reviews() {
  const [heading] = useState("What our customers are saying?");
  const reviewsData = useSelector((state) => state.share.reviews);
  return (
    <div className="reviews">
      <div className="container">
        <h2 className="heading headingAnimation">{heading}</h2>
        <div className="row mr-minus-15 ml-minus-15">
          {reviewsData.length > 0
            ? reviewsData.map((review) => (
                <ReviewBody review={review} key={review.id} />
              ))
            : ""}
        </div>
      </div>
    </div>
  );
}

export default Reviews;
