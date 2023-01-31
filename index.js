const express = require("express"); 


//spusteni expresu a definovani portu
const app = express();
const port = 3001;
//route
app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  // metody: get, post, put, delte
  app.get("/test", (req, res) => {
     res.send("Toto je nas testovací dotaz")
  })
  //- prirazeni portu a url serveru
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  