import Book from "./Book";
import BookSkeleton from "./BookSkeleton";
import Grid from "@mui/material/Grid2";

const Books = (props) => {
  return (
    <Grid
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      sx={{ paddingTop: 1 }}
    >
      {props.books.length > 0 ? (
        props.books.map((book) => (
          <Grid key={book.key} size={{ xs: 12, sm: 6, md: 4 }}>
            <Book
              book={book}
              setDisplayBook={props.setDisplayBook}
              setLastBook={props.setLastBook}
            />
          </Grid>
        ))
      ) : (
        <>
            <BookSkeleton />
            <BookSkeleton />
            <BookSkeleton />
        
        </>
      )}
    </Grid>
  );
};
export default Books;
