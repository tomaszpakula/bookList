import "./Reviews.css"
const Reviews = (props) =>{
    return(
        <div id = "reviews">
            <h1>Reviews: </h1>
            {props.reviews.length !=0 ? props.reviews.map(review=><Review review = {review} key = {review.id.timestamp}/>): "Nie dodano jeszcze żadnej recenzji"}
        </div>
    );
}

const Review = (props) =>{
    return(
        <p className = "review">{props.review.body}</p>
    )
}

export default Reviews;