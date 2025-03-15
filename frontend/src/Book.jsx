import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const Book = (props) => {
  const handleClick = () => {
    props.setLastBook(props.book);
    props.setDisplayBook(true);
  };

  return (
    <Card
      variant="outlined"
      sx={{
        padding: 2,
        minHeight: 400,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        '&:hover': {
          transform: 'scale(1.05)',  // Powiększenie karty
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',  // Dodanie cienia
          cursor: 'pointer'
        },
      }}
      onClick={handleClick}
    >
      <CardContent sx={{ textAlign: "center" }}>
        <Typography variant="h5">{props.book.title}</Typography>
        <Typography variant="h6">Author: {props.book.author}</Typography>
        <Typography variant="body1">Page number: {props.book.pages}</Typography>
        <Typography variant="body1">
          Year of release: {props.book.year}
        </Typography>
      </CardContent>
      <CardMedia
        sx={{
          height: 200,
          width: 200,
          position: "relative",
          left: "50%",
          transform: "translateX(-50%)",
        }}
        image={props.book.imageLink}
        title={props.book.title}
      ></CardMedia>
    </Card>
  );
};
export default Book;
