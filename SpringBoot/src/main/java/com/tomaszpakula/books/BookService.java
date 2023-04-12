package com.tomaszpakula.books;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookService {
    @Autowired
    private BooksRepository booksRepository;

    public List<Book> allBooks(){
        return booksRepository.findAll();
    }

    public Optional<Book> singleBook(Integer key){
        return booksRepository.findBookByKey(key);
    }

}
