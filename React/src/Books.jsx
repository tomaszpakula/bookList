import "./Book.css";
import Book from "./Book"
import BookSkeleton from "./BookSkeleton";
import { Suspense } from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css';


const Books = (props) =>{
  return(
    <div id = "books">
      {props.books.length > 0 ? props.books.map(book => <Book book = {book} key = {book.key} setDisplayBook = {props.setDisplayBook} setLastBook = {props.setLastBook}/>)
      : (
        <>
        <BookSkeleton />
        <BookSkeleton />
        <BookSkeleton />
        <BookSkeleton />
        </>
        )  
    }
      
    </div>
  );
}
export default Books;