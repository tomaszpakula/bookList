package com.tomaszpakula.books;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@CrossOrigin(origins = "https://booklist-1-ns7d.onrender.com/")
@RestController
@RequestMapping("/api/reviews")
public class ReviewController {
    @Autowired
    private ReviewService reviewService;

    @PostMapping
    public ResponseEntity<Review> createReview(@RequestBody Map<String, String> payload){
        return new ResponseEntity<>(reviewService.createReview(payload.get("reviewBody"), Integer.valueOf(payload.get("key"))), HttpStatus.OK);
    }

    @GetMapping("/{bookKey}")
    public ResponseEntity<List<Review>> reviews(@PathVariable Integer bookKey ){

        return new ResponseEntity<>(reviewService.getReviews(bookKey), HttpStatus.OK);
    }
}
