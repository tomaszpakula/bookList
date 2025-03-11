import "./Book.css";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css';

const Book = (props) => {
  const handleClick = () => {
    props.setLastBook(props.book);
    props.setDisplayBook(true);
  };

  return (
    <button className="book" onClick={handleClick}>
      <p>Title: {props.book.title }</p>
      <p>Author: {props.book.author}</p>
      <p>Page number: {props.book.pages}</p>
      <p>Year of release: {props.book.year}</p>
      <img src={props.book.imageLink} alt={props.book.title} />
    </button>
  );
};
export default Book;
