import React from 'react';
import "./BookPage.css";
import Reviews from './Review';


const BookPage = (props) => {

    const [book, setBook] = React.useState({});
   
    React.useEffect(()=>{
      fetch("http://localhost:8081/api/books/"+ props.book.key)
      .then(response=>response.json())
      .then(data=>{
        setBook(data)
      })
    }, [props.book.key])
    
    const [reviews, setReviews] = React.useState([]);

    React.useEffect(()=>{
      fetch("http://localhost:8081/api/reviews/"+ props.book.key)
      .then(response=>response.json())
      .then(data=>{
        setReviews(data);
      })
    }, [props.book.key])

    const handleClick = () => {
      props.setDisplayBook(false);
    }

    return (
        <>
          <div id = "bookPageBg"></div>
          <div id = "bookPage">
              <i className="bi bi-x-lg" onClick={handleClick}></i>
              <div id = "text">
                  <h1>Title: {book.title}</h1>
                  <h2>Author: {book.author}</h2>
                  <p>Country of release: {book.country}</p>
                  <p>Year of release: {book.year}</p>
                  <p><a href = {book.link}>Link for more info</a> </p>
                  <Reviews reviews = {reviews} book = {book}/>
              </div>
              <img src = {book.imageLink}></img>
          </div>
        </>
    );
  
}
export default BookPage;
