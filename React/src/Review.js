import "./Reviews.css"
const Reviews = (props) =>{
    return(
        <div id = "reviews">
            <h1>Reviews: </h1>
            {Object.keys(props.reviews)!=0 ? props.reviews.map(review=><Review review = {review} key = {props.book.key}/>): "Nie dodano jeszcze żadnej recenzji"}
        </div>
    );
}

const Review = (props) =>{
    return(
        <p class = "review">{props.review.body}</p>
    )
}

export default Reviews;