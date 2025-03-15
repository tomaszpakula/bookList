import React from "react";
import Reviews from "./Review";
import {
  Modal,
  Skeleton,
  IconButton,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
const BookPage = (props) => {
  const [book, setBook] = React.useState({});
  const apiUrl = process.env.REACT_APP_API_URL;
  React.useEffect(() => {
    if (!props.book?.key) return;
    fetch(`https://booklist-h75d.onrender.com/api/books/` + props.book.key)
      .then((response) => response.json())
      .then((data) => {
        setBook(data);
      });
  }, [props.book.key]);

  const [reviews, setReviews] = React.useState([]);

  React.useEffect(() => {
    if (!props.book?.key) return;
    fetch(`https://booklist-h75d.onrender.com//api/reviews/` + props.book.key)
      .then((response) => response.json())
      .then((data) => {
        setReviews(data);
      });
  }, [props.book.key]);

  const handleClose = () => {
    props.setDisplayBook(false);
  };

  return (
    <Modal open={props.displayBook} onClose={handleClose}>
      {book ? (
        <Card
          sx={{
            width: {
              xs: "100%",
              sm: "90%",
              md: "60%",
              lg: "50%"
            },
            maxHeight:'80%',
            display: "flex",
            padding: 6,
            justifyContent: "space-between",
            position: 'relative',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            overflow: 'auto',
          }}
        >
          <CardContent sx={{ padding: 3, width: "50%" }}>
            <IconButton
              onClick={handleClose}
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
              }}
            >
              <CloseIcon />
            </IconButton>
            <Typography variant = "h5">Title: {book.title || <Skeleton />}</Typography>
            <Typography variant = "h6">Author: {book.author || <Skeleton />}</Typography>
            <Typography>Country of release: {book.country || <Skeleton />}</Typography>
            <Typography>Year of release: {book.year || <Skeleton />}</Typography>
            <Typography>
              <a href={book.link || <Skeleton />}>Link for more info</a>{" "}
            </Typography>
            <Reviews reviews={reviews} book={book} />
          </CardContent>
          {book?.title ? (
            <CardMedia
              sx={{ width: 150, height: 190, marginTop: 3 }}
              image={book.imageLink}
              title={book.title}
            />
          ) : (
            <Skeleton />
          )}
        </Card>
      ) : (
        <Skeleton />
      )}
    </Modal>
  );
};
export default BookPage;
