package com.tomaszpakula.books;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface BooksRepository extends MongoRepository<Book, ObjectId> {
    Optional<Book> findBookByKey(Integer key);
}
