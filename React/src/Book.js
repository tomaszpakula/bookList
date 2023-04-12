import "./Book.css";
import BookPage from './BookPage';

const Books = (props) =>{
  return(
    <>
      <div id = "books">
        {props.books.map(book => <Book book = {book} key = {book.key} setDisplayBook = {props.setDisplayBook} setLastBook = {props.setLastBook}/>)}
      </div>
    </>
  );
}

const Book = (props) => {

    const handleClick = () =>{
      props.setLastBook(props.book);
      props.setDisplayBook(true);
    }

    return (
      <div className = "book" onClick = {handleClick}>
        <p>Title: {props.book.title}</p>
        <p>Author: {props.book.author}</p>
        <p>Page number: {props.book.pages}</p>
        <p>Year of release: {props.book.year}</p>
        <img src = {props.book.imageLink} />
      </div>
    )
  }
export default Books;