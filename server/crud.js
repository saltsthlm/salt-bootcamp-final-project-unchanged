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
              name: "Lovely Loft",
              summary: "A charming loft in Paris",
              bedrooms: 1,
              bathrooms: 1
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
  const result = await client.db("sample_airbnb").collection("listingsAndReviews").insertOne(newListing);
  console.log(`New listing created with the following id: ${result.insertedId}`);
}
