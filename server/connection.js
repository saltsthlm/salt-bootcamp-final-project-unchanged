const { MongoClient } = require('mongodb');

async function main(){
const uri = 'mongodb+srv://codeClub:123456@sample_mflix.rhbq4r1.mongodb.net/?retryWrites=true&w=majority';
// app uri: mongodb+srv://codeClub:123456@movie-project.rhbq4r1.mongodb.net/?retryWrites=true&w=majority

  const client = new MongoClient(uri);

  try {
      // Connect to the MongoDB cluster
      await client.connect();

      // Make the appropriate DB calls
      await  listDatabases(client);

  } catch (e) {
      console.error(e);
  } finally {
      await client.close();
  }
}

main().catch(console.error);

async function listDatabases(client){
  databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};