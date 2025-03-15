import { Box, Paper, Typography } from "@mui/material";

const Reviews = (props) =>{
    return(
        <Box>
            <Typography variant="h5">Reviews: </Typography>
            {props.reviews.length !=0 ? props.reviews.map(review=><Review review = {review} key = {review.id.timestamp}/>): "Nie dodano jeszcze żadnej recenzji"}
        </Box>
    );
}

const Review = (props) =>{
    
    return(
        <Paper sx={{padding:2, marginBottom: 2}}>
            <Typography sx={{margin:2}}>{props.review.body}</Typography>
            <Typography>{props.review.id.date.split("T")[0]}</Typography> 
        </Paper>
    )
}

export default Reviews;