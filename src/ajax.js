import axios from './axiosConfig';

// Challenge 1: Use console.log() to output an array with all of your article data from the API

axios.get("/articles").then(( { data } ) => {
    console.log(data.data);
});

// Challenge 2: Create a new article using axios and then console.log() its ID

axios.post("/articles", {
    title: "Second Post",
    content: "Some more stuff",
    tags: ['more', 'boring', 'stuff'],
}).then(( {data} ) => {
    console.log(data.data.id);
});

// Challenge 3: Fetch one of your articles from the API and console.log() it

axios.get("/articles/39").then(( { data } ) => {
    console.log(data.data);
});

// Challenge 4: Add a new tag to one of your articles and console.log() the tags array from the response

axios.patch("/articles/39", {
    tags: ['more', 'boring', 'stuff', 'fakenews']
}).then(( { data } ) => {
    console.log(data.data.tags);
});

// Challenge 5: Delete an article and console.log() "Deleted" once you get back a response

axios.delete("/articles/40").then(( console.log("Deleted")));

// Challenge 6: Add a comment to an article using axios and console.log() its ID

axios.post("/articles/39/comments", {
    email: "myemail@email.com",
    comment: "Love your work, it fills me with joy",
}).then(( {data} ) => {
    console.log(data.data.id);
});

// Challenge 7: Use console.log() to list all of the comments for one of your articles

axios.get("/articles/39/comments").then(( { data } ) => {
    console.log(data.data);
});

// Challenge 8: Use console.log() to output a list of all the tags

axios.get("/tags").then(( { data } ) => {
    console.log(data.data);
});

// Challenge 9: Try fetching an article with an ID that doesn't exist and console.log() "Not found" when it fails

axios.get("/articles/100").then(( { data } ) => {
    console.log(data.data);
}).catch(console.log("Not Found"));

axios.get("/articles/100").then(( { data } ) => {
    console.log(data.data);
}, () => {
    console.log("Not Found");
});

// Challenge 10: Using console.log() output an array of just the titles of all the articles

axios.get("/articles").then(( { data }) => {
    let titles = data.data.map((article) => article.title);
    console.log(titles);
})

// Challenge 11: Use console.table() to output a frequency table for how often a tag is used
