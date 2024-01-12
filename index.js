const express = require('express')
// const bodyParser = require('body-parser')
const app = express()
const port = 3000

function sum(n){
  let ans = 0;
  for(let i=0; i<=n; i++){
    ans += i;
  }
  return ans;
}

// app.use(bodyParser.json());

app.get('/', (req, res) => {
  // console.log(req.body);
  const n = req.query.n;
  const ans = sum(n);
  res.send("hello world your asn is "+ans);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})