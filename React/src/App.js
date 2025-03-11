import "./App.css";
import Books from "./Books";

import BookPage from './BookPage';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import React from 'react';


const App = () =>{

  const [books, setBooks] = React.useState([]);
//  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(()=>{
    fetch("http://localhost:8081/api/books")
    .then(response=>response.json())
    .then(data=>{
      setBooks(data);
      //setIsLoaded(true);
    })
  })


  const [displayBook, setDisplayBook] = React.useState(false);
  const [lastBook , setLastBook] = React.useState({});
  
  return (
    <SkeletonTheme baseColor='#202020' highlightColor='#444'>
      <div className = "app">
        <h1>Best Books Ever List</h1>
        {displayBook ? <BookPage book = {lastBook} setDisplayBook = {setDisplayBook} /> : ""}
        <Books books = {books} setDisplayBook = {setDisplayBook} setLastBook = {setLastBook}/>
        <footer>Author: Tomasz Pakuła</footer>
      </div>
    </SkeletonTheme>
  );
  }

export default App;
