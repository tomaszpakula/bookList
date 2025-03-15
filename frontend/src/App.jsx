import Books from "./Books";

import BookPage from './BookPage';
import React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Box, createTheme, CssBaseline, ThemeProvider, Typography } from "@mui/material";

const App = () =>{
  const apiUrl = process.env.REACT_APP_API_URL;
  const [books, setBooks] = React.useState([]);
  React.useEffect(()=>{
    fetch(`https://booklist-h75d.onrender.com/api/books`)
    .then(response=>response.json())
    .then(data=>{
      setBooks(data);
    })
  })


  const [displayBook, setDisplayBook] = React.useState(false);
  const [lastBook , setLastBook] = React.useState({});
  
  const darkTheme = createTheme({
    palette: {
      mode: 'dark'
    },
  });

  return (
    <ThemeProvider theme = {darkTheme}>
      <CssBaseline />
      <Box sx={{
        width: '80%',
        minHeight: '100vh',
        mx: 'auto',
        paddingTop: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around'
      }}>
        <Typography variant="h1" component="h2" sx={{textAlign: 'center'}}>Best Books Ever List</Typography>
        <BookPage book = {lastBook} setDisplayBook = {setDisplayBook} displayBook = {displayBook} />
        
        <Books books = {books} setDisplayBook = {setDisplayBook} setLastBook = {setLastBook}/>
  
        <Box sx={{padding: 2, textAlign: 'center'}}><footer>Author: Tomasz Pakuła</footer></Box>
      </Box>
      </ThemeProvider>
  );
  }

export default App;
