package com.tomaszpakula.books;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/books")
@CrossOrigin(origins = "https://booklist-1-ns7d.onrender.com/")
public class BookController {
    @Autowired
    BookService bookService;

    @GetMapping()
    public ResponseEntity<List<Book>> getAllBooks(){
        return new ResponseEntity<>(bookService.allBooks(), HttpStatus.OK);
    }

    @GetMapping("/{key}")
    public ResponseEntity<Optional<Book>> getSingleBook(@PathVariable Integer key){
        return new ResponseEntity<>(bookService.singleBook(key), HttpStatus.OK);
    }

}

