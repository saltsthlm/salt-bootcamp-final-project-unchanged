const { MongoClient } = require('mongodb');

const PASSWORD = '1234SALT';

async function main() {

  const uri = 'mongodb+srv://codeClub:'+PASSWORD+'@movie-project.rhbq4r1.mongodb.net/?retryWrites=true&w=majority';

    const client = new MongoClient(uri);

    try {
        // Connect to the MongoDB cluster
        await client.connect();

        await createListing(client,
          {
              name: "The Karate Kid",
              summary: "After some violent confrontations with his new classmates, Daniel LaRusso learns karate from Japanese handyman Mr. Miyagi, in order to defend himself.",
              img: 'someurlstringhere',
              gene: ['action', 'family', 'drama'],
              userScore: 72
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
  console.log(`New movie added to the database with the id: ${result.insertedId}`);
}
