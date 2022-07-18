import express from 'express';
const PORT = process.env.PORT || 3001;
const app = express();
import cors from 'cors';
import fetch from'node-fetch';


// app.get("/api", (req, res) => {
//   res.json({ message: "Hello from Express!" });
// });


// app.get("/search/:search", (req,res)=>{
//   const word =  req.params.search;
//   client.define(word)
  
//   .then(function(result){
      
//      return res.status(200).json(result).end();
//    });
   
//        });
app.use(cors())

app.get('/movie', async (req,res)=>{
  const url = "https://api.themoviedb.org/3/discover/movie?with_genres=18&api_key=2b61576c6129138ce5beeb3937518565&language=en-US";
  const option={
    "method" : "GET",
  }
  const response = await fetch(url, option)
  .then(res => res.json())
  .catch(e => {
    console.log({
      "message" : "oh noes",
      error : e,
    });
  })

  console.log("RESPONSE", response);
  res.json(response)
})










app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

//test 