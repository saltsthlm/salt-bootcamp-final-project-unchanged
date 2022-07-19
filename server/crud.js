// const { MongoClient } = require('mongodb');
import { MongoClient } from 'mongodb';

const PASSWORD = '1234SALT';
const uri = 'mongodb+srv://codeClub:'+PASSWORD+'@movie-project.rhbq4r1.mongodb.net/?retryWrites=true&w=majority';

async function main() {


    const client = new MongoClient(uri);

    try {
        // Connect to the MongoDB cluster
        await client.connect();

        await createListing(client,
          {
            user: "user1@gmail.com",
            liked_movies: [
              {
                name: "The Karate Kid",
                summary: "After some violent confrontations with his new classmates, Daniel LaRusso learns karate from Japanese handyman Mr. Miyagi, in order to defend himself.",
                img: 'someurlstringhere',
                gene: ['action', 'family', 'drama'],
                userScore: 72,
                id: 1671
              }
            ],
            disliked_movie: [

            ]
          }
        );

        // Make the appropriate DB calls

    } finally {
        // Close the connection to the MongoDB cluster
        await client.close();
    }
}

main().catch(console.error);

async function createListing(client, newListing){
  const result = await client.db("movies_db").collection("movie_collection").insertOne(newListing);
  console.log(`Added a new movie for user ${newListing.user} to the database!`);
}

const test = () => {
  MongoClient.connect(uri, function(err, db) {
  if (err) throw err;
  var dbo = db.db("movies_db");
  var myquery = { user: "user1@gmail.com" };
  var newvalues = { $set: { liked_movies: {
    name: "New Karate Kid",
    summary: "After some violent confrontations with his new classmates, Daniel LaRusso learns karate from Japanese handyman Mr. Miyagi, in order to defend himself.",
    img: 'someurlstringhere',
    gene: 2,
    userScore: 8.2,
    id: 123129,
  } } };
  dbo.collection("movie_collection").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
  });
  });
}

test();