package com.tomaszpakula.books;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;
import java.util.List;

@Document(collection = "books")
@Data
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Book {
    @Id
    private ObjectId id;
    private String author;
    private String country;
    private String imageLink;
    private String language;
    private String link;
    private Integer pages;
    private String title;
    private Integer year;
    @DocumentReference
    private List<Review> reviewIds;
    private Integer key;


}
