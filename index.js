const express = require('express')
const app = express();

const router = require('./app/routers/router')

const PORT = 3333;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use((req ,res ,next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(`Access-Control-Allow-Methods`, `GET, PATCH, PUT, POST, DELETE, OPTIONS, HEAD`);
  res.header(`Access-Control-Allow-Headers`, `Origin, X-Requested-With,Content-Type,Authorization, Accept`);
  res.header(`Access-Control-Allow-Credentials`, true);
  next();
})
app.use(router);
app.use(express.static('docs'));

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
