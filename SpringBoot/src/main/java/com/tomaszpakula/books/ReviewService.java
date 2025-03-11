package com.tomaszpakula.books;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ReviewService {

    @Autowired
    private ReviewRepository reviewRepository;
    @Autowired
    private MongoTemplate mongoTemplate;

    @Autowired
    private BookService bookService;

    public Review createReview(String reviewBody, Integer key){
        Review review = reviewRepository.insert(new Review(reviewBody));
        mongoTemplate.update(Book.class)
                .matching(Criteria.where("key").is(key))
                .apply(new Update().push("reviewIds").value(review))
                .first();

        return review;
    }

    public Optional<Review> singleReview(ObjectId reviewId){
        return reviewRepository.findById(reviewId);
    }


    public /*List<Optional<Review>>*/ List<Review> getReviews(Integer bookKey){
        Optional<Book> books = bookService.singleBook(bookKey);
        /*List<Optional<Review>> reviews = new ArrayList<>();*/
        List<Review> reviewIds = new ArrayList<>();
        books.ifPresent(book -> reviewIds.addAll(book.getReviewIds()));
        return reviewIds;
    }
}
